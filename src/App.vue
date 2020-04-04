<template>
  <div id="app">
    <notifications></notifications>
    <router-view />
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
            }
        },
        mounted() {
            const loggedIn = localStorage.getItem('user');

            this.authenticated = (loggedIn) ? true : false;

            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear' 
            })
        },
        watch: {
            $route (to, from){
                // clear alert on location change
                this.clearAlert();
            }
        } 
    }
</script>