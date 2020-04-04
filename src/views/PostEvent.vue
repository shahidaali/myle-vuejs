<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9">
                
                <h1 class="text-uppercase text-center mb-4"><span class="regular">Post EVENT</span></h1>
                <div class="row justify-content-center mb-5">
                    <div class="col-md-8">
                        <div class="row setup-panel text-center">
                          <div class="col">
                            <a class="btn btn-default active" href="javascript:void(0);" id="step-1tab">1</a>
                            <p>Event Details</p>
                          </div>
                          <div class="col">
                            <a class="btn btn-default" href="javascript:void(0);" id="step-2tab">2</a>
                            <p>Tickets</p>
                          </div>
                          <div class="col">
                            <a class="btn btn-default" href="javascript:void(0);" id="step-3tab">3</a>
                            <p>Notifications</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                        <form role="form" @submit.prevent="handleSubmit">
                            <div class="card bg-white shadow border-0">
                                <div class="card-body px-lg-4 py-lg-4">
                                    <h3 class="mb-3">Images &amp; Video</h3>

                                    <div class="row">
                                        <div class="col-6">
                                          <div class="form-group mb-2 mb-md-0" id="imageUploader">
                                            <small class="d-block mb-2">1 or Max 3 Images of 1024x786 & max file size of 10MB * <br><br>Only jpg, jpeg & png are allowed.</small> 
                                            <base-input-file class="mb-3"
                                                v-model="username">
                                            </base-input-file>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="form-group mb-2 mb-md-0" id="VideoUploader">
                                            <video controls="" id="vid" style="display:none" width="500px"></video> <small class="d-block mb-2">10 second video and max file size 30MB * <br><br>Only mp4 & mov Video are allowed.</small> 
                                            <base-input-file class=""
                                                v-model="password">
                                            </base-input-file>
                                          </div>
                                        </div>
                                      </div>

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
        // this.logout();
    },
  }
</script>
<style>
.setup-panel {
    font-weight: normal;
    color: #C6C6C6;
    font-size: 14px;
}
.setup-panel .col {
    position: relative;
}
.setup-panel .col:before {
    position: absolute;
    left: calc(50% + 23px);
    right: 0;
    top: 12.5px;
    border-bottom: solid 1px #C6C6C6;
    content: "";
    width: calc(100% - calc(12% + 23px));
}
.setup-panel .col:last-child:before {
    content: none;
}
.setup-panel .btn-default {
    background-color: #C6C6C6;
    border-color: #C6C6C6;
    color: #ffffff;
    font-size: 14px;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    padding: 2px;
    font-weight: normal;
    margin-bottom: 5px;
}
.setup-panel .active {
    background-color: #28816D;
    border-color: #28816D;
}
.setup-panel .active + p {
    color: #28816D;
}
</style>
