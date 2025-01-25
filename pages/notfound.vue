<template>
  <div class="hero-container p-8 lg:py-[5vh]">
    <a href="/">
      <img
        src="../assets/svg/logo.svg"
        class="md:h-8 h-4"
        alt="Claudia Oderio Osteopata"
      />
    </a>
    <h3 class="text-serif-big md:pt-[25vh] text-center text-c-1">
      OPS... QUALCOSA È <br />
      ANDATO STORTO
    </h3>
    <MainButton
      class="mb-10 lg:mb-[15vh] text-style-2 text-center min-w-[20vw]"
      :link="'/'"
      inverted
      >TORNA ALLA HOME</MainButton
    >
  </div>
</template>

<script lang="ts" setup></script>

<style>
.hero-container {
}
</style>
