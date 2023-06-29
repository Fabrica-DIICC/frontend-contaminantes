<template>
    <v-container>
        <v-row>
            <h5 class="text-h5">Graficas de Peligro</h5>
        </v-row>
        <v-row>
            <BarChart></BarChart>
        </v-row>
        <v-row>
            <v-col>
                <h5 class="text-h5">Datos de Consumo (100 primeros)</h5>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn variant="outlined" color="primary" rounded="" @click="downloadFile">Exportar Datos</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <DataTable></DataTable>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { useAppStore } from '@/store/app';
import BarChart from '../BarChart'
import DataTable from '../DataTable.vue';
const store = useAppStore()

function downloadFile() {
    window.open(store.fileOnApiUrl, '_blank', 'noreferrer');
}
console.log(import.meta.env.VITE_API_URL)
</script>