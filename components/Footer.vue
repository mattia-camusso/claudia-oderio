<template>
  <footer>
    <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-0 m-12">
      <a href="/">
        <img
          class="h-20 md:h-24"
          src="../assets/svg/logo-footer.svg"
          alt="LegnoWork"
        />
      </a>
      <div class="flex justify-between md:gap-6">
        <img
          class="h-24 md:h-32"
          src="../assets/svg/albolegno.svg"
          alt="LegnoWork"
        />
        <img
          class="h-24 md:h-32"
          src="../assets/icon_finstral.png"
          alt="LegnoWork"
        />
      </div>
    </div>
    <div
      class="mx-6 md:mx-12 flex flex-col md:flex-row gap-8 md:gap-0 justify-between"
    >
      <div
        class="flex flex-col items justify-between items-center md:items-start gap-6 md:gap-12"
      >
        <a href="/" class="flex items-center">
          <p class="item text-serif-1 font-bold ml-2">HOME</p>
        </a>
        <a href="/prodotti/finestre" class="flex items-center">
          <p class="item text-serif-1 font-bold ml-2">PRODOTTI</p>
        </a>
        <a href="/contatti" class="flex items-center">
          <p class="item text-serif-1 font-bold ml-2">CONTATTI</p>
        </a>
        <a href="/#chi-siamo" class="flex items-center">
          <p class="item text-serif-1 font-bold ml-2">CHI SIAMO</p>
        </a>
      </div>
      <div class="flex flex-col gap-6 mt-12">
        <div class="flex md:justify-end">
          <a
            target="_blank"
            href="https://www.google.com/maps/dir/45.7529579,7.6456718/legnowork/@45.4057361,7.1287917,8z/data=!3m2!4b1!5s0x4786c62c68b92fff:0xccac69fff1a80b41!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4786c62c6b852203:0x9290206c67d8c580!2m2!1d9.2771865!2d45.4858992?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
          >
            <p class="text-style-3 text-center md:text-right md:ml-auto">
              Via Calabria, 15 - 20054 Redecesio di Segrate (MI)
            </p>
          </a>
        </div>
        <div class="flex md:justify-end justify-center">
          <a
            href="tel:39022137228"
            target="_blank"
            class="text-balance my-2 flex items-end"
          >
            <TextUnderlineAnimated color="2">
              <p class="text-style-3">Tel. +39 02 2137228</p>
            </TextUnderlineAnimated>
          </a>
        </div>
        <div class="flex md:justify-end justify-center">
          <a
            href="tel:39022137228"
            target="_blank"
            class="text-balance my-2 flex items-end"
          >
            <TextUnderlineAnimated color="2">
              <p class="text-style-3 text-center md:text-right">
                Tel. +39 02 26920202
              </p></TextUnderlineAnimated
            ></a
          >
        </div>
        <div class="flex md:justify-end justify-center">
          <a
            href="https://wa.me/393517835552"
            target="_blank"
            class="text-balance my-2 flex items-end"
          >
            <TextUnderlineAnimated color="2">
              <p class="text-style-3 text-center md:text-right">
                Cell. +39 351 8036828
              </p></TextUnderlineAnimated
            >
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col-reverse h-[15vh] md:h-[20vh] w-full items-center">
      <h6 class="text-style-4 font-light p-4 text-center mt-6">
        © 2016 Legnowork srl | Porte e Finestre | P.IVA 11360870155
      </h6>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import TextUnderlineAnimated from "./TextUnderlineAnimated.vue";
</script>

<style scoped>
footer {
  height: 70vh;
}

@media screen and (max-width: 640px) {
  footer {
    height: 70vh;
  }
}

.item {
  cursor: pointer;
  @apply text-c-2;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
}

.item::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 4px;
  height: 3px;
  @apply bg-c-2;
}

.items:hover > .item:not(:hover) {
  transition: all 800ms ease;
}

.item:hover {
  @apply text-c-2;
  transition: all 800ms ease;
}

.item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

.item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
