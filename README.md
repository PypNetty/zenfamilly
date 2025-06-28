# ZenFamille

Trouvez LA nounou parfaite en 3 clics. IA de matching + profils vérifiés. Gratuit pour commencer.

## 🚀 Installation et développement

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Aperçu de la production
pnpm preview
```

## 🛠️ Technologies utilisées

- **Nuxt 3** - Framework Vue.js pour applications web modernes
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Pinia** - Store state management pour Vue
- **VueUse** - Collection d'utilitaires Vue Composition API

## 📁 Structure du projet

```
├── assets/css/          # Fichiers CSS globaux
├── components/          # Composants Vue réutilisables
│   ├── ui/             # Composants d'interface (Button, Card, etc.)
│   ├── landing/        # Composants de la landing page
│   ├── layout/         # Composants de layout (Header, Footer)
│   └── common/         # Composants communs (Logo, etc.)
├── composables/        # Fonctions composables Vue
├── layouts/            # Layouts Nuxt
├── pages/              # Pages de l'application
├── stores/             # Stores Pinia
├── types/              # Définitions TypeScript
└── utils/              # Utilitaires et constantes
```

## 🎨 Design System

Le projet utilise un design system basé sur Tailwind CSS avec des couleurs personnalisées :

- **Primary** : Indigo (#4F46E5)
- **Secondary** : Emerald (#10B981)  
- **Accent** : Amber (#F59E0B)

Classes utilitaires disponibles :
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-large`
- `.card`, `.section`, `.container`
- `.text-gradient`

## 📱 Fonctionnalités

- [x] Landing page responsive
- [x] Header avec navigation
- [x] Hero section
- [x] Design system Tailwind
- [x] Store utilisateur (Pinia)
- [x] Types TypeScript complets
- [ ] Système d'inscription/connexion
- [ ] Recherche de nounous
- [ ] Profils détaillés
- [ ] Système de matching IA
- [ ] Messagerie
- [ ] Paiements

## 🔧 Développement

Le projet est configuré avec :
- TypeScript strict
- ESLint pour la qualité du code
- Nuxt DevTools
- Hot Module Replacement

Pour ajouter de nouvelles fonctionnalités, suivez la structure existante et utilisez les types définis dans `/types/index.ts`.

## 📄 License

Propriétaire - ZenFamille
