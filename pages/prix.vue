<script setup lang="ts">
// Redirection automatique de /prix vers /tarifs
await navigateTo('/tarifs', { redirectCode: 301 })
</script>

<template>
  <!-- Cette page redirige automatiquement vers /tarifs -->
</template>
