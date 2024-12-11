<script setup lang="ts">
import type { Article } from '../types';

defineProps<{
  article: Article;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ article.title }}</h3>
      <p class="text-gray-600 mt-2">{{ article.excerpt }}</p>
      <p class="text-sm text-gray-500 mt-2">
        Published: {{ new Date(article.publishDate).toLocaleDateString() }}
      </p>
      <button class="mt-4 text-brown-600 font-semibold hover:text-brown-700">
        Read more →
      </button>
    </div>
  </div>
</template>