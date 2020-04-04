<template>
        <!-- Header -->
        

        <div class="row justify-content-center">
            <div class="col-md-5">
                
            </div>
            <div class="col-md-7">
                <div class="row justify-content-center">
                    <div class="col-md-7">
                        <div class="login-box">
                            <div class="header text-center pb-3">
                                <router-link class="login-brand" to="/">
                                    <img src="img/myle/logo.svg" class="mb-3" />
                                </router-link>
                                <h1 class="text-lead">#MakeYourLifeEntertaining</h1>
                                <h2 class="text-lead">Let’s Get You Started</h2>
                            </div>
                            <div class="box-body">
                                <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                                <form role="form" @submit.prevent="handleSubmit">
                                    <base-input class="mb-3"
                                                placeholder="Username"
                                                addon-left-icon="ni ni-email-83"
                                                v-model="username">
                                    </base-input>

                                    <base-input class=""
                                                placeholder="Password"
                                                type="password"
                                                addon-left-icon="ni ni-lock-circle-open"
                                                v-model="password">
                                    </base-input>

                                    <div class="row mt-3">
                                        <div class="col-6">
                                            <base-checkbox class="custom-control-alternative">
                                                <span class="text-muted">Remember me</span>
                                            </base-checkbox>
                                            
                                        </div>
                                        <div class="col-6 text-right">
                                            <!-- <router-link to="/register" class="text-light"><small>Create new account</small></router-link> -->
                                            <a href="#" class="text-light"><small>Forgot password?</small></a>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <base-button type="primary" class="my-4" v-on:click="handleSubmit">Sign in</base-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        submitted: false
      }
    },
    computed: {
        ...mapState('account', ['user', 'status']),
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit(e) {
            this.submitted = true;
            if(this.username != "" && this.password != "") {
                const { username, password } = this;
                this.login( { username, password } );
            } else {
                this.alert.type = 'alert-danger';
                this.alert.message = 'Invalid usernmae or password';
            }
        },
    },
    mounted() {
        
    },
    created () {
        // reset login status
        this.logout();
    },
  }
</script>
<style>
</style>
