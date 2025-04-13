// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      title: "Claudia Oderio Osteopata",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name:"google-site-verification", content:"f4JAQRmmZOyb3P6L8aYiRKIQOiSJMEprIHtxq0tgbak"},
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "_nuxt/assets/favicon.ico" },
        { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
        { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
        { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}, 
        { rel:"manifest", href:"/site.webmanifest"}
      ],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@pinia/nuxt", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  /*   ui: {
    global: true,
  }, */
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});