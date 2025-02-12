<template>
  <div class="flex flex-col md:flex-row justify-between w-full mb-24"> 
    <div class="gap-12 md:gap-16 flex flex-col mt-16">
      <div class="  ">
        <h3 class="font-thin text-style-bigger tracking-tagline ml-6 md:ml-24">
          TRATTAMENTI
        </h3>
        <div
          class="flex flex-wrap w-full justify-between p-6 md:py-0 gap-6 md:gap-0 text-style-4 md:px-24"
        >
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
        <Transition name="zlide-fade">
        <div
        :key="getId"
          :class="
            getId == 'adolescenza'
              ? 'h-[34rem] sm:h-[50svh] md:h-fit' 
              : 'h-[26rem] sm:h-[40svh] md:h-fit'
          "   
          class="relative overflow-hidden" 
        > 
          <img  
          class="object-right md:ml-24 w-[100vw] object-fill"
          :src="`/${getId}.png`"
          :alt="`Trattamento osteopatico ${getId}`"
          />
          <div
          :key="getId"
          :class="getId == 'adolescenza' ? 'md:w-2/3 lg:w-3/5' : 'md:w-3/6 lg:w-2/5'"
          class="absolute left-0 md:-translate-y-1/2 md:top-1/2 glass p-6 xl:py-12 xl:pr-12 md:pl-24 lg:pl-24 w-full backdrop-blur-sm md:rounded-r-2xl"
          >
          <h5 class="font-medium text-style-4 uppercase mb-2">
            {{ getName }}
          </h5>
          <p
          class="text-style-3 text-pretty font-light"
          v-html="getDescription"
          />
        </div>
      </div>
    </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { treatments } from "../constants";
import { useMainStore } from "../stores/myStore";

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

<style>
.zlide-fade-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: .5s;
}

.zlide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.zlide-fade-enter-from{
  transform: translateX(-40px);
  opacity: 0;
}
.zlide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
