<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col md="6">
                                    <v-card-text class="mt-12">
                                        <h1 class="text-center">Iniciar sesión en tu cuenta</h1>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="10">
                                                <v-text-field label="Correo electrónico" outlined dense color="blue"
                                                    autocomplete="false" class="mt-16" prepend-icon="mdi-account"
                                                    type="email" />
                                                <v-text-field label="Contraseña" outlined dense color="blue"
                                                    autocomplete="false" prepend-icon="mdi-lock" type="password" />
                                                <v-row>
                                                    <v-col cols="12" sm="7">
                                                        <v-checkbox label="Recordarme" class="mt-n1"
                                                            color="blue"></v-checkbox>
                                                    </v-col>
                                                    <v-col cols="12" sm="5">
                                                        <span class="caption blue--text">¿Olvidaste tu contraseña?</span>
                                                    </v-col>
                                                </v-row>
                                                <v-btn @click="navegar" color="deep-orange-lighten-1" dark block tile>Iniciar sesión</v-btn>
                                                <h3 class="text-center grey--text mt-5 mb-3">O inicia sesión usando</h3>
                                                <div class="d-flex justify-space-between align-center mx-12 mb-11">
                                                    <v-btn :color="accentColor" text>
                                                        <v-icon left>mdi-google</v-icon>
                                                        Google
                                                    </v-btn>
                                                    <v-btn :color="accentColor" text>
                                                        <v-icon left>mdi-microsoft</v-icon>
                                                        Microsoft
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                                <v-col md="6">
                                    <div style="color:white; text-align: center;" class="background-color h-100">
                                        <v-card-text class="white--text ">
                                            <h3 class="text-center">¿Todavía no tienes una cuenta?</h3>
                                        </v-card-text>
                                        <div class="text-center blue h-100">
                                            <v-btn tile outlined dark @click="step++">REGISTRARSE</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-row>
                                <v-col md="6" class="rounded-b-xl">
                                    <div style="color:white; text-align: center;"
                                        class="background-color  h-100 rounded-e-xl">
                                        <v-card-text class=" white--text">
                                            <h3 class="text-center">¿Ya te has registrado?</h3>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark @click="step--">Iniciar sesión</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col md="6">
                                    <v-card-text class="mt-12">
                                        <h2 class="text-center">Regístrate para obtener una cuenta</h2>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="10">
                                                <v-row>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field prepend-icon="mdi-account" label="Nombre" outlined
                                                            dense color="blue" autocomplete="false" class="mt-4" />
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="Apellido" outlined dense color="blue"
                                                            autocomplete="false" class="mt-4" />
                                                    </v-col>
                                                </v-row>
                                                <v-text-field prepend-icon="mdi-email" label="Correo electrónico" outlined
                                                    dense color="blue" autocomplete="false" />
                                                <v-text-field prepend-icon="mdi-lock" label="Contraseña" outlined dense
                                                    color="blue" autocomplete="false" type="password" />
                                                <v-text-field prepend-icon="mdi-lock" label="Confirmar Contraseña" outlined
                                                    dense color="blue" autocomplete="false" type="password" />
                                                <v-btn color="blue" dark block tile>Registrarse</v-btn>
                                                <h5 class="text-center grey--text mt-4 mb-3">O regístrate usando</h5>
                                                <div class="d-flex justify-space-between align-center mx-12 mb-11">
                                                    <v-btn color="primary" text>
                                                        <v-icon left>mdi-google</v-icon>
                                                        Google
                                                    </v-btn>
                                                    <v-btn color="primary" text>
                                                        <v-icon left>mdi-microsoft</v-icon>
                                                        Microsoft
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  

<style scoped>
.background-color {
    background: linear-gradient(45deg, #FF5722, #FF9800);
}
</style>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const accentColor = 'deep-orange'
defineProps({
    source: {
        type: String
    }
})
const router = useRouter()
const navegar = () => { router.push({ name: 'Generador' }) }
const step = ref(1)
</script>