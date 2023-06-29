<template>
  <v-toolbar color="white">
    <v-btn density="comfortable" icon="mdi-arrow-left" @click="goBack"></v-btn>
    <v-toolbar-title class="text-center text-h4">{{ $route.name }}</v-toolbar-title>
    <v-btn density="comfortable" disabled></v-btn>
  </v-toolbar>
</template>

<script setup>
import {  useRouter } from 'vue-router';

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>
