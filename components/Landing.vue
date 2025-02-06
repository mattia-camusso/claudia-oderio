<template>
  <div>
    <div
      id="services"
      class="section1 mt-16 flex flex-col w-full justify-start h-full items-start"
    >
      <div class="absolute md:left-24 left-6 z-4 flex flex-col">
        <h3 class="text-serif-bigger tracking-tagline text-c-4 text-left">
          OSTEOPATIA
        </h3>
        <div class="flex flex-col md:flex-row justify-between">
          <p class="hidden md:block text-style-4 leading-[1.525] font-light italic w-4/5 md:w-1/4">
            L'osteopatia agisce nell'ambito della
            <span class="font-medium not-italic">prevenzione</span> promuovendo
            e mantenendo lo stato di
            <span class="font-medium not-italic">salute </span> dell'individuo.
            E' una terapia manuale basata sulla comprensione della struttura e
            delle molteplici funzioni del corpo umano.
          </p>
          <div class="md:self-end bg-c-1 p-2 md:p-12 mt-[8vh] md:mt-0 md:rounded-l-2xl h-fit">
            <p
              class="text-style-4 right-0 leading-[1.525] font-light italic w-4/5 md:w-[40vw]"
            >
              “L’<span class="font-medium not-italic">osteopatia</span> è la
              regola del movimento e il movimento è l’espressione stessa della
              <span class="font-medium not-italic">vita</span>” <br />
              -Andrew Taylor Still
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <img
          class="aspect-[3/2] w-full md:w-[66vw] object-right"
          src="../assets/flowers.png"
          alt="osteopata"
        />
      </div>
      <div class="flex flex-col md:flex-row justify-between w-full mb-24">
        <div class="gap-12 md:gap-16 flex flex-col mt-16">
          <div class="relative">
            <h3 class="font-thin text-style-bigger tracking-tagline ml-6 md:ml-24">
              TRATTAMENTI
            </h3>
            <div class="flex flex-wrap w-full justify-between p-6 md:py-0 gap-6 md:gap-0 text-style-4 md:px-24">
              <div v-for="t in treatments">
                <button
                  class="uppercase cursor-pointer"
                  @click="store.selectProduct(t)"
                >
                  <TextUnderlineAnimated
                    :color="t.id == store.selectedProduct.id ? '4' : '2'"
                  >
                    {{ t.id }}
                  </TextUnderlineAnimated>
                </button>
              </div>
            </div>
            <div 
            :class="getId == 'adolescenza' ? 'h-[115svh] xs:h-[90svh] sm:h-[50svh] lg:h-auto' : 'h-[80svh] xs:h-[60svh] sm:h-[40svh] lg:h-auto'"
            class="relative overflow-hidden">
              <img
                class="object-right md:ml-24 md:max-h-[85svh] w-[100vw] object-fill"
                :src="`/${getId}.png`"
                :alt="`Trattamento osteopatico per ${getId}`"
              />
              <div
              :class="getId == 'adolescenza' ? 'md:w-3/5' : 'md:w-2/5'"
                class="absolute left-0 md:top-16 glass p-4 md:p-12 md:pl-24 w-full backdrop-blur-sm md:rounded-r-2xl"
              >
                <h5 class="font-medium text-style-4 uppercase mb-2">
                  {{ getName }}
                </h5>
                <p
                  class="text-style-3 leading-[1.51] font-light"
                  v-html="getDescription"
                />
              </div>
            </div>
          </div>
          <div>
            <h3
              class="font-thin text-style-bigger text-c-4 tracking-tagline ml-6 md:ml-24"
            >
              CHI SONO
            </h3>
            <div class="flex flex-col-reverse md:flex-row justify-between">
              <div class="md:ml-24 ml-6 md:w-1/2">
                <h3 class="uppercase text-serif-1 text-c-2 mb-4 md:mb-8">
                  Claudia Oderio
                </h3>
                <h4 class="uppercase font-medium text-style-1 text-c-4 mb-4 md:mb-8">
                  Osteopata a Saint Vincent
                </h4>
                <div
                  class="text-style-4 mr-6 flex flex-col gap-2 font-light leading-[1.525] text-pretty"
                >
                  <p>
                    Mi chiamo Claudia e
                    <span class="font-medium"
                      >da più di 25 anni lavoro come osteopata a
                      Saint-Vincent</span
                    >, un paese della Valle d'Aosta dove vivo da sempre con la
                    mia famiglia.
                  </p>
                  <p>
                    Il mio lavoro è una passione che si alimenta da una continua
                    ricerca, unita a molta pratica manuale e a un costante
                    aggiornamento.
                  </p>
                  <p class="font-medium">
                    Con il mio lavoro aiuto le persone a riconoscere i segnali
                    del corpo, a superare il dolore e a ritrovare una vita sana
                    e armoniosa.
                  </p>
                  <p>
                    Il mio approccio si basa sull'unione del sapere scientifico
                    e delle tecniche osteopatiche, con l'ascolto attento e la
                    comprensione della persona nella sua interezza.
                  </p>
                  <p>
                    L'obiettivo è condurre ciascun paziente passo dopo passo
                    verso la risoluzione del suo problema, riducendo al minimo
                    il rischio di recidive.
                  </p>
                  <p>
                    Le tante persone che ho incontrato nel corso degli anni sono
                    per me un continuo arricchimento, non solo a livello
                    professionale, ma anche umano.
                  </p>
                </div>
              </div>
              <div class="my-12 md:mt-24">
                <img
                  class="h-[50svh] ml-auto lg:h-[80svh] aspect-[4/5]"
                  src="../assets/bio.png"
                  alt="Claudia Oderio Osteopata"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-mid h-[70svh] w-full flex  md:items-center justify-center">
        <div class="mt-12 md:mt-0">
          <h4 class="text-center text-style-big text-c-1 leading-[1.525] font-medium mx-6 md:mx-0">
            TRATTAMENTO OSTEOPATICO <span class="text-c-3">DA 0 A 99 ANNI</span>
          </h4>
          <p
            class="leading-[1.525] text-center text-style-1 text-c-1 m-6 md:mx-24 mb-0 font-light"
          >
            "Conosci la tua anatomia e la tua fisiologia, ma quando poni le mani
            sul corpo di un paziente, non dimenticare che vi abita
            <span class="text-c-3 font-medium">un'anima vivente</span>"
            <br />
            <span class="">-Andrew Taylor Still</span>
          </p>
        </div>
      </div>
      <div
        class="md:mx-24 bg-c-1 md:rounded-2xl flex p-6 md:p-12 justify-between w-[-webkit-fill-available] banner-low -translate-y-24 font-thin leading-[1.525] text-style-4 text-center text-pretty"
      >
        <div class="flex items-center flex-col md:gap-8 gap-4 w-fit">
          <img
          class="h-16"
            src="../assets/svg/icon1.svg"
            alt="patologie e disturbi osteopatici"
          />
          <p class="w-24 md:w-2/3 text-pretty text-style-3">
            Cervicale e patologie muscolo scheletriche
          </p>
        </div>
        <div class="flex items-center flex-col md:gap-8 gap-4 w-fit">
          <img
          class="h-16"
            src="../assets/svg/icon2.svg"
            alt="patologie e disturbi osteopatici"
          />
          <p class="w-24 md:w-2/3 text-pretty text-style-3">Patologie stress correlate</p>
        </div>
        <div class="flex items-center flex-col md:gap-8 gap-4 w-fit">
          <img
          class="h-16"
            src="../assets/svg/icon3.svg"
            alt="patologie e disturbi osteopatici"
          />
          <p class="w-24 md:w-2/3 text-pretty text-style-3">Infortuni sportivi traumatici</p>
        </div>
      </div>
    </div>
  </div>
  <footer class="mx-4 md:mx-24">
    <div class="flex justify-between">
      <img
      class="h-12 md:h-auto"
        src="../assets/svg/footer-logo.svg"
        alt="Claudia Oderio Osteopata Saint Vincent"
      />
      <img src="../assets/roi.png" class="h-12 md:h-auto" alt="Registro Osteopati Italiani" />
    </div>
    <div class="my-12 md:my-24">
      <h5 class="font-medium text-style-big md:text-center tracking-wider">
        CONTATTI
      </h5>
    </div>
    <div class="flex flex-col md:flex-row items-start gap-6 justify-between mb-12 md:mb-24">
      <div class="flex items-center gap-4">
        <img src="../assets/svg/whatsapp.svg" class="h-6 md:h-12" alt="" />
        <span class="text-style-4 font-medium">+39 329 214 51 54</span>
      </div>
      <div class="flex items-center gap-4">
        <img src="../assets/svg/location.svg" class="h-6 md:h-12" alt="" />
        <span class="text-style-4 font-medium"
          >Via Roma, 5 Saint Vincent (AO)</span
        >
      </div>
      <div class="flex items-center gap-4">
        <img src="../assets/svg/time.svg" class="h-6 md:h-12" alt="" />
        <span class="text-style-4 font-medium text-right"
          >lun - ven 08:00 19:00 <br />
          sab 08:00 12:30</span
        >
      </div>
    </div>
    <div class="bg-c-2 rounded-t-3xl flex items-center justify-center">
      <span class="font-medium text-center text-c-1 text-style-4 py-6 px-4 leading-[1.525] md:py-8"
        >Claudia Oderio Osteopata | Partita IVA: 00649480076</span
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { treatments } from "../constants";
import { useMainStore } from "../stores/myStore";
import { computed, onMounted } from "vue";

