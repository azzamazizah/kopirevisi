import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Coffee, CartItem } from '../types';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);
  const discountCode = ref('');

  const total = computed(() => {
    return items.value.reduce((sum, item) => sum + item.coffee.price * item.quantity, 0);
  });

  const discount = computed(() => {
    if (discountCode.value === 'COFFEE20') {
      return total.value * 0.2;
    }
    return 0;
  });

  const finalTotal = computed(() => {
    return total.value - discount.value;
  });

  function addToCart(coffee: Coffee) {
    const existingItem = items.value.find(item => item.coffee.id === coffee.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ coffee, quantity: 1 });
    }
  }

  function removeFromCart(coffeeId: number) {
    items.value = items.value.filter(item => item.coffee.id !== coffeeId);
  }

  function updateQuantity(coffeeId: number, quantity: number) {
    const item = items.value.find(item => item.coffee.id === coffeeId);
    if (item) {
      item.quantity = quantity;
    }
  }

  function clearCart() {
    items.value = [];
    discountCode.value = '';
  }

  return {
    items,
    total,
    discount,
    finalTotal,
    discountCode,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
});