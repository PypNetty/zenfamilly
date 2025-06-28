<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Section Problème/Solution -->
    <ProblemSolution />
    
    <!-- Comment ça marche -->
    <HowItWorks />
    
    <!-- Témoignages -->
    <Testimonials />
    
    <!-- Pricing/CTA -->
    <Pricing />
    
    <!-- FAQ -->
    <FAQ />
    
    <!-- Footer CTA Final -->
    <FooterCTA />
  </div>
</template>

<script setup lang="ts">
// Page d'accueil complète selon les spécifications landing_page.md
useHead({
  title: 'Trouvez votre nounou | ZenFamille - Matching intelligent',
  meta: [
    {
      name: 'description',
      content: 'Trouvez LA nounou parfaite en 3 clics. IA de matching + profils vérifiés. Gratuit pour commencer.'
    }
  ]
})
</script>
