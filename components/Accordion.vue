<template>
  <main class="contents">
    <!-- acc single -->
    <div v-for="tec in tecniques" class="pt-12 accordion-single js-acc-single">
      <div class="accordion-single-item js-acc-item">
        <h2 class="uppercase text-style-big tracking-wide font-thin accordion-single-title js-acc-single-trigger">{{tec.title}}</h2>
        <div class="accordion-single-content mr-12">
          <p class="text-style-4 font-light py-6 tracking-wider" v-html="tec.content"></p>
          <img :src="`${tec.img}`" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { tecniques } from "../constants";
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

.contents{
  max-width: 400px;
  padding:0 40px;
  margin: 0 auto;
}

.accordion-single  {
  border-bottom: 1px solid #efefef;
  margin-top: 10px;
}

.accordion-single-title {
  cursor: pointer;
  position: relative;
}

.accordion-single-title::after{
  content: "";
  position: absolute;
  right: 25px;
  top: 50%;
  transition: all 0.2s ease-in-out;
  display: block;
  width: 8px;
  height: 8px;
  border-top: solid 2px #999;
  border-right: solid 2px #999;
  transform: translateY(-50%) rotate(135deg);
}

.accordion-single-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s ease-in-out;
}


.accordion-single-item.is-open .accordion-single-content  {
  max-height: 12rem;
}

.accordion-single-item.is-open .accordion-single-title::after  {
  transform: translateY(-50%) rotate(315deg);
}
</style>
