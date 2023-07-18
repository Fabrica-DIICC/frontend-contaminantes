// Utilities
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useAppStore = defineStore("app", () => {
  const store = useAuthStore();
  const fileOnApiUrl = ref("");
  const datosConsumo = ref([]);
  const nacional = ref({});
  const regiones = ref([]);
  const result = ref({});

  const getFiltersResult = async (sexo, alimentos, peso, edad) => {
    try {
      console.log(store.token)
      const json = await axios.post(
        import.meta.env.VITE_API_URL + "reporte",
        {
          sexo: sexo,
          alimentos: alimentos,
          peso: peso,
          edad: edad,
        },
        {
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        }
      );
      console.log(json)
      fileOnApiUrl.value = json.data.metadata;
      nacional.value = json.data.chile;
      datosConsumo.value = json.data.preview;
      regiones.value = json.data.regiones;
      return true;
    } catch (error) {
      result.value = error;
      return false;
    }
  };

  return {
    // variable
    fileOnApiUrl,
    datosConsumo,
    nacional,
    regiones,
    result,

    //funciones
    getFiltersResult,
  };
});
