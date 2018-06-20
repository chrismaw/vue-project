<template>
    <div class="home">
        <div class="text-dark row py-0 py-md-5 mx-0">
            <div class="col-12 col-md-6 p-0 text-center " style="min-height: 130px; white-space: nowrap">
                <img class="img-fluid mx-auto shadow" :src="imageStaff"/>
                <!--<div class="mask flex-center waves-effect waves-light">-->
                    <!--<p class="white-text">Our Staff</p>-->
                <!--</div>-->
                <p class="d-md-none welcome-text serif my-2">
                    Welcome to the&nbsp;office&nbsp;of<br>William&nbsp;J.&nbsp;Coco,&nbsp;DDS, MAGD
                </p>
                <p class="d-none d-md-block welcome-text serif my-2">
                    William&nbsp;J.&nbsp;Coco,&nbsp;DDS,&nbsp;MAGD
                </p>
            </div>
            <div class="d-md-none w-75 mx-auto" style="border: solid 1px black"></div>
            <div id="welcome-msg" class="col-12 col-md-6 py-3 py-md-0 px-md-5 text-center my-2 my-md-0">
                <div class="d-none d-md-block welcome-text serif my-2 my-md-0">Welcome</div>
                <div class="d-none d-md-block w-75 mx-auto mb-3" style="border: solid 1px black"></div>
                <span class="align-middle lead">{{ welcomeMsg }}</span>
                <div class="d-sm-none mt-4">
                    <router-link to="/services" class="btn btn-outline-elegant btn-block py-1 mt-2">Services</router-link>
                    <router-link to="" class="btn btn-outline-elegant btn-block py-1 mt-2">Testimonials</router-link>
                </div>
                <div class="d-none d-sm-block d-md-none mt-4">
                    <router-link to="/services" class="btn btn-outline-elegant" style="min-width: 160px">Services</router-link>
                    <router-link to="" class="btn btn-outline-elegant" style="min-width: 160px">Testimonials</router-link>
                </div>
            </div>
        </div>
        <div id="getintouch" style="background-color: #F9F9F9" class="text-dark row py-0 py-md-5 mx-0">
            <div class="col-12 col-md-6 p-0" style="min-height: 130px">
                <div class="serif lead text-center mt-md-0 my-2 pt-3 pt-md-0">Get in Touch</div>
                <div class="d-md-none w-25 mb-3 mx-auto" style="border: solid 1px black"></div>
                <div class="d-none d-md-block w-50 mb-3 mx-auto" style="border: solid 1px black"></div>

                <div class="row container-fluid mx-0 mb-3 text-center">
                    <div id="phone" class="col-12 col-sm-6">
                        <div class="d-none d-md-block">
                            <span style="text-decoration: underline">Phone:<br></span>
                            <span>252-355-7178</span><br>
                        </div>
                        <div class="d-md-none">
                            <i class="fas fa-phone">&nbsp;</i><a class="" href="">252-355-7178</a><br>
                        </div>
                        <p class=""></p>
                        <div class="d-none d-md-block">
                            <span style="text-decoration: underline">Address:<br></span>
                            <span style="white-space: nowrap">500 Red Banks Rd. Ste A<br>
                            Greenville, NC 27858</span>
                            <p class="d-sm-none"></p>
                        </div>
                        <div class="d-md-none">
                            <i class="fas fa-location-arrow">&nbsp;</i>
                            <a style="text-decoration: double" href="">500 Red Banks Rd. Ste A<br>
                            Greenville, NC 27858</a>
                            <p class="d-sm-none"></p>
                        </div>
                    </div>
                    <div id="hours" class="col-12 col-sm-6 text-center">
                        <span class="d-none d-md-block" style="text-decoration: underline">Office Hours:</span>
                        <div class="row">
                            <div class="col-4 col-md-2 col-lg-4 pr-1 pl-5 pl-sm-1 ml-4 ml-sm-0 text-center">
                                <ul class="p-0 pl-5 pl-sm-0 font-weight-bold">
                                    <li>M</li>
                                    <li>T</li>
                                    <li>W</li>
                                    <li>T</li>
                                    <li>F</li>
                                </ul>
                            </div>
                            <div class="col-6 col-md-10 col-lg-8 pr-1 text-left">
                                <ul class="p-0">
                                <li id="mon">9:00am-5:00pm</li>
                                <li id="tue">8:30am-5:00pm</li>
                                <li id="wed">9:00am-5:00pm</li>
                                <li id="thu">8:30am-5:00pm</li>
                                <li id="fri">9:00am-2:00pm</li>
                            </ul></div>
                        </div>

                        </div>
                </div>
            </div>
            <div class="col-12 col-md-6 p-0">
                <div id="google-map" class="embed-responsive embed-responsive-1by1 mx-auto shadow">
                    <iframe class="embed-responsive-item" style=""
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.3161577080405!2d-77.3445332202819!3d35.579932783701764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aedd71b55fe63f%3A0xcbc3538a485074ed!2s2725+E+14th+St%2C+Greenville%2C+NC+27858!5e0!3m2!1sen!2sus!4v1470882936894"
                            frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      welcomeMsg: 'We offer a wide array of preventative, restorative and cosmetic services to improve your oral health. Our team is dedicated to providing you the friendly and personalized dental care that you and your family deserve.'
    }
  },
  computed: {
    imageStaff () {
      return '/static/staff.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #welcome-msg {
        min-height: 130px;
    }
    #google-map{
        max-height: 500px;
        max-width: 500px;
    }
    li{
      list-style: none;
        white-space: nowrap;
    }
    a{
        color: #3B4861;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
