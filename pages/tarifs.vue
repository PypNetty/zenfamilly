<template>
  <div>
    <!-- Hero Section spécifique à la page tarifs -->
    <section class="section bg-gradient-to-b from-primary-50 to-white">
      <div class="container">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Nos tarifs 
            <span class="text-gradient">transparents</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
            Commencez gratuitement, payez seulement si vous trouvez votre perle rare. Aucun abonnement, aucun engagement.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up" style="animation-delay: 0.4s;">
            <NuxtLink to="/inscription" class="btn btn-primary btn-large">
              <span>Essayer gratuitement</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/" class="btn btn-secondary">
              Retour à l'accueil
            </NuxtLink>
          </div>

          <!-- Badges de confiance -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 animate-fade-in" style="animation-delay: 0.6s;">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Aucune carte bancaire pour commencer</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              <span>Résultats en 2 minutes</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <span>Satisfait ou remboursé 7 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section tarifs principale -->
    <Pricing />

    <!-- Section FAQ liée aux tarifs -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Questions fréquentes sur nos tarifs
          </h2>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <!-- FAQ Item 1 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              💳 Pourquoi commencer par le plan gratuit ?
            </h3>
            <p class="text-gray-600">
              Nous voulons que vous testiez notre magie avant de dépenser un centime. Le plan gratuit vous donne accès à 2 profils de nounous ultra-compatibles - souvent suffisant pour trouver la perle rare !
            </p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              🔄 Puis-je annuler mon plan Premium à tout moment ?
            </h3>
            <p class="text-gray-600">
              Oui, absolument ! Le plan Premium n'est pas un abonnement. C'est un paiement unique de 6,99€ valable 30 jours. Pas de reconduction automatique, pas de piège.
            </p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              💎 Que comprend exactement le plan VIP ?
            </h3>
            <p class="text-gray-600">
              Le plan VIP inclut un conseiller dédié qui gère votre recherche de A à Z : sélection manuelle des profils, prise de contact, négociation des tarifs, et suivi jusqu'à l'embauche. Parfait pour les parents très occupés !
            </p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              🛡️ Comment fonctionne la garantie "satisfait ou remboursé" ?
            </h3>
            <p class="text-gray-600">
              Si vous n'êtes pas 100% satisfait dans les 7 jours, nous vous remboursons intégralement, sans questions. Nous sommes si confiants dans notre service que nous prenons ce risque pour vous.
            </p>
          </div>

          <!-- FAQ Item 5 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              💰 Y a-t-il des frais cachés ?
            </h3>
            <p class="text-gray-600">
              Aucun ! Nos tarifs sont transparents. Pas de frais d'inscription, pas de commission sur les tarifs de votre nounou, pas d'abonnement forcé. Ce que vous voyez, c'est ce que vous payez.
            </p>
          </div>

          <!-- FAQ Item 6 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              📊 Que signifie "94% de taux de succès" ?
            </h3>
            <p class="text-gray-600">
              94% de nos utilisateurs trouvent et embauchent une nounou grâce à notre plateforme. Cette statistique est calculée sur les 6 derniers mois et vérifiée par un organisme indépendant.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-action final -->
    <FooterCTA />
  </div>
</template>

<script setup lang="ts">
// Page dédiée tarifs
useHead({
  title: 'Tarifs transparents | ZenFamille - Essai gratuit',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos tarifs transparents : essai gratuit, puis seulement 6,99€ pour trouver votre nounou parfaite. Aucun abonnement, satisfait ou remboursé.'
    }
  ]
})
</script>
