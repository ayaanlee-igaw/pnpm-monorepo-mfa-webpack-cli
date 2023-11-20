import { setupWorker } from "msw/browser";
import { designSystemComponentsHandlers } from "./handlers/handlers";

// https://mswjs.io/docs/api/setup-worker/
export const worker = setupWorker(...designSystemComponentsHandlers);
