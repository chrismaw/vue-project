<template>
    <div id="app">
        <div style="background-color: #F9F9F9" id="info-header" class="d-flex d-md-none container-fluid"><span class="d-flex mr-auto"><a style="color:#1D2430"><i class="fas fa-phone"></i>&nbsp;252-355-7178</a></span><span class="d-flex"><a href="" style="color:#1D2430"><i class="fas fa-location-arrow"></i>&nbsp;500 Red Banks Rd Ste A</a></span></div>
        <nav style="background-color: #7690c1" class="navbar sticky-top navbar-expand-md navbar-dark scrolling-navbar">
            <div class="container">
                <!-- Brand -->
                <router-link class="navbar-brand waves-effect p-1" style="position: absolute;" to="/">
                    <img class="logo" src="./assets/logo-white.png">
                </router-link>
                <!-- Collapse -->
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-right text-md-center" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item serif">
                            <router-link class="nav-link waves-effect" to="">About</router-link>
                        </li>
                        <li class="nav-item serif">
                            <router-link class="nav-link waves-effect" to="/services">Services</router-link>
                        </li>
                        <li class="nav-item serif">
                            <router-link class="nav-link waves-effect" to="">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <!--<footer class=""></footer>-->
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app {
        font-family: 'Raleway', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #3B4861;
    }
    .serif {
        font-family: "Raleway", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-transform: uppercase;
        line-height: 1;
        letter-spacing: 1.4px;
        /*font-weight: 600;*/
        color: #1D2430;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        /*transform: translateX(-100px);*/
        opacity: 0
    }
    .fade-enter {
        /*transform: translateX(100px);*/
        opacity: 1
    }
    body {
        /*padding-top: 54px;*/
    }
    footer {
        content: url("/static/tools.png");
        /*background-image: url('/static/tools.png');*/
        /*background-repeat: no-repeat;*/
    }
    .full-width{
        width:100%;
        height: auto;
    }
    #info-header {
        font-size: 4vw;
    }
    .nav-item {
        font-size: 20px;
    }
    .welcome-text {
        font-size: 5.5vw;
        /*font-weight: 600;*/
    }
    #getintouch > div > div.serif{
        font-size: 6vw;
    }
    #services > div.text-left.container > div > div.col-12.col-md-6 > p.serif {
        font-size: 8vw;
    }
    @media (min-width: 576px) {
        #info-header {
            font-size: 3vw;
        }
        #getintouch > div > div.serif{
            font-size: 5vw;
        }
    }

    @media (min-width: 768px) {
        #info-header {
            font-size: 2vw;
        }
        .welcome-text {
            font-size: 3vw;
            /*font-weight: 600;*/
        }
        #getintouch > div > div.serif{
            font-size: 4vw;
        }
        #welcome-msg > div.serif {
            font-size: 4vw;
        }
        #services > div.text-left.container > div > div.col-12.col-md-6 > p.serif {
            font-size: 4vw;
        }
        #getintouch{
            background-image: url('/static/tools.png');
            background-repeat: no-repeat;
            background-position-x: left;
            background-position-y: bottom;
            /*background-size: 50%;*/
        }
    }

    @media (min-width: 992px) {
    }

    @media (min-width: 1200px) {

    }
</style>
