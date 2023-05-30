<template>
  <v-app-bar flat collapse="" class="py-4 px-10" scroll-behavior="hide" >
    <v-btn density="comfortable" icon="mdi-arrow-left" @click="goBack"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>
