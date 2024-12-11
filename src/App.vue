<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from './stores/cart';
import { coffees } from './data/coffees';
import { promos } from './data/promos';
import { articles } from './data/articles';
import Navigation from './components/Navigation.vue';
import Logo from './components/Logo.vue';
import HeroSlider from './components/HeroSlider.vue';
import CoffeeCard from './components/CoffeeCard.vue';
import PromoCard from './components/PromoCard.vue';
import ArticleCard from './components/ArticleCard.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import OrderForm from './components/OrderForm.vue';
import AboutUs from './components/AboutUs.vue';
import type { Order } from './types';

const cartStore = useCartStore();
const showOrderForm = ref(false);
const orderConfirmation = ref<Order | null>(null);

function handleOrderSubmitted(order: Order) {
  orderConfirmation.value = order;
  showOrderForm.value = false;
}
</script>

<template>
  <div class="min-h-screen bg-brown-50">
    <header class="bg-gradient-to-r from-brown-900 via-brown-800 to-brown-700 text-white py-6">
      <div class="container mx-auto px-4">
        <Logo variant="light" />
      </div>
    </header>

    <Navigation />

    <!-- Hero Section -->
    <HeroSlider />

    <main class="container mx-auto px-4 py-8">
      <!-- Promotions Section -->
      <section id="promotions" class="mb-12 scroll-mt-20">
        <h2 class="text-2xl font-bold mb-6 text-brown-800">Special Promotions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PromoCard
            v-for="promo in promos"
            :key="promo.id"
            :promo="promo"
          />
        </div>
      </section>

      <!-- Menu and Cart Section -->
      <div id="menu" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 scroll-mt-20">
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold mb-6 text-brown-800">Our Menu</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CoffeeCard
              v-for="coffee in coffees"
              :key="coffee.id"
              :coffee="coffee"
            />
          </div>
        </div>
        
        <div class="sticky top-24">
          <ShoppingCart />
          <button
            v-if="!showOrderForm && cartStore.items.length > 0"
            @click="showOrderForm = true"
            class="mt-4 w-full bg-gradient-to-r from-brown-700 to-brown-600 text-white py-2 px-4 rounded-md hover:from-brown-800 hover:to-brown-700 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <!-- About Us Section -->
      <AboutUs />

      <!-- Coffee Articles Section -->
      <section id="articles" class="mb-12 scroll-mt-20">
        <h2 class="text-2xl font-bold mb-6 text-brown-800">Coffee Knowledge</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
      </section>

      <div v-if="showOrderForm" class="mt-8">
        <OrderForm @order-submitted="handleOrderSubmitted" />
      </div>

      <div v-if="orderConfirmation" class="mt-8 bg-brown-50 border border-brown-200 p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-brown-800 mb-4">Order Confirmed!</h2>
        <div class="space-y-2 text-brown-700">
          <p><strong>Name:</strong> {{ orderConfirmation.name }}</p>
          <p><strong>Email:</strong> {{ orderConfirmation.email }}</p>
          <p><strong>Phone:</strong> {{ orderConfirmation.phone }}</p>
          <p><strong>Address:</strong> {{ orderConfirmation.address }}</p>
          <p><strong>Total:</strong> Rp {{ orderConfirmation.finalTotal.toLocaleString() }}</p>
        </div>
      </div>
    </main>

    <footer class="bg-gradient-to-r from-brown-900 via-brown-800 to-brown-700 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <Logo variant="light" />
          <div class="mt-4 md:mt-0 text-center md:text-right">
            <p>© 2024 Zi Coffee. All rights reserved.</p>
            <p class="text-brown-200">Your Modern Coffee Experience</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>