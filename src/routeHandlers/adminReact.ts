import path from 'path';
import {IncomingMessage} from 'http';
import {Response, NextFunction} from 'express';
import {ScopesManager} from "../security/scopesManager";
import ConfigManager from "../utils/configManager";

/**
 * Handles admin routes via React UI
 * @param {IncomingMessage} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function handleAdminReact(
    req: IncomingMessage,
    res: Response,
    next: NextFunction
): Promise<void> {
    const scopesManager: ScopesManager = new ScopesManager();
    const scope: string | undefined = scopesManager.getScopeFromRequest({req});
    const adminScopes: string[] = scopesManager.getAdminScopes({scope});
    const configManager: ConfigManager = new ConfigManager();

    if (!configManager.authEnabled || adminScopes.length > 0) {
        const path1 = path.join(__dirname, '../web/build', 'index.html');
        // console.log(`Route: /runPersonMatch/*: ${path1}`);
        return res.sendFile(path1);
    }
    return next();
}

export {
    handleAdminReact
};
