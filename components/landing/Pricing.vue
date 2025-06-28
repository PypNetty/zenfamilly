<template>
  <section class="section bg-gradient-to-b from-gray-50 to-white">
    <div class="container">
      <!-- Titre de la section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 animate-slide-up">
          Trouvez votre nounou 
          <span class="text-gradient">sans prise de risque</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
          Commencez gratuitement, payez seulement si vous trouvez la perle rare
        </p>
      </div>

      <!-- Toggle mensuel/annuel -->
      <div class="flex items-center justify-center mb-12 animate-slide-up" style="animation-delay: 0.3s;">
        <div class="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
          <div class="flex items-center">
            <button class="px-6 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 transition-colors">
              Paiement unique
            </button>
            <button class="px-6 py-2 text-sm font-medium bg-primary-500 text-white rounded-lg shadow-sm">
              Le plus populaire
            </button>
          </div>
        </div>
      </div>

      <!-- Cards de pricing -->
      <div class="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Plan Découverte (Gratuit) -->
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-up" style="animation-delay: 0.4s;">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">�</span>
            </div>
            <h3 class="text-2xl font-bold mb-2 text-gray-900">Découverte</h3>
            <p class="text-gray-600 mb-4">Pour tester notre magie</p>
            <div class="text-4xl font-bold text-gray-900 mb-1">0€</div>
            <p class="text-sm text-gray-500">Pour toujours</p>
          </div>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>1 recherche</strong> complète</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>2 profils</strong> de nounous sélectionnés</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Messages de <strong>premier contact</strong></span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">Support par <strong>email</strong></span>
            </li>
          </ul>
          
          <NuxtLink 
            to="/inscription" 
            class="btn btn-secondary w-full justify-center group"
          >
            <span>Commencer gratuitement</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          
          <p class="text-xs text-gray-500 text-center mt-3">
            ✓ Aucune carte bancaire requise
          </p>
        </div>

        <!-- Plan Premium (Recommandé) -->
        <div class="bg-gradient-to-b from-primary-50 to-white rounded-2xl p-8 shadow-xl border-2 border-primary-200 relative transform scale-105 animate-slide-up" style="animation-delay: 0.5s;">
          <!-- Badge populaire -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              ⭐ Le plus populaire
            </span>
          </div>
          
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💎</span>
            </div>
            <h3 class="text-2xl font-bold mb-2 text-gray-900">Premium</h3>
            <p class="text-gray-600 mb-4">Pour trouver LA perle rare</p>
            <div class="flex items-center justify-center mb-2">
              <span class="text-lg text-gray-500 line-through mr-2">12,99€</span>
              <div class="text-4xl font-bold text-primary-600">6,99€</div>
            </div>
            <p class="text-sm text-green-600 font-medium">-50% pendant 48h ⏰</p>
          </div>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Recherches illimitées</strong> 30 jours</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>10+ profils</strong> ultra-compatibles</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Score détaillé</strong> + conseils perso</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Support prioritaire</strong> (2h max)</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              <span class="text-primary-700 font-medium"><strong>Accès anticipé</strong> nouvelles fonctionnalités</span>
            </li>
          </ul>
          
          <NuxtLink 
            to="/inscription?plan=premium" 
            class="btn btn-primary w-full justify-center group"
          >
            <span>Trouvez votre nounou maintenant</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          
          <p class="text-xs text-primary-600 text-center mt-3 font-medium">
            ✨ Garantie satisfait ou remboursé 7 jours
          </p>
        </div>

        <!-- Plan VIP -->
        <div class="bg-gradient-to-b from-accent-50 to-white rounded-2xl p-8 shadow-sm border border-accent-200 hover:shadow-lg transition-all duration-300 animate-slide-up" style="animation-delay: 0.6s;">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">👑</span>
            </div>
            <h3 class="text-2xl font-bold mb-2 text-gray-900">VIP</h3>
            <p class="text-gray-600 mb-4">Service personnalisé</p>
            <div class="text-4xl font-bold text-accent-600 mb-1">19,99€</div>
            <p class="text-sm text-gray-500">Paiement unique</p>
          </div>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Tout du Premium</strong> à vie</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Conseiller dédié</strong> par téléphone</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Recherche sur-mesure</strong> manuelle</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700"><strong>Négociation tarifs</strong> incluse</span>
            </li>
          </ul>
          
          <NuxtLink 
            to="/inscription?plan=vip" 
            class="btn w-full justify-center group bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500"
          >
            <span>Service personnalisé</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          
          <p class="text-xs text-accent-600 text-center mt-3 font-medium">
            👑 Satisfaction garantie à 100%
          </p>
        </div>
      </div>

      <!-- Comparaison avec les solutions traditionnelles -->
      <div class="max-w-4xl mx-auto mb-16 animate-fade-in" style="animation-delay: 0.7s;">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-4">
            <h3 class="text-xl font-bold">ZenFamille vs Solutions traditionnelles</h3>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-medium text-gray-900">Critères</th>
                  <th class="px-6 py-4 text-center text-sm font-medium text-primary-600">🎯 ZenFamille</th>
                  <th class="px-6 py-4 text-center text-sm font-medium text-gray-500">👥 Sites classiques</th>
                  <th class="px-6 py-4 text-center text-sm font-medium text-gray-500">📰 Petites annonces</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Temps de recherche</td>
                  <td class="px-6 py-4 text-center">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ⚡ 2 minutes
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">2-3 semaines</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">1-2 mois</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Matching personnalisé</td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-500 text-lg">✓</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-red-500 text-lg">✗</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-red-500 text-lg">✗</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Profils vérifiés</td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-500 text-lg">✓</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-yellow-500 text-lg">~</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-red-500 text-lg">✗</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Prix moyen</td>
                  <td class="px-6 py-4 text-center">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      💚 6,99€
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">29-49€/mois</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">Gratuit (mais...)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Taux de succès</td>
                  <td class="px-6 py-4 text-center">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      🎯 94%
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">~40%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-500">~20%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Social Proof & Testimonials -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <!-- Témoignage 1 -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up" style="animation-delay: 0.8s;">
          <div class="flex items-center mb-4">
            <img class="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1494790108755-2616b612990e?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&h=48&q=80" alt="Marie">
            <div>
              <div class="font-medium text-gray-900">Marie L.</div>
              <div class="text-sm text-gray-500">Maman de 2 enfants</div>
            </div>
          </div>
          <div class="flex text-yellow-400 mb-3">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p class="text-gray-600 text-sm italic">
            "En 2 minutes j'ai eu 3 profils ultra-compatibles. Ma fille adore sa nouvelle nounou !"
          </p>
          <div class="mt-3 text-xs text-gray-500">Plan Premium • Trouvé en 24h</div>
        </div>

        <!-- Témoignage 2 -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up" style="animation-delay: 0.9s;">
          <div class="flex items-center mb-4">
            <img class="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&h=48&q=80" alt="Thomas">
            <div>
              <div class="font-medium text-gray-900">Thomas R.</div>
              <div class="text-sm text-gray-500">Papa solo</div>
            </div>
          </div>
          <div class="flex text-yellow-400 mb-3">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p class="text-gray-600 text-sm italic">
            "Le plan gratuit m'a suffi ! J'ai contacté 2 nounous et embauché la première."
          </p>
          <div class="mt-3 text-xs text-gray-500">Plan Gratuit • Trouvé en 3 jours</div>
        </div>

        <!-- Témoignage 3 -->
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up" style="animation-delay: 1.0s;">
          <div class="flex items-center mb-4">
            <img class="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&h=48&q=80" alt="Sophie">
            <div>
              <div class="font-medium text-gray-900">Sophie M.</div>
              <div class="text-sm text-gray-500">Maman working girl</div>
            </div>
          </div>
          <div class="flex text-yellow-400 mb-3">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p class="text-gray-600 text-sm italic">
            "Le service VIP a géré toute la négociation. Parfait pour les mamans débordées !"
          </p>
          <div class="mt-3 text-xs text-gray-500">Plan VIP • Trouvé en 12h</div>
        </div>
      </div>

      <!-- Garanties et confiance -->
      <div class="text-center animate-fade-in" style="animation-delay: 1.1s;">
        <h3 class="text-2xl font-bold mb-8 text-gray-900">
          Votre tranquillité d'esprit, notre priorité
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
          <!-- Garantie 1 -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">100% Gratuit</h4>
            <p class="text-gray-600 text-sm text-center">Pour commencer • Aucune carte bancaire</p>
          </div>

          <!-- Garantie 2 -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">2 minutes</h4>
            <p class="text-gray-600 text-sm text-center">Chrono • Résultats instantanés</p>
          </div>

          <!-- Garantie 3 -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">94% succès</h4>
            <p class="text-gray-600 text-sm text-center">Taux de réussite • 2847 familles</p>
          </div>

          <!-- Garantie 4 -->
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Satisfait ou remboursé</h4>
            <p class="text-gray-600 text-sm text-center">7 jours • Sans condition</p>
          </div>
        </div>

        <!-- CTA final -->
        <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">
            Prêt(e) à trouver votre perle rare ?
          </h3>
          <p class="text-lg mb-6 opacity-90">
            Rejoignez les milliers de parents qui font confiance à notre IA
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/inscription" class="btn bg-white text-primary-600 hover:bg-gray-50 btn-large">
              Commencer gratuitement
            </NuxtLink>
            <span class="text-sm opacity-80">⚡ Résultats en 2 minutes</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section Pricing selon les spécifications landing_page.md
</script>
