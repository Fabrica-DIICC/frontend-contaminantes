<script setup>
import { computed } from 'vue';
import goodImg from "@/assets/great.png"
import badImg from "@/assets/warning.png"

const props = defineProps({
    result: {
        type: String,
        default: 'init'
    }
})
const variants = {
    good: {
        color: 'green-accent-3',
        titulo: "Genial!",
        text: "La concentración de contaminte en tu comida no es peligrosa",
        imagen: goodImg
    },
    bad: {
        color: 'red-accent-3',
        titulo: "Cuidado!",
        text: "La concentración de contaminante en tu comida es peligrosa",
        imagen: badImg
    },
    init: {
        color: 'orange-accent-3',
        text: 'Se utilizaron datos de La Encuesta Nacional de Consumo Alimentario (2010) y del programa de Monitoreo de Peligros Químicos Ministerio de Salud para realizar las estimaciones de exposición. ',
    }
}

const getVars = computed(() => {
    switch (props.result) {
        case 'bien':
            return variants.good
        case 'mal':
            return variants.bad
        default:
            return variants.init
    }
})
</script>
<template>
    <v-card rounded="s-pill" variant="tonal" height="100%" :color="getVars.color">
        <v-row v-if="getVars.imagen" justify="center" class="h-100" no-gutters>
            <v-col align-self="center" cols="5">
                <v-img class="mx-auto" :src="getVars.imagen" aspect-ratio="1" width="30%"></v-img>
            </v-col>
            <!-- </v-row> -->
            <!-- <v-row> -->
            <v-col align-self="center" class="mr-7">
                <p class="text-h4 text-center">
                    {{ getVars.titulo }}
                </p>
                <p class="text-center">
                    {{ getVars.text }}
                </p>
            </v-col>
        </v-row>
        <v-row v-else align-content="center" class="h-100">
            <v-col align-self="center">
                <p class="text-center">
                    {{ getVars.text }}
                </p>
            </v-col>
        </v-row>
    </v-card>
</template>