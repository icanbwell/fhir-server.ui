import express from 'express';
import path from "path";

const app = express();
const PORT = 3000;

// serve react js and css files
app.use('/static', express.static(path.join(__dirname, './web/build/static')));


app.get('/', (req, res) => {
    res.send('Hello from Express and TypeScript!');
});

if (isTrue(env.AUTH_ENABLED)) {
    // Set up admin routes
    // noinspection JSCheckFunctionSignatures
    passport.use('adminStrategy', strategy);
    app.use(cors(fhirServerConfig.server.corsOptions));
}

// eslint-disable-next-line new-cap
const adminRouter = express.Router({mergeParams: true});
if (isTrue(env.AUTH_ENABLED)) {
    adminRouter.use(passport.initialize());
    adminRouter.use(passport.authenticate('adminStrategy', {session: false}, null));
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
