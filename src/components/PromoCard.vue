<script setup lang="ts">
import type { Promo } from '../types';

defineProps<{
  promo: Promo;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="promo.image" :alt="promo.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="flex justify-between items-start">
        <h3 class="text-xl font-semibold">{{ promo.title }}</h3>
        <span class="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded">
          {{ promo.discount }}% OFF
        </span>
      </div>
      <p class="text-gray-600 mt-2">{{ promo.description }}</p>
      <p class="text-sm text-gray-500 mt-2">Valid until: {{ new Date(promo.validUntil).toLocaleDateString() }}</p>
    </div>
  </div>
</template>