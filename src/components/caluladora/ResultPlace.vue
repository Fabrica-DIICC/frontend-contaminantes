<script setup>
import { computed } from 'vue';

const props = defineProps({
    result: {
        type: String,
        default: 'init'
    }
})
const variants = {
    good: {
        color: 'green-accent-3',
        text: "Good",
        imagen: "@/assets/great.png"
    },
    bad: {
        color: 'red-accent-3',
        text: "Bad",
        imagen: "@/assets/warning.png"
    },
    init: {
        text: 'Ingrese Informacion requerida',
    }
}

const getVars = computed(() => {
    switch (props.result) {
        case 'good':
            return variants.good
        case 'bad':
            return variants.bad
        default:
            return variants.init
    }
})
</script>
<template>
    <v-card rounded="s-pill" variant="tonal" class="h-100" :color="getVars.color">
        <v-container class="fill-height w-100">
            <p class="w-100 text-center">
                {{ getVars.text }}
            </p>
        </v-container>
    </v-card>
</template>