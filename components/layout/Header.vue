<template>
  <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <nav class="container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <Logo />
        </NuxtLink>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/comment-ca-marche" 
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            Comment ça marche
          </NuxtLink>
          <NuxtLink 
            to="/prix" 
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            Tarifs
          </NuxtLink>
          <NuxtLink 
            to="/nounous" 
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            Devenir nounou
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <NuxtLink 
            to="/connexion" 
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Connexion
          </NuxtLink>
          <NuxtLink 
            to="/inscription" 
            class="btn btn-primary"
          >
            Commencer gratuitement
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-gray-100">
        <div class="space-y-4">
          <NuxtLink 
            to="/comment-ca-marche" 
            class="block text-gray-600 hover:text-primary-600 transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            Comment ça marche
          </NuxtLink>
          <NuxtLink 
            to="/prix" 
            class="block text-gray-600 hover:text-primary-600 transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            Tarifs
          </NuxtLink>
          <NuxtLink 
            to="/nounous" 
            class="block text-gray-600 hover:text-primary-600 transition-colors duration-200"
            @click="isMenuOpen = false"
          >
            Devenir nounou
          </NuxtLink>
          <hr class="border-gray-200">
          <NuxtLink 
            to="/connexion" 
            class="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            @click="isMenuOpen = false"
          >
            Connexion
          </NuxtLink>
          <NuxtLink 
            to="/inscription" 
            class="btn btn-primary w-full"
            @click="isMenuOpen = false"
          >
            Commencer gratuitement
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>
