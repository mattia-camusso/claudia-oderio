<template>
  <div class="hero-container px-8 lg:py-[5vh]">
    <a href="/">
      <img
        src="../assets/svg/logo.svg"
        class="md:h-24 h-12"
        alt="Claudia Oderio Osteopata"
      />
    </a>
    <h3 class="text-style-big text-c-2 md:pt-[25vh] text-center">
      OPS... QUALCOSA È <br />
      ANDATO STORTO
    </h3>
    <MainButton
      class="mb-10 lg:mb-[15vh] text-style-2 text-center min-w-[20vw]"
      :link="'/'"
      >TORNA ALLA HOME</MainButton
    >
  </div>
</template>

<script lang="ts" setup></script>

<style>
.hero-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
</style>
