<template>
  <div class="ml-6 md:ml-24 mt-24">
    <h3 class="text-style-bigger text-c-4 font-thin mb-12">POSTURA</h3>
    <p class="text-style-4 leading-[1.525] md:mr-24 mr-6 font-light">Si parla spesso di <span class="font-medium">postura</span> perché l'essere umano, nel corso della sua vita, assume quotidianamente diverse <span class="font-medium">posizioni del corpo nello spazio</span>. Le posture più comuni sono quelle da in piedi, seduto, in movimento e sdraiato. La postura non riguarda solo l’aspetto fisico, ma ha anche una valenza psicologica, in quanto riflette la <span class="font-medium">relazione</span> che la persona ha con il <span class="font-medium">mondo esterno</span> e la sua <span class="font-medium">capacità di adattamento</span>.
      
      L'osteopata, dopo aver osservato la postura del paziente e aver effettuato i necessari <span class="font-medium">test</span>, utilizza specifiche <span class="font-medium">tecniche</span> che, per praticità, vengono suddivise in tre categorie:
      
      È fondamentale ricordare che il corpo umano è un'<span class="font-medium">unità funzionale</span> , in cui tutte le parti interagiscono tra loro, principalmente attraverso il <span class="font-medium">sistema fasciale</span>.</p>
      <div class="flex flex-col-reverse md:flex-row mr-6 md:mr-12">
        <div class="md:mt-6">
          <!-- acc single -->
          <div v-for="tec in tecniques" class="py-6 accordion-single js-acc-single">
            <div class="accordion-single-item js-acc-item">
              <h2 @click="toggling(tec.img)" class="uppercase text-style-big tracking-wide font-thin accordion-single-title js-acc-single-trigger">{{tec.title}}</h2>
              <div class="accordion-single-content mr-6 md:mr-12">
                <p class="text-style-4 font-light pt-6 tracking-wider" v-html="tec.content"></p>
              </div>
            </div>
          </div><!-- accordion-single -->
        </div>
        <div class="h-[40vh] md:h-full md:min-w-[30vw] mt-6 md:mt-0 aspect-auto overflow-clip">
          <Transition name="slide-fade">
            <img :src="`/${current}${props.alt ? '1':''}.png`" :key="current" class="overflow-clip h-fit" alt="">
          </Transition>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { tecniques } from "../constants";
const current = ref("skeletal");

const toggling = (img)=> {
  current.value = img;
}
const props = defineProps({
  alt: Boolean
});

onMounted(() => {
  const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}
})

</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
  transition-delay: .5s;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from{
  transform: translateX(-20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.accordion-single  {
  border-bottom: 1px solid var(--color-4);
  margin-top: 10px;
}

.accordion-single-title {
  cursor: pointer;
  position: relative;
}

.accordion-single-title::after{
  content: "";
  position: absolute;
  right: 2rem;
  top: 50%;
  transition: all 0.3s ease-in-out;
  display: block;
  width: 16px;
  height: 16px;
  border-top: solid 2px var(--color-4);
  border-right: solid 2px var(--color-4);
  transform: translateY(-50%) rotate(135deg);
}

@media screen and (max-width: 767px) {
  .accordion-single-title::after{
    opacity: 0;
  }
}

.accordion-single-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height .5s ease-in-out;
}


.accordion-single-item.is-open .accordion-single-content  {
  max-height: 30rem;
}

.accordion-single-item.is-open .accordion-single-title::after  {
  transform: translateY(-50%) rotate(315deg);
}
</style>
