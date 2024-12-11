<script setup lang="ts">
import { milestones } from '../data/about';
</script>

<template>
  <section id="about" class="py-16 bg-brown-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Our Journey</h2>
      
      <!-- Story Section -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-lg text-gray-700 mb-6">
          Founded in 2020, our coffee shop started as a small dream in a tiny garage. 
          With a single espresso machine and an unwavering passion for quality coffee, 
          we began serving our local community.
        </p>
        <p class="text-lg text-gray-700">
          Today, we're proud to be one of the most beloved coffee destinations in the city, 
          known for our carefully sourced beans, artisanal roasting techniques, and 
          the warm, welcoming atmosphere we've created.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brown-200"></div>
        
        <div class="space-y-12">
          <div 
            v-for="(milestone, index) in milestones" 
            :key="milestone.id"
            class="relative"
          >
            <div 
              class="flex items-center"
              :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
            >
              <!-- Content -->
              <div 
                class="w-1/2 px-6"
                :class="index % 2 === 0 ? 'text-right' : 'text-left'"
              >
                <div class="bg-white p-6 rounded-lg shadow-md inline-block">
                  <h3 class="text-xl font-semibold text-brown-800 mb-2">
                    {{ milestone.year }}
                  </h3>
                  <p class="text-gray-600">{{ milestone.description }}</p>
                </div>
              </div>

              <!-- Timeline Point -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brown-600 rounded-full"></div>

              <!-- Empty space for alignment -->
              <div class="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 text-brown-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Quality First</h3>
          <p class="text-gray-600">We source only the finest beans and maintain strict quality standards</p>
        </div>

        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 text-brown-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Artisanal Roasting</h3>
          <p class="text-gray-600">Each batch is carefully roasted to bring out its unique flavors</p>
        </div>

        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 text-brown-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Community Focus</h3>
          <p class="text-gray-600">Building relationships with our customers and local community</p>
        </div>
      </div>
    </div>
  </section>
</template>