<script setup>
import { reactive } from 'vue';

const theme = reactive({
  value : 'light'
});

</script>

<template>
  <v-app :theme="theme.value">
    <v-main>
      
      <v-app-bar :elevation="2" :title="'Proyecto Contaminantes'">
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

