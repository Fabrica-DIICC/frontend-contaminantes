<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-card class="elevation-6 pa-6 mt-16">
                <h1 class="text-center">Iniciar sesión en tu cuenta</h1>
                <v-row align="center" justify="center">
                    <v-col sm="10">
                        <v-text-field label="Correo electrónico" outlined dense color="deep-orange" autocomplete="false"
                            class="mt-10" prepend-icon="mdi-account" type="email" />
                        <v-text-field label="Contraseña" outlined dense color="deep-orange" autocomplete="false"
                            prepend-icon="mdi-lock" type="password" />
                        <v-row>
                            <v-col cols="12" sm="7">
                                <v-checkbox label="Recordarme" class="mt-n1" color="deep-orange"></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                                <span class="caption blue--text">¿Olvidaste tu contraseña?</span>
                            </v-col>
                        </v-row>
                        <v-btn @click="navegar" color="deep-orange-lighten-1" dark block tile>Iniciar
                            sesión</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
  

<style scoped>
.background-color {
    background: linear-gradient(45deg, #FF5722, #FF9800);
}
</style>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    source: {
        type: String
    }
})
const router = useRouter()
const navegar = () => { router.push({ name: 'Generador' }) }
</script>