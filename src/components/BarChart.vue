<template>
    <v-carousel hide-delimiter-background height="500px" show-arrows="hover" delimiter-icon="mdi-circle-small">
        <v-carousel-item>
            <v-container class="fill-height">
                <v-row class="h-100">
                    <v-col>
                        <Bar id="chart-16" :options="optionsChile" :data="chartDataChile"></Bar>
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>

        <v-carousel-item v-for="region in index" :key="region">
            <v-container class="fill-height">
                <v-row class="h-100">
                    <v-col>
                        <Bar :id="chart + region" :options="chartOptions[region]" :data="chartData[region]"></Bar>
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>
    </v-carousel>

    <v-carousel hide-delimiter-background height="500px" show-arrows="hover" delimiter-icon="mdi-circle-small">
        <v-carousel-item>
            <v-container class="fill-height">
                <v-row class="h-100">
                    <v-col>
                        <Bar id="chart-16" :options="optionsChile" :data="chartDataChile2"></Bar>
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>

        <v-carousel-item v-for="region in index" :key="region">
            <v-container class="fill-height">
                <v-row class="h-100">
                    <v-col>
                        <Bar :id="chart + region" :options="chartOptions[region]" :data="chartData2[region]"></Bar>
                    </v-col>
                </v-row>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</template>
  
<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { useAppStore } from '@/store/app';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const store = useAppStore()
const { regiones } = storeToRefs(store)
const chartOptions = []
const index = Array.from({ length: 15 }, (value, index) => index)
const chartData = ref([])
const chartData2 = ref([])
const chartDataChile = {

    labels: ['As', "As i", "Cd", "Hg", "Pb"],
    datasets: [
        {
            label: 'Tasa de Riesgo',
            data: [store.nacional.formula.As, store.nacional.formula['As i'], store.nacional.formula.Cd, store.nacional.formula.Hg, store.nacional.formula.Pb],
            backgroundColor: '#FF6384',
        }
    ]
}
const chartDataChile2 = {
    labels: ['As', "As i", "Cd", "Hg", "Pb"],
    datasets: [
        {
            label: 'Consumo Contaminantes',
            data: [store.nacional.prom_contaminantes.As, store.nacional.prom_contaminantes['As i'], store.nacional.prom_contaminantes.Cd, store.nacional.prom_contaminantes.Hg, store.nacional.prom_contaminantes.Pb],
            backgroundColor: '#FF6384',
        }
    ]
}
const optionsChile = {
    maintainAspectRatio: false,
    scales: {
        y: {
            title: {
                display: true,
                text: 'mg/Kg',
            }
        },
        x: {
            title: {
                display: true,
                text: 'Contaminantes',
            }
        }
    },
    plugins: {
        title: {
            text: `Chile (Nivel Nacional)(${store.nacional.c_personas})`,
            display: true,
        }
    },
    animation: false
}

onMounted(() => {
    for (const region in regiones.value) {
        //console.log(region)
        const regionObject = regiones.value[region]
        chartData.value.push({
            labels: ['As', "As i", "Cd", "Hg", "Pb"],
            datasets: [
                {
                    label: 'Tasa de Riesgo',
                    data: [regionObject.formula.As, regionObject.formula['As i'], regionObject.formula.Cd, regionObject.formula.Hg, regionObject.formula.Pb],
                    backgroundColor: '#FF6384',
                }
            ]
        })
        chartData2.value.push({
            labels: ['As', "As i", "Cd", "Hg", "Pb"],
            datasets: [
                {
                    label: 'Consumo Contaminantes',
                    data: [regionObject.prom_contaminantes.As, regionObject.prom_contaminantes['As i'], regionObject.prom_contaminantes.Cd, regionObject.prom_contaminantes.Hg, regionObject.prom_contaminantes.Pb],
                    backgroundColor: '#FF6384',
                }
            ]
        })
        chartOptions.push({
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'mg/Kg',
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Contaminantes',
                    }
                }
            },
            plugins: {
                title: {
                    text: `${region}º region (${regionObject.c_personas})`,
                    display: true,
                }
            },

            animation: false
        })
    }
})

</script>
  