<template>
  <div class="hero-container">
    <div>
      <img
        class="w-[80vw] md:h-[20vh] top-1/4 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
        src="../assets/svg/logo.svg"
        alt="Claudia Orderio Osteopata"
      />
    </div>
    <h1 class="text-style-3 absolute bottom-4 left-0 w-[65vw] font-light z-3 text-center px-4 italic">
      “Da oltre 20 anni aiuto persone di tutte le età a ritrovare <span class="font-normal">l’equilibrio</span>”
    </h1>
    <img
    src="../assets/svg/banner.svg"
    class="absolute bottom-0 z-2"
    alt="Osteopata valle d'aosta saint vincent"
  />
    <img
    src="../assets/claudia.png"
    class="w-[75vw] md:w-[33vw] absolute right-0 bottom-0"
    alt="Claudia oderio osteopata"
  />
  </div>
</template>

<script lang="ts" setup></script>

<style>
.hero-container {
  height: 100svh;
  width: 100vw;
  background-image: url("../assets/hero.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
