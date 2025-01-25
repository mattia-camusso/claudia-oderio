<template>
  <div>
    <div
      id="services"
      class="section1 mt-16 flex flex-col w-full justify-start h-full items-start"
    >
      <div class="absolute left-24 z-4 flex flex-col">
        <h3 class="text-serif-bigger tracking-tagline text-c-4 text-left">
          OSTEOPATIA
        </h3>
        <div class="flex"></div>
        <p class="text-style-4 leading-[1.525] font-medium w-1/4">
          L'osteopatia è una terapia manuale basata sulla comprensione della
          struttura e della funzione del corpo umano.
        </p>
        <div class="self-end bg-c-1 p-12 rounded-l-2xl">
          <p
            class="text-style-4 right-0 leading-[1.525] font-light italic w-[40vw]"
          >
            “L’<span class="font-medium">osteopatia</span> è la regola del
            movimento e il movimento è l’espressione stessa della
            <span class="font-medium">vita</span>” <br />
            - Andrew Taylor Still
          </p>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <img
          class="aspect-[5/4] w-[66vw] object-right"
          src="../assets/flowers.png"
          alt="osteopata"
        />
      </div>

      <div class="flex flex-col md:flex-row justify-between w-full mb-24">
        <div class="gap-12 md:gap-16 flex flex-col mt-16">
          <div class="relative">
            <h3 class="font-thin text-style-bigger tracking-tagline ml-24">
              TRATTAMENTI
            </h3>
            <div class="flex w-full justify-between my-6 text-style-4 px-24">
              <div v-for="t in treatments">
                <button
                  :class="
                    t.id == store.selectedProduct.id
                      ? 'font-medium'
                      : 'font-thin'
                  "
                  class="uppercase cursor-pointer"
                  @click="store.selectProduct(t)"
                >
                  <TextUnderlineAnimated
                    :color="t.id == store.selectedProduct.id ? 4 : 2"
                  >
                    {{ t.id }}
                  </TextUnderlineAnimated>
                </button>
              </div>
            </div>
            <div class="relative">
              <img
                class="object-right ml-24 max-h-[85svh] w-[100vw] object-fill"
                :src="`/${getId}.png`"
                :alt="`Trattamento osteopatico per ${getId}`"
              />
              <div
                class="absolute left-0 top-16 glass w-2/5 p-12 pl-24 backdrop-blur-sm rounded-r-2xl"
              >
                <h5 class="font-medium text-style-4 uppercase mb-2">
                  {{ getName }}
                </h5>
                <p class="text-style-3 leading-[1.525] font-light">
                  {{ getDescription }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3
              class="font-thin text-style-bigger text-c-4 tracking-tagline text-center mb-4"
            >
              CHI SONO
            </h3>
            <div class="flex justify-between">
              <div class="ml-24 w-1/2">
                <h3 class="uppercase text-serif-1 text-c-4 mb-8">
                  Claudia Oderio
                </h3>
                <h4 class="uppercase font-bold text-style-1 text-gray-600 mb-8">
                  Osteopata a Saint Vincent
                </h4>
                <div
                  class="text-style-4 flex flex-col gap-2 font-light leading-[1.525] text-pretty"
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
              <div class="mt-24">
                <img
                  class="h-[80svh] aspect-[4/5]"
                  src="../assets/bio.png"
                  alt="Claudia Oderio Osteopata"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-mid h-[70svh] w-full flex items-center justify-center">
        <div>
          <h4 class="text-center text-style-big text-c-1 font-medium">
            TRATTAMENTO OSTEOPATICO <span class="text-c-3">DA 0 A 99 ANNI</span>
          </h4>
          <p class="text-center text-style-1 text-c-1 m-24 mb-0 font-light">
            Utilizzo un’ampia gamma di tecniche che, unite al sapere scientifico
            mi permettono di trattare problemi diversi nel pieno rispetto delle
            caratteristiche di
            <span class="font-medium">ogni signola persona</span>.
          </p>
        </div>
      </div>
      <div
        class="mx-24 bg-c-1 rounded-2xl flex p-12 justify-between w-[-webkit-fill-available] banner-low -translate-y-24 font-thin leading-[1.525] text-style-4 text-center text-pretty"
      >
        <div class="flex items-center flex-col gap-8">
          <img
            src="../assets/svg/icon1.svg"
            alt="patologie e disturbi osteopatici"
          />
          <p>Cervicale e patologie muscolo scheletriche</p>
        </div>
        <div class="flex items-center flex-col gap-8">
          <img
            src="../assets/svg/icon2.svg"
            alt="patologie e disturbi osteopatici"
          />
          <p>Cervicale e patologie muscolo scheletriche</p>
        </div>
        <div class="flex items-center flex-col gap-8">
          <img
            src="../assets/svg/icon3.svg"
            alt="patologie e disturbi osteopatici"
          />
          <p>Cervicale e patologie muscolo scheletriche</p>
        </div>
      </div>
    </div>
  </div>
  <footer class="mx-24">
    <div class="flex justify-between">
      <img
        src="../assets/svg/footer-logo.svg"
        alt="Claudia Oderio Osteopata Saint Vincent"
      />
      <img src="../assets/roi.png" alt="Registro Osteopati Italiani" />
    </div>
    <div class="my-24">
      <h5 class="font-medium text-style-big text-center tracking-wider">
        CONTATTI
      </h5>
    </div>
    <div class="flex justify-between mb-24">
      <div class="flex items-center gap-4">
        <img src="../assets/svg/whatsapp.svg" alt="" />
        <span class="text-style-4 font-medium">+39 329 214 51 54</span>
      </div>
      <div class="flex items-center gap-4">
        <img src="../assets/svg/location.svg" alt="" />
        <span class="text-style-4 font-medium"
          >Via Roma, 5 Saint Vincent (AO)</span
        >
      </div>
      <div class="flex items-center gap-4">
        <img src="../assets/svg/time.svg" alt="" />
        <span class="text-style-4 font-medium text-right"
          >lun - ven 08:00 19:00 <br />
          sab 08:00 12:30</span
        >
      </div>
    </div>
    <div class="bg-c-2 rounded-t-3xl flex items-center justify-center">
      <span class="font-medium text-c-1 text-style-4 py-8"
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
  -webkit-box-shadow: 0px 3px 3px 1px #1a0b02;
  box-shadow: 0px 3px 3px 1px #1a0b02;
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

@media screen and (max-width: 1024px) {
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
