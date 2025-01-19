<template>
  <div>
    <div
      id="services"
      class="section1 flex flex-col w-full justify-start h-full items-center"
    >
      <h3 class="text-serif-big sm:pt-16 pt-8 lg:pt-[8vh] w-[90vw] text-center">
        VENITE A SCOPRIRE I NOSTRI
        <span class="font-black"> SERVIZI </span>
      </h3>
      <div class="flex flex-col md:flex-row justify-between w-full">
        <div class="gap-12 md:gap-16 md:w-3/5 flex flex-col mx-8 mt-16">
          <div class="flex after-line">
            <img
              src="../assets/svg/icon1.svg"
              class="h-6 lg:h-14 mr-4 md:mr-8"
              alt="Legnowork porte e finestre"
            />
            <p class="text-style-4">
              Assistenza post-vendita e manutenzione programmata
            </p>
          </div>
          <div class="flex after-line">
            <img
              src="../assets/svg/icon2.svg"
              class="h-6 lg:h-14 mr-4 md:mr-8"
              alt="Legnowork porte e finestre"
            />
            <p class="text-style-4">
              Sopralluoghi, consulenza tecnica professionale e preventivi
              gratuiti
            </p>
          </div>
          <div class="flex after-line">
            <img
              src="../assets/svg/icon3.svg"
              class="h-6 lg:h-14 mr-4 md:mr-8"
              alt="Legnowork porte e finestre"
            />
            <p class="text-style-4">
              Posa in opera qualificata legno-legno e casa clima
            </p>
          </div>
          <div class="flex after-line">
            <img
              src="../assets/svg/icon4.svg"
              class="h-6 lg:h-14 mr-4 md:mr-8"
              alt="Legnowork porte e finestre"
            />
            <p class="text-style-4">
              Finanziamenti personalizzati anche a tasso zero
            </p>
          </div>
        </div>
        <div class="mt-16 lg:mt-8 ml-8 md:ml-0">
          <img src="../assets/landing1.png" alt="legnowork" />
        </div>
      </div>
    </div>
    <div class="h-16 md:h-32"></div>
    <div class="section section2 flex flex-col items-center justify-between">
      <div
        class="flex flex-col items-center p-6 lg:p-10 mt-[20vh] h-full card-container"
      >
        <p class="font-bold text-center text-pretty text-style-4 mb-10">
          DETRAZIONE DEL 50% SULLA SPESA PER SOSTITUZIONE FINESTRE
        </p>
        <p class="font-light text-center text-pretty text-style-4">
          RINNOVATA FINO AL 31/12/2025
        </p>
      </div>
      <img
        src="../assets/svg/INSTALLAZIONI.svg"
        class="w-full mb-[-5px]"
        alt="Legnowork porte e finestre"
      />
    </div>
    <div class="blue-container p-12 md:p-20">
      <h3
        class="text-center leading-relaxed text-pretty font-bold text-style-1 mb-12"
      >
        OLTRE TRENT’ANNI DI ESPERIENZA QUALIFICATA
      </h3>
      <p
        class="text-center text-pretty font-light leading-relaxed text-style-3"
      >
        La nostra azienda vanta una solida esperienza trentennale nel campo
        delle installazioni di serramenti. Ogni intervento è realizzato con
        competenza e precisione, grazie a un team interno di professionisti
        altamente qualificati. Il nostro personale, formato con costante
        aggiornamento, si distingue per la capacità di operare in ogni contesto,
        rispettando sia gli ambienti che le persone. Questa lunga tradizione ci
        permette di garantire installazioni a regola d’arte, frutto di una
        dedizione che si è affinata nel tempo.
      </p>
    </div>
    <div class="bg-c-1 rounded-b-3xl"></div>
    <div
      id="chi-siamo"
      class="section3 relative flex bg-c-2 flex-col-reverse h-[100vh] w-full"
    >
      <div class="absolute backdrop-blur-sm md:hidden h-full w-full"></div>
      <div
        class="md:bg-c-1 z-10 md:backdrop-blur-md md:opacity-65 flex flex-col items-center"
      >
        <div
          class="p-8 text-style-3 text-c-1 md:text-c-2 leading-relaxed flex flex-col gap-2"
        >
          <p class="font-medium md:font-light">
            Legnowork nasce nel 1994 come società operante nella fornitura di
            finestre, porte, accessori complementari e della relativa posa in
            opera qualificata.
          </p>
          <p class="font-medium md:font-light">
            Nell’attività svolta in questi anni, seguendo e a volte anticipando
            le richieste e le tendenze del mercato e della clientela, ha
            selezionato e consolidato i rapporti con i migliori produttori del
            settore a livello nazionale.
          </p>
          <p class="font-medium md:font-light">
            Ha perfezionato con estrema cura e con un sempre costante
            aggiornamento l’installazione professionale e qualificata dei
            prodotti che vengono forniti. La filosofia e la missione cha ha
            sempre motivato i titolari di questa azienda ed i suoi collaboratori
            si riassume in queste valori: qualità senza compromessi,
            installazioni professionali e qualificate, serietà incondizionata
            verso la clientela.
          </p>
        </div>
      </div>
      <h4
        class="text-c-1 z-10 uppercase text-serif-bigger mt-8 md:opacity-90 text-center"
      >
        CHI
        <span class="font-black"> SIAMO </span>
      </h4>
      <h3 class="text-serif-big p-12 text-center text-c-2"></h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { prodotti } from "../constants";
import { useMainStore } from "../stores/myStore";
import { computed } from "vue";

const store = useMainStore();

const select = (product) => {
  store.selectProduct(product);
};

const getDescription = computed(() => {
  const prod = prodotti.find(
    (el) => el.name == store.selectedProduct.description
  );
  console.log(prod?.description);
  if (prod) return prod.description;
});
</script>

<style scoped>
.section {
  max-height: 120vh;
  min-height: 110vh;
  width: 100vw;
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

  .services-cont > * {
  }
}

.section2 {
  background-image: url("assets/landing2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-image: fill 1
    linear-gradient(var(--overlay-light), var(--overlay-light));
}
.section3 {
  background-image: url("assets/chi-siamo1.jpg");
  background-position: center 99%;
  background-size: cover;
  background-repeat: no-repeat;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}

.blue-container {
  width: 100vw;
  @apply text-c-1;
  border-image: fill 1
    linear-gradient(
      to bottom,
      rgba(49, 52, 133, 1) 0%,
      rgb(49, 52, 133, 0.65) 100%
    );
  background-image: url("../assets/landing3.png");
}

@media screen and (max-width: 1024px) {
  .section2 {
    background-image: url("assets/landing2.png");
    background-size: cover;
  }

  .after-line::after {
    content: "";
    width: 0 !important;
  }
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
