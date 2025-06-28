# ZenFamille - Setup Nuxt 3 + TypeScript + Tailwind

## 🚀 Initialisation du projet

### 1. Création du projet Nuxt 3
```bash
# Créer le projet avec TypeScript
npx nuxi@latest init zenfamille --packageManager npm
cd zenfamille

# Installer TypeScript support
npm install --save-dev typescript

# Installer Tailwind CSS
npm install --save-dev tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms
npx tailwindcss init -p
```

### 2. Configuration Nuxt (nuxt.config.ts)
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // TypeScript configuration
  typescript: {
    typeCheck: true
  },

  // CSS & Tailwind
  css: ['~/assets/css/main.css'],
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  // App configuration
  app: {
    head: {
      title: 'ZenFamille - Trouvez votre nounou parfaite',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Trouvez LA nounou parfaite en 3 clics. IA de matching + profils vérifiés. Gratuit pour commencer.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 
          rel: 'stylesheet' 
        }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    secretKey: process.env.SECRET_KEY,
    
    // Public keys (exposed to client-side)
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      apiBase: '/api'
    }
  }
})
```

### 3. Configuration Tailwind (tailwind.config.js)
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#4F46E5',
          600: '#4338ca',
          700: '#3730a3',
        },
        secondary: {
          50: '#ecfdf5',
          500: '#10B981',
          600: '#059669',
        },
        accent: {
          50: '#fffbeb',
          500: '#F59E0B',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### 4. CSS de base (assets/css/main.css)
```css
/* assets/css/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-sans text-gray-900 bg-white;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-semibold leading-tight;
  }
  
  h1 {
    @apply text-3xl md:text-5xl lg:text-6xl;
  }
  
  h2 {
    @apply text-2xl md:text-3xl lg:text-4xl;
  }
  
  h3 {
    @apply text-xl md:text-2xl;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
  }
  
  .btn-primary {
    @apply btn bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 hover:shadow-lg transform hover:-translate-y-0.5;
  }
  
  .btn-secondary {
    @apply btn bg-white text-primary-500 border-primary-500 hover:bg-primary-50 focus:ring-primary-500;
  }
  
  .btn-large {
    @apply px-8 py-4 text-lg;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200;
  }
  
  .section {
    @apply py-16 lg:py-24;
  }
  
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent;
  }
  
  .bg-gradient-primary {
    @apply bg-gradient-to-r from-primary-500 to-primary-600;
  }
  
  .bg-gradient-soft {
    @apply bg-gradient-to-b from-gray-50 to-white;
  }
}
```

## 📁 Structure des dossiers

```
zenfamille/
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── images/
│   └── icons/
├── components/
│   ├── ui/
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   └── Input.vue
│   ├── landing/
│   │   ├── HeroSection.vue
│   │   ├── ProblemSolution.vue
│   │   ├── HowItWorks.vue
│   │   ├── Testimonials.vue
│   │   ├── Pricing.vue
│   │   └── FAQ.vue
│   ├── layout/
│   │   ├── Header.vue
│   │   └── Footer.vue
│   └── common/
│       └── Logo.vue
├── composables/
│   ├── useAnalytics.ts
│   └── useScrollAnimation.ts
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── inscription.vue
│   └── recherche.vue
├── plugins/
├── server/
│   └── api/
├── stores/
│   └── user.ts
├── types/
│   └── index.ts
└── utils/
    └── constants.ts
```

## 🎯 Types TypeScript (types/index.ts)

```typescript
// types/index.ts

// User types
export interface User {
  id: string
  email: string
  role: 'parent' | 'nanny'
  profile: UserProfile
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile {
  firstName: string
  lastName: string
  phone?: string
  city: string
  postalCode: string
  avatar?: string
}

// Parent specific
export interface Parent extends User {
  role: 'parent'
  children: Child[]
  preferences: ParentPreferences
}

export interface Child {
  id: string
  name: string
  birthDate: Date
  age: number
  specialNeeds?: string[]
}

export interface ParentPreferences {
  schedule: TimeSlot[]
  maxDistance: number // km
  budgetRange: [number, number] // €/hour
  priorities: string[]
  languages?: string[]
}

// Nanny specific
export interface Nanny extends User {
  role: 'nanny'
  experience: number // years
  hourlyRate: number
  availability: TimeSlot[]
  certifications: string[]
  description: string
  photos: string[]
  reviews: Review[]
  averageRating: number
}

// Matching
export interface Match {
  id: string
  parentId: string
  nannyId: string
  compatibilityScore: number
  factors: CompatibilityFactor[]
  status: 'pending' | 'accepted' | 'rejected' | 'contacted'
  createdAt: Date
}

export interface CompatibilityFactor {
  category: string
  score: number
  weight: number
  reason: string
}

// Common
export interface TimeSlot {
  dayOfWeek: number // 0-6 (Monday = 1)
  startTime: string // "08:00"
  endTime: string // "18:00"
}

export interface Review {
  id: string
  authorId: string
  rating: number
  comment: string
  createdAt: Date
}

// Forms
export interface SearchForm {
  location: {
    city: string
    postalCode: string
  }
  schedule: TimeSlot[]
  budget: [number, number]
  childrenAges: number[]
  priorities: string[]
  urgency: 'asap' | 'next_week' | 'next_month' | 'flexible'
}

// API responses
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}
```

## 📦 Dependencies à installer

```bash
# Core dependencies
npm install @pinia/nuxt @vueuse/nuxt

# UI & Icons
npm install @headlessui/vue @heroicons/vue

# Forms & Validation
npm install vee-validate @vee-validate/zod zod

# Animations
npm install @vueuse/motion

# Development
npm install --save-dev @types/node
```

## 🛠️ Scripts package.json

```json
{
  "name": "zenfamille",
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "type-check": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  }
}
```

## 🚀 Prêt pour le développement !

Avec cette configuration tu as :
- ✅ Nuxt 3 avec TypeScript strict
- ✅ Tailwind avec design system custom  
- ✅ Structure propre et scalable
- ✅ Types complets pour ton domaine
- ✅ Animations et composants UI
- ✅ Configuration SEO optimisée

**Next step :** On commence par quel composant ? Le Header ou la HeroSection ? 😊