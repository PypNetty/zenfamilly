<template>
  <section class="section bg-gradient-to-b from-primary-50 to-white">
    <div class="container">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo et titre principal -->
        <div class="mb-8">
          <div class="flex items-center justify-center mb-6">
            <div class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mr-4">
              <span class="text-white font-bold text-2xl">🍼</span>
            </div>
            <span class="text-3xl font-bold text-gradient">ZenFamille</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Trouvez LA nounou parfaite 
            <span class="text-gradient">en 3 clics</span>
          </h1>
        </div>

        <!-- Sous-titre -->
        <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
          Fini les recherches interminables. Notre IA vous matche avec les nounous vraiment compatibles avec votre famille.
        </p>

        <!-- CTA Principal -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style="animation-delay: 0.4s;">
          <NuxtLink to="/inscription" class="btn btn-primary btn-large group">
            <span>Trouver ma nounou → 2 min chrono</span>
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Illustration/Mockup -->
        <div class="mb-12 animate-fade-in" style="animation-delay: 0.6s;">
          <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
            <div class="text-left">
              <div class="text-sm text-gray-500 mb-4">Interface de matching en action</div>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                  <span class="text-sm font-medium">Analysé vos besoins...</span>
                  <div class="ml-auto text-green-500">✓</div>
                </div>
                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                  <span class="text-sm font-medium">3 profils ultra-compatibles trouvés</span>
                  <div class="ml-auto text-green-500">✓</div>
                </div>
                <div class="flex items-center p-3 bg-gray-100 rounded-lg">
                  <div class="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                  <span class="text-sm font-medium">Messages de contact générés</span>
                  <div class="ml-auto animate-pulse">⏳</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof -->
        <div class="animate-fade-in" style="animation-delay: 0.8s;">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div class="flex items-center">
              <div class="flex -space-x-2 mr-3">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612990e?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32&q=80" alt="Parent satisfait">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32&q=80" alt="Parent satisfait">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32&q=80" alt="Parent satisfait">
              </div>
              <span class="text-sm font-medium"><strong>2,847</strong> parents satisfaits</span>
            </div>
            
            <div class="flex items-center">
              <div class="flex text-yellow-400 mr-2">
                <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="text-sm font-medium"><strong>4.9/5</strong> en moyenne</span>
            </div>
            
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm font-medium"><strong>24h</strong> en moyenne pour trouver</span>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 max-w-md mx-auto">
            <div class="flex items-center mb-2">
              <img class="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1494790108755-2616b612990e?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80" alt="Sarah">
              <div>
                <div class="font-medium text-sm">Sarah, maman de Jules</div>
                <div class="text-xs text-gray-500">Paris 15ème</div>
              </div>
            </div>
            <p class="text-sm text-gray-600 italic">
              "Ma recherche a pris 10 minutes au lieu de 3 semaines"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero Section selon les spécifications landing_page.md
</script>
