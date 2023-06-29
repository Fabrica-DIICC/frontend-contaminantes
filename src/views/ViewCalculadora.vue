<script setup>
import ResultPlace from "@/components/caluladora/ResultPlace.vue";
import { ref } from "vue";
import axios from "axios";
// import { watchEffect } from "vue";
import { watch } from "vue";
import { onMounted } from "vue";

const foodSelectorLabel = ref('')
const loading = ref(false);
const result = ref("init");
const weight = ref(0);
const amount = ref(0);
const alimento = ref("");
const isValid = ref(false);
const search = ref(null);
const accentColor = "deep-orange";
// const alimentos = ref([]);
const items = ref([]);
const selection = ref([])
const baseUrl = "http://fabrica.inf.udec.cl:5001/";

const contaminantes = ref(null)
onMounted(async () => {
  const result = await axios.get(baseUrl + 'contaminantes')
  contaminantes.value = result.data
})
watch(selection, async (actual) => {
  let contaminantes = []
  for (const cont in actual)
    contaminantes.push(actual[cont])
  const result = await axios.post(baseUrl + 'alimentos', {
    contaminantes
  })
  items.value = result.data;
})
// watchEffect(async () => {
//   try {
//     const data = await axios.get(baseUrl + "alimentos");
//     alimentos.value = data.data;
//     console.log(alimentos);
//   } catch (error) {
//     alimentos.value = [];
//   }
// });
const askResult = async () => {
  try {
    const data = await axios.post(baseUrl + "calculadora", {
      weight: parseInt(weight.value),
      amount: parseInt(amount.value),
      food: alimento.value,
    });
    result.value = data.data.estado;
    console.log(result.value);
  } catch (error) {
    alert(error);
  }
};

const querySelector = async (v) => {
  loading.value = true;
  items.value = items.value.filter((e) => {
    return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
  });
  loading.value = false;
};

watch(search, (val) => {
  if (val === '') items.value = []
  if (val && val !== alimento.value && querySelector(val)) return

});

</script>
<template>
  <!-- <v-container class="text-center mt-4">
    <h4 class="text-h4">{{ $route.name }}</h4>
  </v-container> -->

  <v-form v-model="isValid">
    <v-container fluid>
      <v-row align-content="center" justify="center">
        <v-col class="mx-10">
          <v-row align-content="center">
            <v-col cols="1">
              <v-avatar density="compact" :color="accentColor">1</v-avatar>
            </v-col>
            <v-col align-self="center">
              <h6 class="text-h6">Peso</h6>
            </v-col>
          </v-row>
          <!-- input -->
          <v-row class="w-75">
            <v-text-field density="compact" prefix="kg" type="number" v-model="weight"
              persistent-placeholder></v-text-field>
          </v-row>
          <v-row>
            <v-col cols="1">
              <v-avatar density="compact" :color="accentColor">2</v-avatar>
            </v-col>
            <v-col>
              <h6 class="text-h6">Contaminante</h6>
            </v-col>
          </v-row>
          <!-- radio button group -->
          <v-row class="w-75">
            <v-checkbox v-for="cont in contaminantes" :key="cont.nombre" :label="cont.nombre" :value="cont.nombre"
              v-model="selection" :color="accentColor"></v-checkbox>
          </v-row>
          <v-row>
            <v-col cols="1">
              <v-avatar density="compact" :color="accentColor">3</v-avatar>
            </v-col>
            <v-col>
              <h6 class="text-h6">Alimento</h6>
            </v-col>
          </v-row>
          <!-- select -->
          <v-row class="w-75">
            <v-autocomplete density="compact" v-model="alimento" v-model:search="search" :items="items" :loading="loading"
              hide-no-data :hint="foodSelectorLabel"></v-autocomplete>
          </v-row>
          <v-row>
            <v-col cols="1">
              <v-avatar density="compact" :color="accentColor">4</v-avatar>
            </v-col>
            <v-col>
              <h6 class="text-h6">Cantidad Consumida</h6>
            </v-col>
          </v-row>
          <!-- input -->
          <v-row class="w-75">
            <v-text-field density="compact" prefix="g/dia" type="number" persistent-placeholder
              v-model="amount"></v-text-field>
          </v-row>
          <v-row class="w-75" align-content="center" justify="center">
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
