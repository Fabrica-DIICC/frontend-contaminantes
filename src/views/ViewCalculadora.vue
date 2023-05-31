<script setup>
import ResultPlace from '@/components/caluladora/ResultPlace.vue';
import { ref } from 'vue';
import axios from 'axios';
import { watchEffect } from 'vue';

const result = ref('bad')
const weight = ref(0)
const amount = ref(0)
const alimento = ref('')
const isValid = ref(false)
const accentColor = 'deep-orange'
const alimentos = ref([])

const baseUrl = 'http://fabrica.inf.udec.cl:5001/'

watchEffect(async () => {
    try {
        const data = await axios.get(baseUrl + 'alimentos')
        alimentos.value = data.data
        console.log(alimentos)
    } catch (error) {
        alimentos.value = []
    }
})
const askResult = async () => {
    try {
        const data = await axios.post(baseUrl + 'calculadora', {
            weight: parseInt(weight.value),
            amount: parseInt(amount.value),
            food: alimento.value
        })
        result.value = data.data.estado
        console.log(result.value)
    } catch (error) {
        alert(error)
    }
}
</script> 
<template>
    <v-container class="text-center mt-4">
        <h4 class="text-h4">{{ $route.name }}</h4>
    </v-container>

    <v-form v-model="isValid">
        <v-container>
            <v-row>
                <v-col class="mx-10">
                    <v-row justify="start">
                        <v-col cols="1">
                            <v-avatar :color="accentColor">1</v-avatar>
                        </v-col>
                        <v-col class="my-auto">
                            <h6 class="text-h6">Peso</h6>
                        </v-col>
                    </v-row>
                    <!-- input -->
                    <v-row class="w-75">
                        <v-text-field density="compact" prefix="kg" type="number" v-model="weight"
                            persistent-placeholder></v-text-field>
                    </v-row>
                    <v-row justify="start">
                        <v-col cols="1">
                            <v-avatar :color="accentColor">2</v-avatar>
                        </v-col>
                        <v-col class="my-auto">
                            <h6 class="text-h6">Alimento</h6>
                        </v-col>
                    </v-row>
                    <!-- select -->
                    <v-row class="w-75">
                        <v-autocomplete density="compact" v-model="alimento" :items="alimentos"></v-autocomplete>
                    </v-row>
                    <v-row justify="start">
                        <v-col cols="1">
                            <v-avatar :color="accentColor">3</v-avatar>
                        </v-col>
                        <v-col class="my-auto">
                            <h6 class="text-h6">Cantidad Consumida</h6>
                        </v-col>
                    </v-row>
                    <!-- input -->
                    <v-row class="w-75">
                        <v-text-field density="compact" prefix="g/dia" type="number" persistent-placeholder
                            v-model="amount"></v-text-field>
                    </v-row>
                    <v-row class="w-75" align="center" justify="center">
                        <v-btn variant="outlined" :color="accentColor" @click="askResult">Calcular</v-btn>
                    </v-row>
                </v-col>
                <v-col>
                    <ResultPlace :result="result"></ResultPlace>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
