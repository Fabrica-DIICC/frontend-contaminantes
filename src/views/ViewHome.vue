<template>
  <!-- Encabezado -->
  <v-container fluid>
    <v-row>
      <v-col cols="11">
        <img src="@/assets/Logo.svg" width="60" max-height="122" alt="Logo" />
      </v-col>
      <v-col cols="1" v-if="isLogin">
        <v-btn density="comfortable" icon="mdi-logout" @click="leave"></v-btn>
      </v-col>
    </v-row>
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
                <v-btn v-if="!isLogin" :color="accentColor" @click="goLogin" :loading="auth0.isLoading">Inicio de Sesion</v-btn>
                <v-btn v-else>Generador de Informe</v-btn>
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
  <v-footer :color="accentColor" height="200px">
    <v-img src="@/assets/figuras.png" max-height="110px" cover>
      <v-container>
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
import { useAuthStore } from '@/store/auth';
import { computed } from 'vue';

document.title = 'OpenCRA'
const auth0 = useAuth0()
const router = useRouter()
const accentColor = 'deep-orange-darken-1'
const store = useAuthStore()

const goCalculadora = async () => {
  await router.push({ name: 'Calculadora' })
}

const goLogin = async () => {
  // router.push({ name: 'Login' })
  try {
    await auth0.loginWithPopup()
    // console.log(await auth0.getAccessTokenSilently())
    const token = await auth0.getAccessTokenSilently()
    console.log(token)
    store.token = token
    await router.push({ name: "Filtros" })


  } catch (err) {
    console.log(err.message)
    await router.replace({ name: "Home" })
  }

}

const isLogin = computed(() => auth0.isAuthenticated.value)

const leave = async () => {
  await auth0.logout({
    logoutParams: {
      returnTo: window.location.origin.concat('/home')
    }
  })
}


const goInfo = async () => {
  await router.push('/moreInfo')
}
</script>
