<template>
    <div class="home">
        <div class="bg-white text-dark row py-0 py-md-5 mx-0">
            <div class="col-12 col-md-6 p-0 text-center view overlay" style="min-height: 315px">
                <img class="img-fluid mx-auto shadow" src="/src/assets/staff.jpg"/>
                <div class="mask flex-center waves-effect waves-light">
                    <p class="white-text">Our Staff</p>
                </div>
                <p id="welcome-text">Welcome to the&nbsp;office&nbsp;of William&nbsp;J.&nbsp;Coco,&nbsp;DDS, MAGD</p>
            </div>
            <div class="col-12 col-md-6 p-0 text-center" style="min-height: 315px">
                <div class="text-center">
                    {{ msg }}
                </div>
            </div>
        </div>
        <div class="bg-white text-dark row py-0 py-md-5 mx-0">
            <div class="col-12 col-md-6 p-0 text-center" style="min-height: 315px">
                <div class="h7 text-center" style="font-size: 5vw">SERVICE TIMEs</div>
                <div class="text-center">We meet at 9AM and 11AM every Sunday</div>
            </div>
            <div class="col-12 col-md-6 p-0">
                <div class="embed-responsive embed-responsive-1by1 mx-auto shadow">
                    <iframe class="embed-responsive-item" style=""
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.3161577080405!2d-77.3445332202819!3d35.579932783701764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aedd71b55fe63f%3A0xcbc3538a485074ed!2s2725+E+14th+St%2C+Greenville%2C+NC+27858!5e0!3m2!1sen!2sus!4v1470882936894"
                            frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'We offer a wide array of preventative, restorative and cosmetic services to improve your oral health. Our team is dedicated to providing you the friendly and personalized dental care that you and your family deserve.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer {
        background-image: url('/src/assets/tools.png');
        bottom: 0;
    }

    #welcome-text {
        font-size: 4vw;
        font-weight: 300;
    }
</style>
