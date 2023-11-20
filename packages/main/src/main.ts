import "element-plus/dist/index.css";
import "@monorepo/design-system/src/styles/styles.scss";

import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);

// https://mswjs.io/docs/integrations/browser
async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    return worker.start();
  }
  return;
}

enableMocking().then(() => {
  app.use(createPinia());
  app.use(ElementPlus);
  app.use(router);
  app.component(
    "DfnAlert",
    defineAsyncComponent(async () => {
      const { DfnAlert } = await import("designSystemComponents/components");
      return DfnAlert || undefined;
    }),
  );
  app.mount("#app");
});
