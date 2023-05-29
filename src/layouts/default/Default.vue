<template>
  <v-app>
    <Suspense>
      <default-bar />

      <default-view />
      <template #fallback>
        <v-progress-circular indeterminate></v-progress-circular>
      </template>
    </Suspense>
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
</script>
