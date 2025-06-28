<template>
  <footer class="bg-gray-900 text-white">
    <div class="container py-12">
      <!-- Logo et description -->
      <div class="text-center mb-8">
        <div class="flex items-center justify-center mb-4">
          <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg mr-3">
            <span class="text-white font-bold text-xl">🍼</span>
          </div>
          <span class="text-2xl font-bold text-white">ZenFamille</span>
        </div>
        <p class="text-gray-400 max-w-md mx-auto">
          Trouvez LA nounou parfaite en 3 clics. IA de matching + profils vérifiés.
        </p>
      </div>

      <!-- Liens -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <!-- Produit -->
        <div>
          <h4 class="font-semibold mb-4">Produit</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/comment-ca-marche" class="hover:text-white transition-colors">Comment ça marche</NuxtLink></li>
            <li><NuxtLink to="/tarifs" class="hover:text-white transition-colors">Tarifs</NuxtLink></li>
            <li><NuxtLink to="/nounous" class="hover:text-white transition-colors">Devenir nounou</NuxtLink></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-semibold mb-4">Support</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/aide" class="hover:text-white transition-colors">Centre d'aide</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
            <li><a href="mailto:support@zenfamille.fr" class="hover:text-white transition-colors">support@zenfamille.fr</a></li>
          </ul>
        </div>

        <!-- Légal -->
        <div>
          <h4 class="font-semibold mb-4">Légal</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/cgv" class="hover:text-white transition-colors">CGV</NuxtLink></li>
            <li><NuxtLink to="/confidentialite" class="hover:text-white transition-colors">Confidentialité</NuxtLink></li>
            <li><NuxtLink to="/mentions-legales" class="hover:text-white transition-colors">Mentions légales</NuxtLink></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold mb-4">Suivez-nous</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.5 6h-7A1.5 1.5 0 005 7.5v5A1.5 1.5 0 006.5 14h7a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0013.5 6zm-.5 1.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {{ currentYear }} ZenFamille. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer simple selon les spécifications landing_page.md
const currentYear = new Date().getFullYear()
</script>
