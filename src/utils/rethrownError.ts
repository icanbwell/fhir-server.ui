import { OperationOutcomeIssue } from 'fhir/r4';

/**
 * This class can be used to rethrow errors
 */
class RethrownError extends Error {
  name: string;
  original_error: Error;
  issue: OperationOutcomeIssue[];
  stack_before_rethrow: string | undefined;
  args: object | undefined;
  source: string | undefined;
  nested: Error;
  statusCode: number;

  /**
   * Constructor
   */
  constructor({
    message,
    error,
    args,
    source,
  }: {
    message?: string;
    error: Error;
    args?: object;
    source?: string;
  }) {
    super(!message && error && error.message ? error.message : message);

    if (!message && error && error.message) {
      message = error.message;
    }
    this.name = this.constructor.name;
    if (!error) {
      throw new Error('RethrownError requires a message and error');
    }
    // @ts-ignore
    this.original_error = error.original_error || error;
    // @ts-ignore
    this.issue = error.issue;
    this.stack_before_rethrow = this.stack;
    this.args = args;
    if (this.args) {
      // @ts-ignore
      this.removeExcludedResources(this.args.parentEntities);
    }
    this.source = source;

    this.nested = error;

    // @ts-ignore
    this.statusCode = error.statusCode; // keep same statusCode

    // @ts-ignore
    // noinspection SuspiciousTypeOfGuard
    if (message instanceof Error) {
      error = message;
    } else if (typeof message !== 'undefined') {
      Object.defineProperty(this, 'message', {
        value: message,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
    Error.captureStackTrace(this, this.constructor);
    var oldStackDescriptor: PropertyDescriptor | undefined = Object.getOwnPropertyDescriptor(this, 'stack');
    if (oldStackDescriptor) {
      var stackDescriptor = this.buildStackDescriptor(
        oldStackDescriptor,
        error,
      );
      // @ts-ignore
      this.stack = typeof stackDescriptor === 'function' ? stackDescriptor.get() : stackDescriptor.value;
    }
    if (this.issue) {
      this.issue.forEach((i) => {
        i.diagnostics = process.env.IS_PRODUCTION ? this.message : this.stack;
      });
    }
  }

  /**
   * returns list of resource not to be shown in error messages
   * @returns {string[]}
   */
  getExcludedResources(): string[] {
    return process.env.LOG_EXCLUDE_RESOURCES
      ? process.env.LOG_EXCLUDE_RESOURCES.split(',')
      : [];
  }

  /**
   * remove sensitive resources from args passed
   * @param {Object|undefined} [args]
   */
  removeExcludedResources(args: Object | undefined): void {
    if (!args) {
      return;
    }
    const logExcludeResources = this.getExcludedResources();
    if (Array.isArray(args)) {
      for (let prop in args) {
        logExcludeResources.forEach((resource) => {
          if (args[Number(prop)] && args[Number(prop)].resourceType === resource) {
            delete args[Number(prop)];
          }
        });
        this.removeExcludedResources(args[Number(prop)]);
      }
    }
  }

  /**
   * builds stacks
   * @param oldStackDescriptor
   * @param {Error} nested
   * @return {{value: string}|{get: (function(): string)}}
   */
  buildStackDescriptor(
    oldStackDescriptor: PropertyDescriptor,
    nested: Error,
  ): { value: string } | { get: () => string } {
    if (oldStackDescriptor.get) {
      const self = this;
      return {
        get: function (): string {
          // @ts-ignore
          let stack = oldStackDescriptor.get.call(this);
          return self.buildCombinedStacks(stack, self.nested);
        },
      };
    } else {
      let stack = oldStackDescriptor.value;
      return {
        value: this.buildCombinedStacks(stack, nested),
      };
    }
  }

  /**
   * builds combined stacks
   * @param {string} stack
   * @param {Error} nested
   * @return {string}
   */
  buildCombinedStacks(stack: string, nested: Error): string {
    if (nested) {
      stack = nested.stack + '\r\nCauses: ' + stack;
    }
    return stack;
  }
}

/**
 * rethrows an exception with the provided message
 * @param {string} message
 * @param {Error} error
 */
function reThrow({ message, error }: { message: string; error: Error }): void {
  throw new RethrownError({ message, error });
}

export { RethrownError, reThrow };
