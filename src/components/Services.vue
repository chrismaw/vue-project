<template>
    <div id="services" class="text-left container">
        <!--<img class="img-fluid mx-auto shadow" :src="banner"/>-->
        <p class="welcome-text serif my-2">Services</p>
        <p class="lead">Our practice offers a full array of dental services to help you maintain healthy teeth. Specific services include but not limited to:</p>
    <ul class="p-0" style="list-style: none">
        <li>Bonding</li>
        <li>Cosmetic Contouring</li>
        <li>Crowns and Bridges</li>
        <li>Specialty Dentures</li>
        <li>Cosmetic Fillings</li>
        <li>Implant Restorations</li>
        <li>Veneers</li>
        <li>Whitenening</li>
        <li>Sealants</li>
        <li>Root Canal Therapy</li>
        <li>Scaling and Root Planing</li>
        <li>Dentures</li>
        <li>Cosmetic Dentistry</li>
    </ul>
    </div>

</template>

<script>
export default {
  name: 'services',
  computed: {
    banner () {
      return '/static/wjc_services_banner.jpg'
    }
  }
}
</script>

<style scoped>
li{
    position: relative;
    padding-left: 3rem;
    margin-bottom: 1rem;
}
    li:before{
        content:'';
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        position: absolute;
        background: url("/static/success.svg");
    }
</style>
