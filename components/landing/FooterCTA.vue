<template>
  <section class="section bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
    <div class="container text-center">
      <!-- Titre principal -->
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        Prêt à arrêter de chercher ?
      </h2>

      <!-- CTA principal -->
      <div class="mb-8">
        <NuxtLink 
          to="/inscription" 
          class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Trouver ma nounou en 3 clics
          <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Sous-texte avec garanties -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-90">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Gratuit pour commencer</span>
        </div>
        
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>2 minutes chrono</span>
        </div>
        
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Résultats garantis</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Footer CTA final selon les spécifications landing_page.md
</script>
