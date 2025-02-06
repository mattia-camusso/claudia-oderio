<template>
  <div class="hero-container">
    <div>
      <img
        class="md:ml-24 ml-12 w-[75vw] md:w-auto sm:h-[20vh] lg:h-[25vh] top-12 md:top-1/4 absolute transform md:-translate-y-1/2 md:left-0 z-10"
        src="../assets/svg/logo.svg"
        alt="Claudia Orderio Osteopata"
      />
    </div>
    <div class="absolute bottom-0 sm:-bottom-4 left-0 lg:left-8 w-[100vw] sm:w-[65vw] px-8 py-12 sm:py-6 md:px-4 z-3 glass2">
      <h1 class="text-style-big md:leading-[4rem] font-[300] md:text-center">
        "<span class="italic">Da oltre 25 anni aiuto persone di tutte le età a ritrovare </span><span class="font-[500]">l’equilibrio</span>”
      </h1>
    </div>
    <img
    src="../assets/svg/banner.svg"
    class="absolute -bottom-[20svh] z-2 hidden lg:block"
    alt="Osteopata valle d'aosta saint vincent"
  />
    <img
    src="../assets/svg/banner-sm.svg"
    class="absolute -bottom-[20svh] z-2 hidden sm:block lg:hidden"
    alt="Osteopata valle d'aosta saint vincent"
  />
    <img
    src="../assets/claudia2.png"
    class="w-[90vw] xs:w-[75vw] sm:w-[50vw] lg:w-[40vw] absolute right-0 bottom-24 md:-bottom-[20svh]"
    alt="Claudia oderio osteopata"
  />
  </div>
</template>

<script lang="ts" setup></script>

<style>
.hero-container {
  height: 120svh;
  width: 100vw;
  background-image: url("../assets/hero.png");
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .hero-container{
    height: 100svh;
  }
}
</style>
