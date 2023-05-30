<template>
    <v-autocomplete density="comfortable" :items="alimentos"></v-autocomplete>
</template>

<script setup>

import axios from 'axios'

let alimentos = []
try {
    const data = await axios.get('http://fabrica.inf.udec.cl:5001/alimentos')
    alimentos = data.data
    console.log(alimentos)
} catch (error) {
    const alimentos = []
}
</script>