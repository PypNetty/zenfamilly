<template>
  <section class="section bg-gray-50">
    <div class="container">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Questions fréquentes
        </h2>
      </div>

      <!-- Accordéon FAQ -->
      <div class="max-w-3xl mx-auto space-y-4">
        <!-- Question 1 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <button 
            @click="toggleFaq(0)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">❓</span>
              <span class="font-semibold text-gray-900">C'est vraiment gratuit ?</span>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === 0 }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="openFaq === 0" class="px-6 pb-4">
            <div class="flex items-start">
              <span class="text-2xl mr-4">💡</span>
              <p class="text-gray-700">
                Oui ! Vous testez gratuitement. Vous payez seulement si vous voulez débloquer plus de profils.
              </p>
            </div>
          </div>
        </div>

        <!-- Question 2 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <button 
            @click="toggleFaq(1)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">❓</span>
              <span class="font-semibold text-gray-900">Comment vous êtes sûrs de la compatibilité ?</span>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === 1 }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="openFaq === 1" class="px-6 pb-4">
            <div class="flex items-start">
              <span class="text-2xl mr-4">💡</span>
              <p class="text-gray-700">
                Notre algorithme analyse 47 critères : horaires, pédagogie, expérience, proximité, valeurs...
              </p>
            </div>
          </div>
        </div>

        <!-- Question 3 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <button 
            @click="toggleFaq(2)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">❓</span>
              <span class="font-semibold text-gray-900">Et la sécurité des profils ?</span>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === 2 }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="openFaq === 2" class="px-6 pb-4">
            <div class="flex items-start">
              <span class="text-2xl mr-4">💡</span>
              <p class="text-gray-700">
                Toutes nos nounous sont vérifiées : identité, références, casier judiciaire.
              </p>
            </div>
          </div>
        </div>

        <!-- Question 4 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <button 
            @click="toggleFaq(3)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">❓</span>
              <span class="font-semibold text-gray-900">Ça remplace l'entretien ?</span>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === 3 }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="openFaq === 3" class="px-6 pb-4">
            <div class="flex items-start">
              <span class="text-2xl mr-4">💡</span>
              <p class="text-gray-700">
                Non ! On vous garantit juste que chaque entretien vaut vraiment le coup.
              </p>
            </div>
          </div>
        </div>

        <!-- Question 5 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <button 
            @click="toggleFaq(4)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">❓</span>
              <span class="font-semibold text-gray-900">Disponible dans ma ville ?</span>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === 4 }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="openFaq === 4" class="px-6 pb-4">
            <div class="flex items-start">
              <span class="text-2xl mr-4">💡</span>
              <p class="text-gray-700">
                Nous couvrons déjà 50+ villes. Saisissez votre code postal pour vérifier.
              </p>
            </div>
          </div>
        </div>

        <!-- Question 6 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100">
          <button 
            @click="toggleFaq(5)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">❓</span>
              <span class="font-semibold text-gray-900">Et si ça ne marche pas ?</span>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaq === 5 }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="openFaq === 5" class="px-6 pb-4">
            <div class="flex items-start">
              <span class="text-2xl mr-4">💡</span>
              <p class="text-gray-700">
                Remboursement intégral sous 7 jours, sans justification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// État de l'accordéon FAQ
const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>
