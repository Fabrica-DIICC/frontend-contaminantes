<template>
  <v-toolbar color="white">
    <v-btn density="comfortable" icon="mdi-arrow-left" @click="goBack"></v-btn>
    <v-toolbar-title class="text-center text-h4">{{ $route.name }}</v-toolbar-title>
    <v-toolbar-items>
      <v-btn density="comfortable" icon="mdi-logout" @click="auth0.logout()"></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue'

const auth0 = useAuth0()
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>
