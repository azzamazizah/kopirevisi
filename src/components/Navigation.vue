<script setup lang="ts">
import { ref } from 'vue';

const sections = [
  { id: 'promotions', name: 'Promotions' },
  { id: 'menu', name: 'Menu' },
  { id: 'about', name: 'About Us' },
  { id: 'articles', name: 'Coffee Knowledge' }
];

const activeSection = ref('menu');

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <nav class="bg-gradient-to-r from-brown-100 to-brown-50 shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-center space-x-8 py-4">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          class="px-4 py-2 rounded-lg transition-all duration-300"
          :class="{
            'bg-gradient-to-r from-brown-700 to-brown-600 text-white': activeSection === section.id,
            'text-brown-700 hover:text-brown-900 hover:bg-brown-100': activeSection !== section.id
          }"
        >
          {{ section.name }}
        </button>
      </div>
    </div>
  </nav>
</template>