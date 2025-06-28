<template>
  <section class="section bg-gradient-to-r from-primary-50 to-secondary-50">
    <div class="container">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Ils ont trouvé leur perle rare :
        </h2>
      </div>

      <!-- Carousel de témoignages -->
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Témoignage 1 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-4">
              <img 
                class="w-12 h-12 rounded-full mr-4" 
                src="https://images.unsplash.com/photo-1494790108755-2616b612990e?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80" 
                alt="Marie"
              >
              <div>
                <div class="font-semibold text-gray-900">Marie</div>
                <div class="text-sm text-gray-500">Nantes</div>
              </div>
            </div>
            
            <div class="flex text-yellow-400 mb-3">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            
            <blockquote class="text-gray-700 italic">
              "En 15 minutes j'avais 3 super profils. Anaïs garde maintenant Emma depuis 6 mois !"
            </blockquote>
          </div>

          <!-- Témoignage 2 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-4">
              <img 
                class="w-12 h-12 rounded-full mr-4" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80" 
                alt="Thomas"
              >
              <div>
                <div class="font-semibold text-gray-900">Thomas</div>
                <div class="text-sm text-gray-500">Lyon</div>
              </div>
            </div>
            
            <div class="flex text-yellow-400 mb-3">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            
            <blockquote class="text-gray-700 italic">
              "Enfin un site qui comprend nos vrais besoins. Plus de perte de temps !"
            </blockquote>
          </div>

          <!-- Témoignage 3 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-4">
              <img 
                class="w-12 h-12 rounded-full mr-4" 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80" 
                alt="Julie"
              >
              <div>
                <div class="font-semibold text-gray-900">Julie</div>
                <div class="text-sm text-gray-500">Bordeaux</div>
              </div>
            </div>
            
            <div class="flex text-yellow-400 mb-3">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            
            <blockquote class="text-gray-700 italic">
              "Le score de compatibilité était à 96%. On a su tout de suite que c'était la bonne."
            </blockquote>
          </div>
        </div>

        <!-- Navigation du carousel (optionnel pour mobile) -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="n in 3" 
            :key="n"
            class="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary-500 transition-colors"
            :class="{ 'bg-primary-500': n === 1 }"
          ></button>
        </div>

        <!-- Statistiques supplémentaires -->
        <div class="mt-16 text-center">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div class="text-3xl font-bold text-primary-600">500+</div>
              <div class="text-sm text-gray-600">Familles satisfaites</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-secondary-600">98%</div>
              <div class="text-sm text-gray-600">Taux de réussite</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-accent-600">10min</div>
              <div class="text-sm text-gray-600">Temps moyen</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary-600">4.9/5</div>
              <div class="text-sm text-gray-600">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Témoignages selon les spécifications landing_page.md
</script>
