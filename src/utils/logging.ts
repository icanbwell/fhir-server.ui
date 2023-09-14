import {isTrue} from "./isTrue";

export function logDebug(message: string, meta: any = {}) {
    if (isTrue(process.env.LOG_DEBUG)) {
        console.debug(message, meta);
    }
}

export function logError(message: string, meta: any = {}) {
    console.info(message, meta);
}
