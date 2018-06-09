<template>
    <div id="app">
        <nav class="navbar fixed-top navbar-expand-md navbar-light white scrolling-navbar">
            <div class="container">
                <!-- Brand -->
                <router-link class="navbar-brand waves-effect p-1" style="position: absolute;" to="">
                    <img class="logo" src="./assets/logo-dark.png">
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
                        <li class="nav-item">
                            <router-link class="nav-link waves-effect" to="">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link waves-effect" to="">Services</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link waves-effect" to="">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    body {
        padding-top: 54px;
    }
    .full-width{
        width:100%;
        height: auto;
    }

    @media (min-width: 576px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

    }
</style>
