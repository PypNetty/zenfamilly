<template>
  <section class="section bg-gray-50">
    <div class="container">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Vous aussi, vous en avez marre de ça ?
        </h2>
      </div>

      <!-- 3 colonnes de problèmes -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <!-- Problème 1 -->
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 text-4xl">📱</div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">Messages sans réponse</h3>
          <p class="text-gray-600">
            "20 profils contactés, seulement 2 réponses..."
          </p>
        </div>

        <!-- Problème 2 -->
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 text-4xl">⏰</div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">Heures perdues</h3>
          <p class="text-gray-600">
            "Entre le tri, les appels et les rdv ratés..."
          </p>
        </div>

        <!-- Problème 3 -->
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 text-4xl">😰</div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">Stress permanent</h3>
          <p class="text-gray-600">
            "Et si elle ne convient pas à mon enfant ?"
          </p>
        </div>
      </div>

      <!-- Flèche vers le bas -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <!-- Solution ZenFamille -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          ZenFamille résout tout ça en 3 étapes :
        </h2>
      </div>

      <!-- 3 étapes de la solution -->
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Étape 1 -->
        <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-2xl">1</span>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">DÉCRIVEZ vos besoins</h3>
          <p class="text-gray-600">2 min chrono</p>
        </div>

        <!-- Étape 2 -->
        <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <div class="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-2xl">2</span>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">RECEVEZ 3 profils</h3>
          <p class="text-gray-600">ultra-compatibles</p>
        </div>

        <!-- Étape 3 -->
        <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-white font-bold text-2xl">3</span>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">CONTACTEZ</h3>
          <p class="text-gray-600">avec un message pré-rédigé</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Problème/Solution selon les spécifications landing_page.md
</script>
