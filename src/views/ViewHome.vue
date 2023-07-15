<template>
  <!-- Encabezado -->
  <v-container fluid>
    <img src="@/assets/Logo.svg" width="60" max-height="122" alt="Logo" />
  </v-container>
  <v-container fluid class="h-75 py-0">
    <v-row align-content="center" justify="center" class="h-100">
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
                <v-btn :color="accentColor" @click="goLogout">Logout</v-btn>
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
  <v-footer :color="accentColor" dark>
    <v-img src="@/assets/figuras.png" max-height="110px" cover>
      <v-container fluid>
        <v-row align-content="center">
          <v-col class="text-center" align-self="center">
            <v-btn variant="plain" class="ma-0 pa-0" @click="goInfo">
              Ver mas
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-footer>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue'

document.title = 'OpenCRA'
const auth0 = useAuth0()
const router = useRouter()
const accentColor = 'deep-orange-darken-1'

const goCalculadora = () => {
  router.push({ name: 'Calculadora' })
}

const goLogin = async () => {
  // router.push({ name: 'Login' })
  try {
    await auth0.loginWithPopup()
    console.log(await auth0.getAccessTokenSilently())
    await router.push({ name: "Filtros" })


  } catch (err) {
    console.log(err.message)
    await router.replace({ name: "Home" })
  }
}

const goLogout = () => {

  auth0.logout()
}


const goInfo = () => {
  router.push('/moreInfo')
}
</script>
