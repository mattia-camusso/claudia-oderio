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
      htmlAttrs: {
        lang: 'it'
      },
      title: "Claudia Oderio - Osteopata",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Claudia Oderio, Osteopata. Trattamenti osteopatici per adulti, bambini, donne in gravidanza e sportivi per ritrovare il benessere fisico." },
        { name: "keywords", content: "osteopata, osteopatia, claudia oderio, trattamenti osteopatici, dolore cervicale, mal di schiena, postura, osteopatia pediatrica, gravidanza" },
        { property: "og:title", content: "Claudia Oderio - Osteopata" },
        { property: "og:description", content: "Trattamenti osteopatici professionali per adulti, bambini, donne in gravidanza e sportivi." },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "it_IT" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Claudia Oderio - Osteopata" },
        { name: "twitter:description", content: "Trattamenti osteopatici professionali per adulti, bambini, donne in gravidanza e sportivi." },
        { name: "google-site-verification", content: "f4JAQRmmZOyb3P6L8aYiRKIQOiSJMEprIHtxq0tgbak" }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Claudia Oderio Osteopata",
            "description": "Trattamenti osteopatici professionali per adulti, bambini, donne in gravidanza e sportivi.",
            "url": "https://www.osteopataclaudiaoderio.it"
          })
        }
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "_nuxt/assets/favicon.ico" },
        { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
        { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
        { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}, 
        { rel:"manifest", href:"/site.webmanifest"},
        { rel: "canonical", href: "https://www.osteopataclaudiaoderio.it" }
      ],
    },
  },
  site: {
    url: 'https://www.osteopataclaudiaoderio.it',
    name: 'Claudia Oderio Osteopata',
  },
  sitemap: {
    exclude: ['/notfound']
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxt/image"],
  /*   ui: {
    global: true,
  }, */
  css: ["~/assets/main.scss"],
});