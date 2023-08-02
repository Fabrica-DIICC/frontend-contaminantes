<template>
  <v-table height="550px" fixed-header>
    <thead>
      <tr>
        <th class="text-left" v-for="title in index" :key="title">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in store.datosConsumo" :key="item">
        <td>{{ item.region }}</td>
        <td>{{ item.edad }}</td>
        <td>{{ item.sexo }}</td>
        <td>{{ item.altura }}</td>
        <td>{{ item.peso }}</td>
        <td>{{ item.ns }}</td>
        <td>{{ item.alimento }}</td>
        <td>{{ item['cantidad consumida'] }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useAppStore, } from '@/store/app';

const store = useAppStore()
console.log(store.result)



const index = ['Región', 'Edad', 'Sexo', 'Altura (cm)', 'Peso (Kg)', 'Nivel Socieconomico', 'Alimento', 'Cantidad Consumida (gr)']



</script>