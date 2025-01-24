<template>
  <div class="hero-container">
    <div>
      <img
        class="ml-24 md:h-[25vh] top-1/4 absolute transform -translate-y-1/2 left-0 z-10"
        src="../assets/svg/logo.svg"
        alt="Claudia Orderio Osteopata"
      />
    </div>
    <h1 class="text-style-big absolute -bottom-3 leading-[4rem] left-8 w-[65vw] font-[300] z-3 text-center px-4">
      "<span class="italic">Da oltre 20 anni aiuto persone di tutte le età a ritrovare </span><span class="font-[500]">l’equilibrio</span>”
    </h1>
    <img
    src="../assets/svg/banner.svg"
    class="absolute -bottom-[20svh] z-2"
    alt="Osteopata valle d'aosta saint vincent"
  />
    <img
    src="../assets/claudia2.png"
    class="w-[80vw] md:w-[40vw] absolute right-0 -bottom-[20svh]"
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
</style>
