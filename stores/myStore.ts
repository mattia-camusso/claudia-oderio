import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("store", () => {
  const menuToggle = ref(false);

  const bannerToggle = ref(true);

  const selectedProduct = ref({
    id: "",
    name: "",
    description: "",
  });

  function selectProduct(product) {
    selectedProduct.value = product;
  }

  function toggleMenu() {
    menuToggle.value = !menuToggle.value;
  }

  function toggleBanner() {
    bannerToggle.value = false;
  }

  return {
    menuToggle,
    toggleMenu,
    bannerToggle,
    toggleBanner,
    selectedProduct,
    selectProduct,
  };
});
