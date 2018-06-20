<template>
    <div id="services">
        <div class="text-left container">
            <div class="row">
                <div class="col-12 d-md-none">
                    <img class="img-fluid mx-auto shadow" :src="traymobile"/>
                </div>
                <div class="col-12 col-md-6">
                    <p class="serif my-2">Services</p>
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
                <div class="d-none d-md-block col-md-6 pt-3">
                    <img class="img-fluid mx-auto mt-5 shadow" :src="tray"/>
                </div>
            </div>
        </div>
        <div class="text-left" style="background-color: #F9F9F9">
            <div class="row pt-5 mx-3">
                <div class="col-12 col-md-6 col-lg-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Initial Oral Examination</p>
                    <p class="text-justify">Your initial oral examination includes a visual examination, charting, periodontal probing, diagnosis and treatment recommendations. We will also take x-rays, which includes the panoramic x-ray for proper diagnosis of the anterior (front) and posterior (back) teeth as well as the bite-wing x-ray series for proper diagnosis of proximal decay of posterior teeth.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Teeth Bleaching</p>
                    <p class="text-justify">Our state-of-the-art, in-office Power Bleaching system will make your teeth whiter in less than 3 hours. Another option is our home bleaching system you take with you for results in 2 weeks. You can also consider a combination program of both systems for optimal, long-term results.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Crowns and Veneers</p>
                    <p class="text-justify">You can have a new smile with all-porcelain crowns or veneers (empressed material) on the anterior teeth. For the posterior teeth, we use porcelain fused to high noble metal (captek) or all-porcelain crowns (Empresse, Eris, or Lava materials).</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Fillings</p>
                    <p class="text-justify">Tooth-colored restorations are shade matched to blend with your own distinct tooth color.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Root Canals</p>
                    <p class="text-justify">We perform root canals on anterior, premolar and molar teeth.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Dental Implants</p>
                    <p class="text-justify">We will work with an implant specialist to create an implant for a missing single tooth, missing multiple teeth, or replace a removable appliance.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Periodontal Treatment</p>
                    <p class="text-justify">You should have a recare exam with an oral cancer screening, at least twice a year alone with a cleaning to maintain your oral health. If you have had a significant time lapse in your dental treatment, the doctor may recommend a periodontal treatment, which may include either a debridement or periodontal sealing and root planning (requires anesthestic).</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Mouth Guards</p>
                    <p class="text-justify">Whether you are an athlete or casual sports participant, you should wear a mouth guard to protect your teeth. If you grind your teeth while you sleep, a bite guard will help reduce symptoms of Temporomandibular Joint (TMJ) Syndrome. We custom make mouth guards in both soft and hard materials.</p>
                </div>
                <div class="col-12 col-lg-4 mt-4">
                    <p class="text-uppercase" style="letter-spacing: 1.4px; font-weight: 600">Removable Dental Prosthesis</p>
                    <p class="text-justify">To replace your multiple missing teeth, a partical or complete denture are fabricated by our highly trained lab to fit your individual needs. There are several options of denture materials (Valplast, Vitalium bar, Acrylic) that may be discussed with the doctor before the final fabrication.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'services',
  computed: {
    tray () {
      return '/static/tray.jpg'
    },
    traymobile () {
      return '/static/tray-mobile.jpg'
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
        width: 24px;
        height: 24px;
        top: 0;
        left: 0;
        position: absolute;
        background: url("/static/success.png");
    }
</style>
