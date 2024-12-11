<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
    
    <div v-if="cartStore.items.length === 0" class="text-gray-500">
      Your cart is empty
    </div>
    
    <div v-else>
      <div v-for="item in cartStore.items" :key="item.coffee.id" class="flex items-center gap-4 py-4 border-b">
        <img :src="item.coffee.image" :alt="item.coffee.name" class="w-16 h-16 object-cover rounded">
        <div class="flex-1">
          <h3 class="font-semibold">{{ item.coffee.name }}</h3>
          <p class="text-gray-600">Rp {{ item.coffee.price.toLocaleString() }}</p>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="cartStore.updateQuantity(item.coffee.id, item.quantity - 1)"
            class="px-2 py-1 border rounded"
            :disabled="item.quantity <= 1"
          >-</button>
          <span>{{ item.quantity }}</span>
          <button
            @click="cartStore.updateQuantity(item.coffee.id, item.quantity + 1)"
            class="px-2 py-1 border rounded"
          >+</button>
        </div>
        <button
          @click="cartStore.removeFromCart(item.coffee.id)"
          class="text-red-600"
        >Remove</button>
      </div>
      
      <div class="mt-4">
        <input
          v-model="cartStore.discountCode"
          placeholder="Discount code"
          class="border p-2 rounded"
        >
        <p v-if="cartStore.discount > 0" class="text-green-600 mt-2">
          Discount applied: Rp {{ cartStore.discount.toLocaleString() }}
        </p>
      </div>
      
      <div class="mt-4 text-right">
        <p class="text-lg">Subtotal: Rp {{ cartStore.total.toLocaleString() }}</p>
        <p class="text-xl font-bold">Total: Rp {{ cartStore.finalTotal.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>