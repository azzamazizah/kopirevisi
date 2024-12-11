<script setup lang="ts">
defineProps<{
  variant?: 'light' | 'dark';
}>();
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="relative">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Circle -->
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          :class="variant === 'light' ? 'stroke-white' : 'stroke-brown-800'" 
          stroke-width="2"
        />
        
        <!-- Coffee Cup -->
        <path 
          d="M34 20H14c-1 0-2 .9-2 2v8c0 5.5 4.5 10 10 10h4c5.5 0 10-4.5 10-10v-8c0-1.1-1-2-2-2z"
          :class="variant === 'light' ? 'fill-white' : 'fill-brown-800'"
        />
        
        <!-- Steam Lines -->
        <path 
          d="M20 16c0-2 1.5-4 3-4"
          :class="variant === 'light' ? 'stroke-white' : 'stroke-brown-800'"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path 
          d="M24 14c0-2 1.5-4 3-4"
          :class="variant === 'light' ? 'stroke-white' : 'stroke-brown-800'"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path 
          d="M28 16c0-2 1.5-4 3-4"
          :class="variant === 'light' ? 'stroke-white' : 'stroke-brown-800'"
          stroke-width="2"
          stroke-linecap="round"
        />
        
        <!-- Handle -->
        <path 
          d="M34 24h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4"
          :class="variant === 'light' ? 'stroke-white' : 'stroke-brown-800'"
          stroke-width="2"
          fill="none"
        />
        
        <!-- Z Pattern -->
        <path 
          d="M19 25l10 0M19 29l10 0M19 33l10 0"
          :class="variant === 'light' ? 'stroke-white' : 'stroke-brown-800'"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="flex flex-col">
      <span 
        class="font-bold text-2xl tracking-tight leading-none"
        :class="variant === 'light' ? 'text-white' : 'text-brown-800'"
      >
        Zi Coffee
      </span>
      <span 
        class="text-xs tracking-widest uppercase"
        :class="variant === 'light' ? 'text-white/80' : 'text-brown-600'"
      >
        Est. 2020
      </span>
    </div>
  </div>
</template>