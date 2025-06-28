<template>
  <section class="section bg-gray-50">
    <div class="container">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 animate-slide-up">
          Comment ça marche ? 
          <span class="text-gradient">En 3 étapes</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
          Notre IA révolutionnaire transforme 2 semaines de recherche en 2 minutes de plaisir
        </p>
      </div>

      <!-- Processus en 3 étapes avec timeline -->
      <div class="max-w-5xl mx-auto mb-16">
        <div class="relative">
          <!-- Timeline line (desktop) -->
          <div class="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div class="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full"></div>
          </div>

          <!-- Étapes -->
          <div class="grid lg:grid-cols-3 gap-8 lg:gap-16">
            <!-- Étape 1 -->
            <div class="text-center relative animate-slide-up" style="animation-delay: 0.3s;">
              <div class="relative z-10 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-white font-bold text-xl">1</span>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div class="text-4xl mb-4">📝</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Décrivez vos besoins</h3>
                <p class="text-gray-600 mb-4">
                  Horaires, langues, activités... Notre questionnaire intelligent s'adapte à vos réponses
                </p>
                <div class="text-sm text-primary-600 font-medium">⏱️ 2 minutes chrono</div>
              </div>
            </div>

            <!-- Étape 2 -->
            <div class="text-center relative animate-slide-up" style="animation-delay: 0.5s;">
              <div class="relative z-10 w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-white font-bold text-xl">2</span>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div class="text-4xl mb-4">🧠</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">L'IA fait sa magie</h3>
                <p class="text-gray-600 mb-4">
                  Analyse de 47 critères de compatibilité parmi 1000+ profils vérifiés
                </p>
                <div class="text-sm text-secondary-600 font-medium">🎯 98% de précision</div>
              </div>
            </div>

            <!-- Étape 3 -->
            <div class="text-center relative animate-slide-up" style="animation-delay: 0.7s;">
              <div class="relative z-10 w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-white font-bold text-xl">3</span>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div class="text-4xl mb-4">💌</div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">Contactez vos matchs</h3>
                <p class="text-gray-600 mb-4">
                  Messages de premier contact pré-rédigés et personnalisés
                </p>
                <div class="text-sm text-accent-600 font-medium">✨ 3 profils ultra-compatibles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Démo interactive du matching -->
      <div class="max-w-4xl mx-auto mb-16 animate-fade-in" style="animation-delay: 0.9s;">
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 class="text-xl font-bold text-center mb-6 text-gray-900">
            Aperçu du matching en temps réel
          </h3>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Vos critères -->
            <div>
              <h4 class="font-semibold mb-4 text-gray-800">Vos critères</h4>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div class="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span class="text-sm">Garde d'enfant 6-10 ans</span>
                </div>
                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div class="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span class="text-sm">Lundi-Vendredi 17h-20h</span>
                </div>
                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div class="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span class="text-sm">Aide aux devoirs</span>
                </div>
                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                  <div class="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                  <span class="text-sm">Paris 15ème (500m max)</span>
                </div>
              </div>
            </div>

            <!-- Résultats -->
            <div>
              <h4 class="font-semibold mb-4 text-gray-800">Vos 3 matchs parfaits</h4>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <img class="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1494790108755-2616b612990e?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80" alt="Marie">
                  <div class="flex-1">
                    <div class="font-medium text-sm">Marie, 28 ans</div>
                    <div class="text-xs text-gray-600">Compatibilité: 96% ⭐</div>
                  </div>
                  <div class="text-green-600 font-bold text-sm">TOP</div>
                </div>
                
                <div class="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <img class="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80" alt="Sophie">
                  <div class="flex-1">
                    <div class="font-medium text-sm">Sophie, 31 ans</div>
                    <div class="text-xs text-gray-600">Compatibilité: 94% ⭐</div>
                  </div>
                  <div class="text-blue-600 font-bold text-sm">94%</div>
                </div>
                
                <div class="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <img class="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80" alt="Léa">
                  <div class="flex-1">
                    <div class="font-medium text-sm">Léa, 26 ans</div>
                    <div class="text-xs text-gray-600">Compatibilité: 92% ⭐</div>
                  </div>
                  <div class="text-purple-600 font-bold text-sm">92%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Points clés de différenciation -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <!-- Point 1 -->
        <div class="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up" style="animation-delay: 1.1s;">
          <div class="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">🧠</span>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-900">IA de matching</h3>
          <p class="text-gray-600 text-sm">47 critères analysés pour une compatibilité parfaite</p>
        </div>

        <!-- Point 2 -->
        <div class="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up" style="animation-delay: 1.3s;">
          <div class="w-16 h-16 bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">⚡</span>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-900">Ultra-rapide</h3>
          <p class="text-gray-600 text-sm">2 minutes vs 2 semaines de recherche traditionnelle</p>
        </div>

        <!-- Point 3 -->
        <div class="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up" style="animation-delay: 1.5s;">
          <div class="w-16 h-16 bg-gradient-to-r from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">🔒</span>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-900">100% vérifiés</h3>
          <p class="text-gray-600 text-sm">Tous les profils sont vérifiés et validés</p>
        </div>

        <!-- Point 4 -->
        <div class="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-slide-up" style="animation-delay: 1.7s;">
          <div class="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">�</span>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-900">Contact facilité</h3>
          <p class="text-gray-600 text-sm">Messages personnalisés générés automatiquement</p>
        </div>
      </div>

      <!-- Call-to-action -->
      <div class="text-center mt-16 animate-fade-in" style="animation-delay: 1.9s;">
        <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 max-w-2xl mx-auto text-white">
          <h3 class="text-2xl font-bold mb-4">
            Prêt(e) à tester la magie ?
          </h3>
          <p class="text-lg mb-6 opacity-90">
            Rejoignez les 2847 parents qui ont déjà trouvé leur perle rare
          </p>
          <NuxtLink to="/inscription" class="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
            <span>Commencer maintenant</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Comment ça marche selon les spécifications landing_page.md
</script>
