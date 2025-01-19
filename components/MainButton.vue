<template>
  <a :href="props.link">
    <button
      :class="
        inverted
          ? 'border-c-1 hover:text-c-2 after:bg-c-1 text-c-1'
          : 'border-c-2 hover:text-c-1 after:bg-c-2 text-c-2'
      "
      class="relative uppercase border-[3px] font-semibold py-3 px-12 after:absolute after:h-0 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:w-full after:bottom-0 after:left-0"
    >
      <slot />
    </button>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  inverted: Boolean,
  link: String,
});
</script>

<style></style>
