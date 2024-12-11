<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import type { Order } from '../types';

const cartStore = useCartStore();
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
});

const emit = defineEmits<{
  (e: 'order-submitted', order: Order): void;
}>();

function submitOrder() {
  const order: Order = {
    ...formData.value,
    items: [...cartStore.items],
    total: cartStore.total,
    discount: cartStore.discount,
    finalTotal: cartStore.finalTotal,
  };
  
  emit('order-submitted', order);
  cartStore.clearCart();
  formData.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };
}
</script>

<template>
  <form @submit.prevent="submitOrder" class="max-w-lg mx-auto">
    <h2 class="text-2xl font-bold mb-6">Order Details</h2>
    
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="formData.name"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
        >
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="formData.email"
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
        >
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Phone</label>
        <input
          v-model="formData.phone"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
        >
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          v-model="formData.address"
          required
          rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
        ></textarea>
      </div>
    </div>
    
    <button
      type="submit"
      class="mt-6 w-full bg-brown-600 text-white py-2 px-4 rounded-md hover:bg-brown-700"
      :disabled="cartStore.items.length === 0"
    >
      Place Order
    </button>
  </form>
</template>