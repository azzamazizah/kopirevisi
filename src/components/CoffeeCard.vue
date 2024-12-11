<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import type { Coffee } from '../types';

const props = defineProps<{
  coffee: Coffee;
}>();

const cartStore = useCartStore();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="coffee.image" :alt="coffee.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ coffee.name }}</h3>
      <p class="text-gray-600 mt-1">{{ coffee.description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-lg font-bold">Rp {{ coffee.price.toLocaleString() }}</span>
        <button
          @click="cartStore.addToCart(coffee)"
          class="bg-brown-600 text-white px-4 py-2 rounded-lg hover:bg-brown-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>