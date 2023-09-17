import http from "http";
import {app} from "./app";

const server = http
    .createServer(app)
    .listen(3000, undefined, undefined, async () => {
        // const image = process.env.DOCKER_IMAGE || '';
        console.log(`Server has started on port 3000`);
    });

export {server};
