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

                            <!-- Card -->
                            <div class="card bg-white shadow border-0 mb-4">
                                <div class="card-body px-lg-4 py-lg-4">
                                    <h4 class="mb-3">Images &amp; Video</h4>

                                    <div class="row">
                                        <div class="col-6">
                                          <div class="form-group mb-2 mb-md-0" id="imageUploader">
                                            <small class="d-block mb-2">1 or Max 3 Images of 1024x786 & max file size of 10MB * <br><br>Only jpg, jpeg & png are allowed.</small> 
                                            <vue-dropzone
                                              ref="dropzoneImages"
                                              id="dropzoneImages"
                                              :options="dropOptionImages"
                                              @vdropzone-addedfile="afterCompleteImages"
                                            ></vue-dropzone>
                                            <div id="imagePreview" class="dropzone-previews"></div>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="form-group mb-2 mb-md-0" id="VideoUploader">
                                            <video controls="" id="vid" style="display:none" width="500px"></video> <small class="d-block mb-2">10 second video and max file size 30MB * <br><br>Only mp4 & mov Video are allowed.</small> 
                                            <vue-dropzone
                                              ref="dropzoneVideos"
                                              id="dropzoneVideos"
                                              :options="dropOptionVideos"
                                              @vdropzone-addedfile="afterCompleteVideos"
                                            ></vue-dropzone>
                                            <div id="videoPreview" class="dropzone-previews"></div>
                                          </div>
                                        </div>
                                      </div>
                                </div>
                            </div><!-- #Card -->

                            <!-- Card -->
                            <div class="card bg-white shadow border-0 mb-4">
                                <div class="card-body px-lg-4 py-lg-4">
                                    <div class="row">
                                        <div class="col-6">
                                          <h4>Choose Categories <small class=" d-block d-xl-inline-block">(Maximum 3 categories) *</small></h4>
                                          <div class="form-group mb-2 mb-md-0">
                                            <multiselect 
                                                v-model="model.selectedCategories" :options="categories"
                                                track-by="name" 
                                                label="name"
                                                :max="3"
                                                :multiple="true"
                                                :close-on-select="false"
                                            ></multiselect>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                            <h4>Subcategories <small class="d-block d-xl-inline-block">*</small></h4>
                                            <multiselect 
                                                v-model="model.selectedSubCategories" :options="getSubCategories"
                                                track-by="name" 
                                                label="name"
                                                group-label="group" 
                                                group-values="subcategories"
                                                :group-select="false"
                                                :multiple="true"
                                                :close-on-select="false"
                                            ></multiselect>
                                        </div>
                                      </div>
                                </div>
                            </div><!-- #Card -->

                            <!-- Card -->
                            <div class="card bg-white shadow border-0 mb-4">
                                <div class="card-body px-lg-4 py-lg-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <h4>General Details</h4>
                                            <base-input class="mb-3"
                                                placeholder="Enter Title *"
                                                v-model="model.title"
                                                slot="input"
                                                floating-label="Enter Title *"
                                                input-id="title"
                                                >
                                            </base-input>
                                            <div class="form-row mb-0">
                                                <div class="col-md-6">
                                                    <base-input class="mb-3"
                                                        floating-label="Start Date *"
                                                        input-id="startDate"
                                                        >
                                                        <date-picker 
                                                            v-model="model.startDate" 
                                                            @dp-change="doSomethingOnChange"
                                                            :config="dataOptions"
                                                            placeholder="Start Date *"
                                                            slot="field"
                                                            class="floating-label-field floating-label-field--s3"
                                                            id="startDate"
                                                        ></date-picker>
                                                    </base-input>
                                                </div>
                                                <div class="col-md-6">
                                                    <base-input class="mb-3"
                                                        floating-label="Start Time *"
                                                        input-id="startTime"
                                                        >
                                                        <date-picker 
                                                            v-model="model.startTime" 
                                                            @dp-change="doSomethingOnChange"
                                                            :config="timeOptions"
                                                            placeholder="Start Time *"
                                                            slot="field"
                                                            class="floating-label-field floating-label-field--s3"
                                                            id="startTime"
                                                        ></date-picker>
                                                    </base-input>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center mb-3">
                                                <label class="mb-0 mr-3" for="have-end-date">Does your event have an end date?</label>
                                                <toggle-button :value="false"
                                                   v-model="model.hasEndDate"
                                                   color="#28816D"
                                                   switch-color="#ffffff"
                                                   :sync="true"
                                                   :labels="false"
                                                   :height="16"
                                                   :width="40"
                                                />
                                            </div>
                                            <div class="form-row mb-0">
                                                <div class="col-md-6">
                                                    <base-input class="mb-3" v-bind:class="{'read-only': !model.hasEndDate}"
                                                        floating-label="End Date *"
                                                        input-id="endDate"
                                                        >
                                                        <date-picker 
                                                            v-model="model.endDate" 
                                                            @dp-change="doSomethingOnChange"
                                                            :config="dataOptions"
                                                            placeholder="End Date *"
                                                            slot="field"
                                                            class="floating-label-field floating-label-field--s3"
                                                            id="endtDate"
                                                        ></date-picker>
                                                    </base-input>
                                                </div>
                                                <div class="col-md-6">
                                                    <base-input class="mb-3"
                                                        floating-label="End Time *"
                                                        input-id="startTime" v-bind:class="{'read-only': !model.hasEndDate}"
                                                        >
                                                        <date-picker 
                                                            v-model="model.endTime" 
                                                            @dp-change="doSomethingOnChange"
                                                            :config="timeOptions"
                                                            placeholder="End Time *"
                                                            slot="field"
                                                            class="floating-label-field floating-label-field--s3"
                                                            id="endTime"
                                                        ></date-picker>
                                                    </base-input>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center mb-3">
                                                <label class="mb-0 mr-3">Allow MYLERs to chat with me</label>
                                                <toggle-button :value="false"
                                                   v-model="model.allowMylers"
                                                   color="#28816D"
                                                   switch-color="#ffffff"
                                                   :sync="true"
                                                   :labels="false"
                                                   :height="16"
                                                   :width="40"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h4>Event Visibilty</h4>
                                            <div class="d-flex align-items-center mb-3">
                                                <label class="mb-0 mr-3">Private Event</label>
                                                <toggle-button :value="false"
                                                   v-model="model.isPrivate"
                                                   color="#28816D"
                                                   switch-color="#ffffff"
                                                   :sync="true"
                                                   :labels="false"
                                                   :height="16"
                                                   :width="40"
                                                />
                                            </div>
                                            <base-input class="mb-3"
                                                v-bind:class="{'read-only': !model.isPrivate}"
                                                placeholder="Private Code"
                                                v-model="model.privateCode"
                                                slot="input"
                                                floating-label="Private Code"
                                                input-id="privateCode"
                                                >
                                            </base-input> 
                                        </div>
                                      </div>
                                </div>
                            </div><!-- #Card -->

                            <!-- Card -->
                            <div class="card bg-white shadow border-0 mb-4">
                                <div class="card-body px-lg-4 py-lg-4">
                                     <h4 class="mb-3">Recurring 
                                        <label class="mb-0 mr-3" for="even_recurring"><small>Is your event recurring?</small></label> 

                                        <toggle-button :value="false"
                                           v-model="model.isRecurring"
                                           color="#28816D"
                                           switch-color="#ffffff"
                                           :sync="true"
                                           :labels="false"
                                           :height="16"
                                           :width="40"
                                        />
                                    </h4>   
                                    <div class="row">
                                        <div class="col-md-6 mb-3 d-flex justify-content-between align-items-center order-1 order-md-1" v-for="day in weekDays"  v-bind:class="{'read-only': !model.isRecurring}">
                                            <base-checkbox 
                                                class="custom-control-alternative day-checkbox"
                                                v-model="day.isActive"
                                                >
                                                <span class="text-muted">{{ day.day }}</span>
                                            </base-checkbox>

                                            <base-input class="mr-1" v-bind:class="{'read-only': !day.isActive}"
                                                floating-label="Start Time"
                                                input-id="`day-${day}-startTime`"
                                                >
                                                <date-picker 
                                                    v-model="day.startTime" 
                                                    @dp-change="doSomethingOnChange"
                                                    :config="dataOptions"
                                                    placeholder="Start Time"
                                                    slot="field"
                                                    class="floating-label-field floating-label-field--s3"
                                                    id="`day-${day}-startTime`"
                                                ></date-picker>
                                            </base-input>

                                            <base-input v-bind:class="{'read-only': !day.isActive}"
                                                floating-label="End Time"
                                                input-id="`day-${day}-endTime`"
                                                >
                                                <date-picker 
                                                    v-model="day.endTime" 
                                                    @dp-change="doSomethingOnChange"
                                                    :config="dataOptions"
                                                    placeholder="End Time"
                                                    slot="field"
                                                    class="floating-label-field floating-label-field--s3"
                                                    id="`day-${day}-endTime`"
                                                ></date-picker>
                                            </base-input>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- #Card -->

                            <!-- Card -->
                            <div class="card bg-white shadow border-0 mb-4">
                                <div class="card-body px-lg-4 py-lg-4">
                                    <h4 class="mb-3">Pricing</h4>

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="pr-4 pr-md-5 border-right">
                                                <tabs 
                                                tab-nav-classes="nav nav-tabs justify-content-center border-0 mb-4"
                                                :pills="false"
                                                :fill="false"
                                                >
                                                    <tab-pane
                                                        title="Price"
                                                        >
                                                        <div class="form-row">
                                                            <div class="col-md-6">
                                                                <base-input class="mb-3"
                                                                    placeholder="Min Price *"
                                                                    v-model="model.minPrice"
                                                                    slot="input"
                                                                    floating-label="Min Price *"
                                                                    input-id="minPrice"
                                                                    >
                                                                </base-input>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <base-input class="mb-3"
                                                                    placeholder="Max Price *"
                                                                    v-model="model.maxPrice"
                                                                    slot="input"
                                                                    floating-label="Max Price *"
                                                                    input-id="maxPrice"
                                                                    >
                                                                </base-input>
                                                            </div>
                                                        </div>
                                                    </tab-pane>
                                                    <tab-pane
                                                        title="Varies"
                                                        >
                                                        <div class="form-row read-only">
                                                            <div class="col-md-6">
                                                                <base-input class="mb-3"
                                                                    placeholder="Min Price *"
                                                                    v-model="model.variesMinPrice"
                                                                    slot="input"
                                                                    floating-label="Min Price *"
                                                                    input-id="minPrice"
                                                                    >
                                                                </base-input>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <base-input class="mb-3"
                                                                    placeholder="Max Price *"
                                                                    v-model="model.variesMaxPrice"
                                                                    slot="input"
                                                                    floating-label="Max Price *"
                                                                    input-id="maxPrice"
                                                                    >
                                                                </base-input>
                                                            </div>
                                                        </div>
                                                    </tab-pane>
                                                </tabs>
                                            </div>
                                        </div>
                                        

                                      </div>
                                </div>
                            </div><!-- #Card -->

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
  import vueDropzone from "vue2-dropzone";
  import commonHelper from '@/helpers/common-helper.js';
  import Multiselect from 'vue-multiselect'
  import { mapState, mapActions } from 'vuex';
  import datePicker from 'vue-bootstrap-datetimepicker';
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
  import { ToggleButton } from 'vue-js-toggle-button'

  export default {
    name: 'pos-event',
    components: {
        vueDropzone,
        Multiselect,
        datePicker,
        ToggleButton
    },
    data() {
      return {
        submitted: false,
        isTest: false,
        weekDays: [{
            day: 'Monday',
            isActive: false,
            startDate: "",
            startTime: "",
        },{
            day: 'Tuesday',
            isActive: false,
            startDate: "",
            startTime: "",
        },{
            day: 'Wednesday',
            isActive: false,
            startDate: "",
            startTime: "",
        },{
            day: 'Thursday',
            isActive: false,
            startDate: "",
            startTime: "",
        },{
            day: 'Friday',
            isActive: false,
            startDate: "",
            startTime: "",
        },{
            day: 'Saturday',
            isActive: false,
            startDate: "",
            startTime: "",
        },{
            day: 'Sunday',
            isActive: false,
            startDate: "",
            startTime: "",
        }],
        model: {
            selectedCategories: [],
            selectedSubCategories: [],
            title: "",
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: "",
            hasEndDate: false,
            allowMylers: false,
            isPrivate: false,
            privateCode: "",
            isRecurring: false,
            isRecurringTest: false,
        },
        dataOptions: {
            format: 'DD/MM/YYYY'
        },
        timeOptions: {
            format: 'LT'
        },
        commonHelper: commonHelper,
        dropOptionImages: {
          url: "https://httpbin.org/post",
          maxFilesize: 10, // MB
          maxFiles: 3,
          chunking: true,
          chunkSize: 500, // Bytes
          thumbnailWidth: 150, // px
          thumbnailHeight: 150,
          addRemoveLinks: true,
          autoProcessQueue: false,
          acceptedFiles: 'image/*',
          previewsContainer: '#imagePreview'
        },
        dropOptionVideos: {
          url: "https://httpbin.org/post",
          maxFilesize: 10, // MB
          maxFiles: 3,
          chunking: true,
          chunkSize: 500, // Bytes
          thumbnailWidth: 150, // px
          thumbnailHeight: 150,
          addRemoveLinks: true,
          autoProcessQueue: false,
          acceptedFiles: 'video/*',
          previewsContainer: '#videoPreview'
        },
      }
    },
    watch: {
        'model.isPrivate': function () {
            this.model.privateCode = (this.model.isPrivate) ? this.getPrivateCode() : "";
         }
    },
    computed: {
        ...mapState('events', ['categories', 'status']),
        ...mapState({
            alert: state => state.alert
        }),
        getSubCategories() {
            return commonHelper.getSubCategories(this.categories, this.model.selectedCategories);
        },
    },
    methods: {
        ...mapActions('events', ['getCategories', 'logout']),
        handleSubmit(e) {
            this.submitted = true;
            
        },
        afterCompleteImages(file) {
          console.log(file);
          return file;
        },
        afterCompleteVideos(file) {
          console.log(file);
          return file;
        },
        doSomethingOnChange() {

        },
        getPrivateCode() {
            var randomStr = "";
            for (var i=0; i<10; i++) {
                randomStr += Math.floor(Math.random()*0xF).toString(0xF);
            }
            return randomStr;
        }
    },
    mounted() {
        var vm = this;
        
        vm.getCategories();

        console.log(this.$refs.dropzoneImages);
        this.$refs.dropzoneImages.dropzone.on("addedfile", function(file) {
            console.log(this.getAcceptedFiles());
        });
        this.$refs.dropzoneImages.dropzone.on("removedfile", function(file) {
            console.log(this.getAcceptedFiles());
        });
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
.day-checkbox {
    max-width: 130px;
    width: 100%;
}
.form-group {
    margin-bottom: 0rem;
}
</style>
