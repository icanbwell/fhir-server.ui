import { IncomingMessage } from 'http';

class ScopesManager {
  /**
   * Gets admin scopes from the passed in scope string
   * @param {string|undefined} scope
   * @returns {string[]}
   */
  getAdminScopes({ scope }: { scope: string | undefined }): string[] {
    if (!scope) {
      return [];
    }
    const scopes: string[] = scope.split(' ');
    return scopes.filter((s) => s.startsWith('admin/'));
  }

  /**
   * Gets scope from request
   * @param {IncomingMessage} req
   * @return {string|undefined}
   */
  getScopeFromRequest({ req }: { req: IncomingMessage }): string | undefined {
    // @ts-ignore
    return req.authInfo && req.authInfo.scope;
  }
}

export { ScopesManager };
