import path from 'path';
import { IncomingMessage } from 'http';
import { Response, NextFunction } from 'express';
import { ScopesManager } from '../security/scopesManager';
import ConfigManager from '../utils/configManager';
import { logDebug } from '../utils/logging';

/**
 * Handles admin routes via React UI
 * @param {IncomingMessage} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function handleAdminReact(
  req: IncomingMessage,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction,
): Promise<void> {
  console.log('admin');
  const scopesManager: ScopesManager = new ScopesManager();
  const scope: string | undefined = scopesManager.getScopeFromRequest({ req });
  const adminScopes: string[] = scopesManager.getAdminScopes({ scope });
  const configManager: ConfigManager = new ConfigManager();

  if (!configManager.authEnabled || adminScopes.length > 0) {
    const path1 = path.join(__dirname, '../../build', 'index.html');
    console.log(`Route: /runPersonMatch/*: ${path1}`);
    return res.sendFile(path1);
  } else {
    console.log(req);
    console.log('No Auth found');
    // Redirect to login page

    // can't just urlencode per https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html
    // "You can't set the value of a state parameter to a URL-encoded JSON string. To pass a string that matches
    // this format in a state parameter, encode the string to Base64, then decode it in your app.
    // @ts-ignore
    const resourceUrl = req.originalUrl ? Buffer.from(req.originalUrl).toString('base64') : '';

    const httpProtocol = configManager.ENVIRONMENT === 'local' ? 'http' : 'https';
    const redirectUrl =
      `${configManager.AUTH_CODE_FLOW_URL}/login?` +
      `response_type=code&client_id=${configManager.AUTH_CODE_FLOW_CLIENT_ID}` +
      `&redirect_uri=${httpProtocol}://${req.headers.host}/authcallback&state=${resourceUrl}`;
    logDebug('Redirecting', { user: '', args: { redirect: redirectUrl } });
    return res.redirect(redirectUrl);
  }
}

export { handleAdminReact };
