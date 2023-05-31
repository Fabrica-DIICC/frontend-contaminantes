<template>
  <!-- Encabezado -->
  <v-container fluid class="pb-0">
    <img src="@/assets/Logo.svg" width="60" max-height="122" alt="Logo" />
  </v-container>
  <v-container fluid class="h-75 py-0">
    <v-row align="center" justify="center" class="h-100">
      <v-col class="mx-50">
        <v-card class="px-16" variant="flat">
          <h4 class="text-h4 text-center my-8">Toxicologia en Alimentos</h4>
          <p class="my-10">Conocer la toxicidad que contienen los alimentos que consumes puede resultar en una práctica
            positiva.</p>
          <v-container fluid>
            <v-row no-gutters justify="center" class="mx-10">
              <v-col>
                <v-btn variant="outlined" :color="accentColor" @click="goCalculadora">Calculadora</v-btn>
              </v-col>
              <v-col>
                <v-btn :color="accentColor" @click="goLogin">Inicio de Sesion</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-img src="@/assets/landing.jpeg" class="rounded-s-pill"></v-img>
      </v-col>
    </v-row>
  </v-container>

  <!-- Pie de página -->
  <v-footer :color="accentColor" class="pa-0">
    <v-img src="@/assets/figuras.png" alt="Figuras" width="100%" min-height="60px" max-height="107" cover />
  </v-footer>
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const accentColor = 'deep-orange-darken-1'

const goCalculadora = () => {
  router.push({name: 'Calculadora'})
}
const goLogin = () => {
  router.push({name: 'Login'})
}
</script>
  
  