<template>
  <div class="hero-container">
    <div>
      <img
        class="md:ml-24 ml-12 w-[75vw] sm:h-[20vh] lg:h-[25vh] top-12 md:top-1/4 absolute transform md:-translate-y-1/2 md:left-0 z-10"
        src="../assets/svg/logo.svg"
        alt="Claudia Orderio Osteopata"
      />
    </div>

    <div
      class="z-2 absolute md:-bottom-[20svh] bottom-0 left-0 w-full h-fit min-h-24 glass2"
    >
      <h1
        class="z-5 text-style-big leading-relaxed font-[300] center p-6 md:p-0 md:w-[55%]"
      >
        "<span class="italic"
          >Da oltre 25 anni aiuto persone di tutte le età a ritrovare </span
        ><span class="font-[500]">l’equilibrio</span>”
      </h1>
      <img
        src="../assets/svg/banner.svg"
        class="relative w-full z-2 hidden md:block"
        alt="Osteopata valle d'aosta saint vincent"
      />
    </div>
    <img
      src="../assets/claudia2.png"
      class="h-3/5 sm:h-3/4 xl:h-full max-h-[85svh] xl:max-h-full absolute right-0 bottom-16 md:-bottom-[20svh]"
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

.container {
  position: relative;
  text-align: center;
  color: white;
}

.center {
  left: 6rem;
  margin-inline: auto;
}
@media screen and (min-width: 767px) {
  .center {
    position: absolute;
    transform: translate(0, 25%);
  }
}
@media screen and (max-width: 767px) {
  .hero-container {
    height: 100svh;
  }
}
</style>
