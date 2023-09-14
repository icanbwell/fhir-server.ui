import express from 'express';
import path from "path";
import ConfigManager from "./utils/configManager";
import {isTrue} from "./utils/isTrue";
import passport from "passport";
import {strategy} from "./strategies/jwt.bearer.strategy";
import {handleAdminReact} from "./routeHandlers/adminReact";

const app = express();
const PORT = 3000;

// serve react js and css files
app.use('/static', express.static(path.join(__dirname, './web/build/static')));


app.get('/', (req, res) => {
    res.send('Hello from Express and TypeScript!');
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


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
