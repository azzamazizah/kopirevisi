<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { slides } from '../data/heroSlides';

const currentSlide = ref(0);
let slideInterval: number | undefined;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
};

const startSlideShow = () => {
  slideInterval = setInterval(nextSlide, 5000);
};

const stopSlideShow = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
};

onMounted(() => {
  startSlideShow();
});

onBeforeUnmount(() => {
  stopSlideShow();
});
</script>

<template>
  <div 
    class="relative h-[600px] overflow-hidden"
    @mouseenter="stopSlideShow"
    @mouseleave="startSlideShow"
  >
    <div 
      class="absolute inset-0 flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div 
        v-for="slide in slides" 
        :key="slide.id"
        class="min-w-full h-full relative"
      >
        <img 
          :src="slide.image" 
          :alt="slide.quote"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div class="text-center px-4 max-w-4xl">
            <p class="text-white text-3xl md:text-4xl font-serif italic mb-4">
              "{{ slide.quote }}"
            </p>
            <p class="text-white text-xl">- {{ slide.author }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button 
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <!-- Slide Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-colors"
        :class="index === currentSlide ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>