// Utilities
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useAppStore = defineStore('app', () => {
  const fileOnApiUrl = ref('')
  const datosConsumo = ref([])
  const nacional = ref({})
  const regiones = ref([])
  const result = ref({})

  const getFiltersResult = async (sexo, alimentos, peso, edad) => {
    try {
      const json = await axios.post(import.meta.env.VITE_API_URL + "reporte", {
        sexo: sexo,
        alimentos: alimentos,
        peso: peso,
        edad: edad,
      })
      fileOnApiUrl.value = json.data.metadata
      nacional.value = json.data.chile
      datosConsumo.value = json.data.preview
      regiones.value = json.data.regiones
      return true
    }catch(error){
      result.value = error
      return false
    }
  }

  return {
    // variable
    fileOnApiUrl,
    datosConsumo,
    nacional,
    regiones,
    result,

    //funciones
    getFiltersResult,
  }
})
