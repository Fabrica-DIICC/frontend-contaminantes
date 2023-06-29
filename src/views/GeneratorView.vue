<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="3">
                <p class="text-body-1 text-center">Edad</p>
                <v-range-slider v-model="edad" step="1" :min='0' :max='120' thumb-label :color="darkAccent"
                    :thumb-color="accentColor">
                </v-range-slider>
            </v-col>
            <v-col cols="3">
                <p class="text-body-1 text-center">Peso</p>
                <v-range-slider v-model="peso" :min='0' :max='200' step="1" thumb-label :color="darkAccent"
                    :thumb-color="accentColor"></v-range-slider>
            </v-col>
            <v-col cols="2" align-self="center">
                <p class="text-body-1 text-center">Sexo</p>
                <v-switch v-model="sexo" true-value="Mujer" false-value="Hombre" :label="sexo" :color="accentColor">
                </v-switch>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-row justify="center">
                    <v-col>
                        <h6 class="text-h6 text-center">Alimentos</h6>
                    </v-col>
                </v-row>
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
            <v-col cols="4" class="py-0">
                <v-list lines="1" density="compact" variant="plain">
                    <h6 class="text-h6 text-center">Contaminantes</h6>
                    <v-list-item v-for="toxic in toxics" :key="toxic.nombre">
                        <v-switch :label="toxic.alias" v-model="activeToxic[toxic.alias]" :color="accentColor" class="ml-4">
                            <template v-slot:append>
                                <v-text-field type="number" style="width: 100px;" class="text-caption"
                                    :disabled="!activeToxic[toxic.alias]" density="compact" suffix="mmg" hint="Personaliza"
                                    variant="solo"></v-text-field>
                            </template>
                        </v-switch>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="3" class="py-0">
                <v-list lines="1" variant="plain" density="compact">
                    <h6 class="text-h6 text-center">Clase Social</h6>
                    <v-list-item v-for="clase in socialStatus" :key="clase">
                        <v-switch :label="clase" v-model="claseValue[clase]" :color="accentColor" class="ml-4"></v-switch>
                    </v-list-item>
                </v-list>
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
import { onMounted } from 'vue';

const baseUrl = 'http://fabrica.inf.udec.cl:5001/'
const toxicValue = ref('')
const foodValue = ref('')
const alimentos = ref([])
const toxics = ref([])
const edad = ref([])
const peso = ref([])
const sexo = ref('Mujer')
const accentColor = 'deep-orange'
const darkAccent = 'deep-orange-darken-4'
const selectedFoods = ref([])
const selectedtoxics = ref([])
const activeToxic = ref({})
const socialStatus = ["Alta", "Media Alta", "Media", "Media Baja", "Baja"]
const claseValue = ref([])

onMounted(() => {
    for (const clase in socialStatus)
        claseValue.value[clase] = ref(false)
})

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
        for (const toxic in toxics.value)
            activeToxic.value[toxic.alias] = ref(false)
        console.log(toxics)
    } catch (error) {
        toxics.value = []
    }
})
</script>