const store = useMainStore();

const select = (product) => {
  store.selectProduct(product);
};

onMounted(() => {
  select(treatments[0]);
});

const getId = computed(() => {
  const prod = treatments.find((el) => el.id == store.selectedProduct.id);
  console.log(prod?.description);
  if (prod) return prod.id;
});
const getDescription = computed(() => {
  const prod = treatments.find((el) => el.id == store.selectedProduct.id);
  console.log(prod?.description);
  if (prod) return prod.description;
});
const getName = computed(() => {
  const prod = treatments.find((el) => el.id == store.selectedProduct.id);
  console.log(prod?.description);
  if (prod) return prod.name;
});
</script>

<style scoped>
.section {
  max-height: 120vh;
  min-height: 110vh;
  width: 100vw;
}

.banner-mid {
  background-image: url("../assets/middle.png");
}

.banner-low {
  -webkit-box-shadow: 0px 2px 2px 1px #1a0b02;
  box-shadow: 0px 2px 2px 1px #1a0b02;
}

.services-cont {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  row-gap: 6vh;
  column-gap: 4vw;
  width: 95vw;
}

.services-cont > * {
  min-width: 20vw;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 5vh;
    column-gap: 5vw;
    width: 95vw;
  }

  .services-cont > * {
    width: 100%;
  }

  .section2 {
    min-height: 60vh;
  }
}

@media screen and (max-width: 667px) {
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    row-gap: 3vh;
    justify-items: center;
    width: 90vw;
  }
}

.section2 {
  background-image: url("assets/flowers.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-image: fill 1
    linear-gradient(var(--overlay-light), var(--overlay-light));
}

.after-line {
  position: relative;
  text-decoration: none;
}
.after-line::after {
  content: "";
  width: 100%;
  height: 3px;
  bottom: -2rem;
  /* background-color: var(--c-title-underline-color); */
  background: var(--color-2);
  position: absolute;
}

.card-container {
  width: 75vw;
  @apply bg-c-1;
  box-shadow: 0px 4px 4px 0px var(--color-2);
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
  @apply bg-c-4;
}

.item:not(:hover) {
  transition: all 800ms ease;
}

.item:hover {
  @apply text-c-4;
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
