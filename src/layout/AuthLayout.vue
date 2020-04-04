<template>
    <div class="main-content">
        <!-- Page content -->
        <div class="container pt-5 pb-5">
            <slide-y-up-transition mode="out-in" origin="center top">
                <router-view></router-view>
            </slide-y-up-transition>
        </div>
    </div>
</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'auth-layout',
    components: {
      SlideYUpTransition
    },
    data() {
      return {
        year: new Date().getFullYear(),
        showMenu: false
      }
    }
  }
</script>
<style scoped>
    .main-content:before {
        position: fixed;
        left: 0;
        top: 0;
        content: "";
        background: url('/img/myle/bg_login_left.png') no-repeat top center;
        width: 100%;
        max-width: 685px;
        height: 100%;
        z-index: -1;
    }
</style>
