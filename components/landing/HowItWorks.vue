<template>
  <section class="section bg-white">
    <div class="container">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Comment on fait le miracle ?
        </h2>
      </div>

      <!-- Démo interactive -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div class="grid md:grid-cols-4 gap-6">
            <!-- Étape 1 -->
            <div class="text-center">
              <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold">1</span>
              </div>
              <h4 class="font-semibold mb-2">Formulaire</h4>
              <p class="text-sm text-gray-600">Vos critères</p>
            </div>

            <!-- Flèche -->
            <div class="hidden md:flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            <!-- Étape 2 -->
            <div class="text-center">
              <div class="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold">2</span>
              </div>
              <h4 class="font-semibold mb-2">Algorithme</h4>
              <p class="text-sm text-gray-600">IA analyse</p>
            </div>

            <!-- Flèche -->
            <div class="hidden md:flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            <!-- Étape 3 -->
            <div class="text-center">
              <div class="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold">3</span>
              </div>
              <h4 class="font-semibold mb-2">Résultats</h4>
              <p class="text-sm text-gray-600">3 profils parfaits</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 points clés -->
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Point 1 -->
        <div class="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl">🧠</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">IA de matching</h3>
            <p class="text-gray-600">Analyse 47 critères de compatibilité</p>
          </div>
        </div>

        <!-- Point 2 -->
        <div class="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl">📍</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Hyper-local</h3>
            <p class="text-gray-600">Dans votre quartier</p>
          </div>
        </div>

        <!-- Point 3 -->
        <div class="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl">🎯</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Score de confiance</h3>
            <p class="text-gray-600">98% de précision dans nos recommandations</p>
          </div>
        </div>

        <!-- Point 4 -->
        <div class="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl">💬</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Contact facilité</h3>
            <p class="text-gray-600">Messages pré-rédigés personnalisés</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Comment ça marche selon les spécifications landing_page.md
</script>
