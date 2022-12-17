<template>
  <div>
    <section id="to">
      <div data-aos="zoom-in" class="p-4 rounded-3 shadow-sm m-3 text-center" style="background-color:#f8f8f899;">
        <h1 class="font-2 mb-5" style="color: #65741f;">Wedding Invitation</h1>
        <div class="img">
          <img data-aos="zoom-in" data-aos-delay="300" src="/depan.png" alt="logo" class="img-to">
        </div>
        <h5 data-aos="zoom-in" data-aos-delay="500" style="color: #1b1b1b;" class="mt-5"><i>Dear,</i></h5>
        <h3 style="text-transform:uppercase;" data-aos="zoom-in" data-aos-delay="600" >{{ $route.params.name }}</h3>
        <button class="btn btn-outline-secondary mt-4" data-aos="zoom-in" data-aos-delay="700"><RouterLink style="text-decoration: none; color:#1f1f1f;" to="/">Buka Undangan</RouterLink>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>
