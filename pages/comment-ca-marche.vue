<template>
  <div>
    <!-- Hero Section spécifique à la page -->
    <section class="section bg-gradient-to-b from-primary-50 to-white">
      <div class="container">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Comment ça marche ?
            <span class="text-gradient">Le guide complet</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
            Découvrez en détail comment ZenFamille révolutionne la recherche de nounous grâce à l'intelligence artificielle
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up" style="animation-delay: 0.4s;">
            <NuxtLink to="/inscription" class="btn btn-primary btn-large">
              <span>Commencer maintenant</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/" class="btn btn-secondary">
              Retour à l'accueil
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section principale Comment ça marche -->
    <HowItWorks />

    <!-- CTA final -->
    <FooterCTA />
  </div>
</template>

<script setup lang="ts">
// Page dédiée "Comment ça marche"
useHead({
  title: 'Comment ça marche ? | ZenFamille - Guide complet',
  meta: [
    {
      name: 'description',
      content: 'Découvrez comment ZenFamille vous aide à trouver la nounou parfaite en 3 étapes grâce à notre IA de matching.'
    }
  ]
})
</script>
