import userService from "@/services/user.service"

export default {
  install(Vue) {
    Vue.use(userService);
  }
};
