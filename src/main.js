import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLuckyCanvas from "@lucky-canvas/vue";

createApp(App).use(store).use(router).use(VueLuckyCanvas).mount("#app");
