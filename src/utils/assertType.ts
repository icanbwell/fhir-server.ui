import { RethrownError } from './rethrownError';
import { getCircularReplacer } from './getCircularReplacer';

/**
 * Class for assertion errors
 */
class AssertionError extends Error {
  /**
   * Constructor
   * @param {string} message
   */
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * asserts if the object is null/undefined or not an instance of the passed in type
 * @param {Object|null|undefined} obj
 * @param type
 * @param {string|undefined} [message]
 * @throws {AssertionError}
 */
function assertTypeEquals(
  obj: object | null | undefined,
  type: any,
  message?: string,
): void {
  if (!obj) {
    /**
     * @type {string}
     */
    const message1: string = message
      ? message
      : `obj of type ${type.name} is null or undefined`;
    throw new AssertionError(message1);
  }
  if (!(obj instanceof type)) {
    throw new AssertionError(
      message
        ? message
        : `Type of obj ${typeof obj} is not the expected type ${type.name}`,
    );
  }
}

/**
 * assert is valid
 * @param {Object|boolean} obj
 * @param {string|undefined} [message]
 * @throws {AssertionError}
 */
function assertIsValid(obj: object | boolean, message?: string): void {
  if (!obj) {
    throw new AssertionError(message ? message : 'obj is null or undefined');
  }
}

/**
 * fails assert
 * @param {string} source
 * @param {string} message
 * @param {Object} args
 * @param {Error|undefined} [error]
 */
function assertFail({
  source,
  message,
  args,
  error,
}: {
  source: string;
  message: string;
  args: object;
  error?: Error;
}): void {
  /**
   * @type {string}
   */
  let text: string = `${source}: ${message}`;
  if (error) {
    throw new RethrownError({ message: text, error });
  } else {
    if (args) {
      text += ' | ' + JSON.stringify(args, getCircularReplacer());
    }
    throw new AssertionError(text);
  }
}

export { assertTypeEquals, assertIsValid, assertFail };
