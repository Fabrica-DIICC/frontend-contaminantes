<template>
  <loading-component v-if="loading"></loading-component>
  <v-container v-else>
    <v-row justify="center">
      <v-col cols="3">
        <v-row>
          <v-col>
            <p class="text-body-1 text-center">Edad</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-range-slider v-model="edad" step="1" :min='0' :max='120' thumb-label :color="darkAccent"
              :thumb-color="accentColor">
            </v-range-slider>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-row>
          <v-col>
            <p class="text-body-1 text-center">Peso</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-range-slider v-model="peso" :min='0' :max='200' step="1" thumb-label :color="darkAccent"
              :thumb-color="accentColor"></v-range-slider>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" align-self="center">
        <v-row>
          <v-col>
            <p class="text-body-1 text-center">Sexo</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-checkbox v-model="sexo" value="0" label="Hombre" :color="accentColor"></v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox v-model="sexo" value="1" label="Mujer" :color="accentColor"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row justify="left">
          <v-col>
            <h6 class="text-h6 text-center">Alimentos</h6>
          </v-col>
        </v-row>
        <v-row justify="center">
          <div class="w-50">
            <v-autocomplete density="compact" :items="alimentos" label="Agregar Alimento" v-model="foodValue"
              @update:model-value="onFoodChange">
            </v-autocomplete>
          </div>
        </v-row>
        <v-row justify="center">
          <v-table fixed-header height="250">
            <thead>
              <tr class="text-center">
                <th>Alimentos</th>
                <th v-for="toxic in toxics" :key="toxic.id">
                  {{ toxic.nombre }}
                </th>
                <th>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody v-if="selectedFoods.length">
              <tr v-for="food in selectedFoods" :key="food">
                <td>
                  {{ food.nombre }}
                </td>
                <td>
                  <v-text-field v-model="food.as" suffix="mg/Kg" density="compact" hint="Decimales (0.0)"
                    placeholder="1.0">
                  </v-text-field>
                </td>
                <v-text-field v-model="food.as_i" suffix="mg/Kg" density="compact" hint="Decimales (0.0)"
                  placeholder="1.0">
                </v-text-field>

                <td>
                  <v-text-field v-model="food.cd" suffix="mg/Kg" density="compact" hint="Decimales (0.0)"
                    placeholder="1.0">
                  </v-text-field>
                </td>
                <td>
                  <v-text-field v-model="food.hg" suffix="mg/Kg" density="compact" hint="Decimales (0.0)"
                    placeholder="1.0">
                  </v-text-field>
                </td>
                <td>
                  <v-text-field v-model="food.pb" suffix="mg/Kg" density="compact" hint="Decimales (0.0)"
                    placeholder="1.0">
                  </v-text-field>
                </td>
                <td>
                  <v-btn icon="mdi-close" density="compact" color="red" @click="removeFood(food.nombre)"></v-btn>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="8" class="text-center">
                  Agregar Alimentos
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-row>
      </v-col>
      <!-- <v-col class="py-0">
        <v-list lines="1" variant="plain" density="compact">
          <h6 class="text-h6 text-center">Clase Social</h6>
          <v-list-item v-for="clase in socialStatus" :key="clase">
            <v-switch :label="clase" v-model="claseValue[clase]" :color="accentColor" class="ml-4" hide-details=""></v-switch>
          </v-list-item>
        </v-list>
      </v-col> -->
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn @click="submitFilters">Generar Reporte</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { onMounted } from 'vue';
import { nextTick } from 'vue';
import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router';
import LoadingComponent from '../LoadingComponent.vue';

const loading = ref(false)
const baseUrl = 'http://fabrica.inf.udec.cl:5001/'
const foodValue = ref('')
const alimentos = ref([])
const toxics = ref([])
const edad = ref([0, 120])
const peso = ref([0, 200])
const sexo = ref(['1', '0'])
const accentColor = 'deep-orange'
const darkAccent = 'deep-orange-darken-4'
const selectedFoods = ref([])
const activeToxic = ref({})
const store = useAppStore()
const router = useRouter()
// const socialStatus = ["Alta", "Media Alta", "Media", "Media Baja", "Baja"]
// const claseValue = ref([])

onMounted(async () => {
  try {
    const data = await axios.get(baseUrl + 'alimentos')
    alimentos.value = data.data
  } catch (error) {
    alimentos.value = []
  }

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

const onFoodChange = async () => {
  if (foodValue.value === "") return
  alimentos.value = alimentos.value.filter((v) => v != foodValue.value)
  selectedFoods.value.push({ nombre: foodValue.value, as: ref(""), as_i: ref(""), hg: ref(""), pb: ref(""), cd: ref("") })
  foodValue.value = ""
  await nextTick()

}
const removeFood = (food) => {
  selectedFoods.value = selectedFoods.value.filter((v) => v.nombre != food)
  alimentos.value.push(food)
  alimentos.value.sort()
}

const checkIfEmpty = (value) => {
  return value === "" ? null : parseFloat(value)
}

const submitFilters = async () => {
  if (!selectedFoods.value.length) {
    alert('Debe elegir un alimento como minimo')
    return
  }
  loading.value = true
  const alimentos = []
  for (const food of selectedFoods.value)
    alimentos.push({
      "nombre": food.nombre,
      "Cd": checkIfEmpty(food.cd),
      "As": checkIfEmpty(food.as),
      "As i": checkIfEmpty(food.as_i),
      "Hg": checkIfEmpty(food.hg),
      "Pb": checkIfEmpty(food.pb),
    })
  console.log(alimentos, sexo.value, edad.value, peso.value)
  if ((await store.getFiltersResult(sexo.value, alimentos, peso.value, edad.value)))
    router.push({ name: 'Resultados' })
  else
    alert(store.result)

  loading.value = false
}

</script>