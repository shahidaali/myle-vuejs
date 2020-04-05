import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/vue2-dropzone/dist/vue2Dropzone.min.css";
import "@/assets/scss/argon.scss";
import "@/assets/vendor/custom/custom.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "@/components/SidebarPlugin/index"
import NotificationPlugin from "@/components/NotificationPlugin/index"
import { store } from '@/store';

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(NotificationPlugin);
  }
};
