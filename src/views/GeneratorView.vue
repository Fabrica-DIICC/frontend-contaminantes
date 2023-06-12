<template>
    <v-container fluid class="text-center mb-4">
        <h4 class="text-h4">Generador de Informes</h4>
    </v-container>
    <v-container>
        <v-row class="w-100" justify="center">
            <v-col>
                <v-range-slider v-model="edad" step="1" :min='0' :max='120' thumb-label="always" label="Edad"
                    :color="accentColor" :thumb-color="darkAccent"></v-range-slider>
            </v-col>
            <v-col>
                <v-range-slider v-model="altura" :min='0' :max='250' step="1" thumb-label="always" label="Altura"
                    :color="accentColor" :thumb-color="darkAccent"></v-range-slider>
            </v-col>
            <v-col>
                <v-range-slider v-model="peso" :min='0' :max='200' step="1" thumb-label="always" label="Peso"
                    :color="accentColor" :thumb-color="darkAccent"></v-range-slider>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row justify="center">
                    <div class="w-75">
                        <v-autocomplete density="compact" :items="alimentos" label="Agregar Alimento" v-model="foodValue"
                            @update:model-value="onFoodChange">
                        </v-autocomplete>
                    </div>
                </v-row>
                <v-row justify="center">
                    <v-table fixed-header height="250" class="w-75">
                        <thead>
                            <tr>
                                <th>Alimentos</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody v-if="selectedFoods.length">
                            <tr v-for="food in selectedFoods" :key="food">
                                <td>
                                    {{ food }}
                                </td>
                                <td>
                                    <v-btn icon="mdi-close" density="compact" color="red" @click="removeFood(food)"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td>
                                    Agregar Alimentos
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-row>
            </v-col>
            <v-col>
                <v-row justify="center">
                    <div class="w-75">
                        <v-autocomplete density="compact" :items="toxics" label="Agregar Contaminante" v-model="toxicValue"
                            @update:model-value="onToxicChange" item-title="alias" item-value="item.alias">
                            <template v-slot:item="{ props, item }">
                                <v-list-item v-bind="props" :title="item?.raw?.alias">

                                </v-list-item>
                            </template>
                        </v-autocomplete>
                    </div>
                </v-row>
                <v-row justify="center">
                    <v-table fixed-header height="250" class="w-75">
                        <thead>
                            <tr>
                                <th>Contaminantes</th>
                            </tr>
                        </thead>

                        <tbody v-if="selectedtoxics.length">
                            <tr v-for="toxic in selectedtoxics" :key="toxic">
                                <td>
                                    {{ toxic }}
                                </td>
                                <td>
                                    <v-btn icon="mdi-close" density="compact" color="red"
                                        @click="removeToxic(toxic)"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td>
                                    Agregar Contaminante
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="mx-0 mt-2 mb-2 pa-0 text-center " fluid>
        <v-btn>Generar Reporte</v-btn>
    </v-container>
</template>
<script setup>
import { watchEffect, ref } from 'vue'
import axios from 'axios';

const baseUrl = 'http://fabrica.inf.udec.cl:5001/'
const toxicValue = ref('')
const foodValue = ref('')
const alimentos = ref([])
const toxics = ref([])
const edad = ref([])
const altura = ref([])
const peso = ref([])
const accentColor = 'deep-orange'
const darkAccent = 'deep-orange-darken-4'
const selectedFoods = ref([])
const selectedtoxics = ref([])

const onFoodChange = () => {
    if (foodValue.value === "") return
    alimentos.value = alimentos.value.filter((v) => v != foodValue.value)
    selectedFoods.value.push(foodValue.value)
    foodValue.value = ""

}
const onToxicChange = () => {
    if (toxicValue.value === "") return
    toxics.value = toxics.value.filter((v) => v.alias != toxicValue.value)
    selectedtoxics.value.push(toxicValue.value)
}
const removeFood = (food) => {
    selectedFoods.value = selectedFoods.value.filter((v) => v != food)
    alimentos.value.push(food)
    alimentos.value.sort()
}

const removeToxic = (toxic) => {
    selectedtoxics.value = selectedtoxics.value.filter((v) => v != toxic)
    toxics.value.push({ alias: toxic })
    toxics.value.sort((a, b) => a.alias > b.alias)
}
watchEffect(async () => {
    try {
        const data = await axios.get(baseUrl + 'alimentos')
        alimentos.value = data.data
    } catch (error) {
        alimentos.value = []
    }
})
watchEffect(async () => {
    try {
        const data = await axios.get(baseUrl + 'contaminantes')
        toxics.value = data.data
    } catch (error) {
        toxics.value = []
    }
})
</script>