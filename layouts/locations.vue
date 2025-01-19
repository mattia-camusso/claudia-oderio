<template>
  <Menu></Menu>
  <Header></Header>
  <slot></slot>
</template>
<script setup>
const store = useMainStore();

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (store.menuToggle) return "overflow-clip";

      return "overflow-visible";
    }),
  },
});
</script>
<style scoped></style>
