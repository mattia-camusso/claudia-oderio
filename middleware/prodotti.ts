import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { prodotti } from "../constants";

export default defineNuxtRouteMiddleware((to) => {
  let match = false;
  prodotti.forEach((element) => {
    if (element.id === to.params.id) match = true;
  });
  if (!match) return navigateTo("/notfound");
});
