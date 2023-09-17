import express from 'express';
import path from "path";
import ConfigManager from "./utils/configManager";
import {isTrue} from "./utils/isTrue";
import passport from "passport";
import {strategy} from "./strategies/jwt.bearer.strategy";
import {handleAdminReact} from "./routeHandlers/adminReact";

const app = express();

app.get('/health', (req, res) => res.json({status: "OK"}));
// serve react js and css files
app.use('/static', express.static(path.join(__dirname, './web/build/static')));


app.get('/', (req, res) => {
    console.log('Hello from Express and TypeScript!');
    res.send('Hello from Express and TypeScript!');
});

app.get('/api/env', (req, res) => {
    // Send only the environment variables you want to expose
    res.json({
        FHIR_SERVER_URL: process.env.FHIR_SERVER_URL,
    });
});

// handles when the user is redirected by the OpenIDConnect/OAuth provider
app.get('/authcallback', (req, res) => {
    const configManager = new ConfigManager();
    const httpProtocol = configManager.ENVIRONMENT === 'local' ? 'http' : 'https';
    // @ts-ignore
    const state: string = req.query.state ;
    const resourceUrl = state ?
        encodeURIComponent(Buffer.from(state, 'base64').toString('ascii')) : '';
    const redirectUrl = `${httpProtocol}`.concat('://', `${req.headers.host}`, '/authcallback');
    res.redirect(
        `/callback.html?code=${req.query.code}&resourceUrl=${resourceUrl}` +
        `&clientId=${configManager.AUTH_CODE_FLOW_CLIENT_ID}&redirectUri=${redirectUrl}` +
        `&tokenUrl=${configManager.AUTH_CODE_FLOW_URL}/oauth2/token`
    );
});

const configManager = new ConfigManager();

if (isTrue(configManager.authEnabled)) {
    // Set up admin routes
    passport.use('adminStrategy', strategy);
    // app.use(cors(fhirServerConfig.server.corsOptions));
}

const adminRouter = express.Router({mergeParams: true});
if (isTrue(configManager.authEnabled)) {
    adminRouter.use(passport.initialize());
    adminRouter.use(passport.authenticate('adminStrategy', {session: false}, undefined));
}
adminRouter.get('/admin/:op?',
    (req, res, next) => handleAdminReact(
        req, res, next
    )
);
app.use(adminRouter);

export {app};
