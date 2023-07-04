<template>
    <v-container>
        <v-row>
            <h6 class="text-h6">Graficas de Peligro</h6>
        </v-row>
        <v-row>
            <BarChart></BarChart>
        </v-row>
        <v-row>
            <v-col>
                <h6 class="text-h6">Datos de Consumo (100)</h6>
            </v-col>
            <v-col align="end">
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