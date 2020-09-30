import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jsppUi from "@/libs/jspp-ui";

createApp(App)
    .use(store)
    .use(jsppUi)
    .use(router)
    .mount("#app");