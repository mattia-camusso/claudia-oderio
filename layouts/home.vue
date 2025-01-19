<template>
  <slot></slot>
  <Footer></Footer>
</template>
<script setup>
const store = useMainStore();

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (store.menuToggle) return "overflow-y-hidden";

      return "overflow-y-visible";
    }),
  },
});
</script>
<style scoped></style>
