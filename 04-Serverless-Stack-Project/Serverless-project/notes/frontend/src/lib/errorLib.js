import * as Sentry from "@sentry/browser";
import config from "../config";
import { useAlert } from 'react-alert'

const isLocal = false;

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({ dsn: config.SENTRY_DSN });
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export default function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);

    alert(message);
}