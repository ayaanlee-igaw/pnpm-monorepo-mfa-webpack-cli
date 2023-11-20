import { setupWorker } from "msw/browser";
import { handlers } from "./handlers/handlers";

// https://mswjs.io/docs/api/setup-worker/
export const worker = setupWorker(...handlers);
