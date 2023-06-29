<template>
    <v-table height="300px" fixed-header>
      <thead>
        <tr>
          <th class="text-left">
            Edad
          </th>
          <th class="text-left">
            Sexo
          </th>
          <th class="text-left">
            Altura
          </th>
          <th class="text-left">
            Peso
          </th>
          <th class="text-left">
            Nivel Socioeconomico
          </th>
          <th class="text-left">
            Alimento consumido
          </th>
          <th class="text-left">
            Cantidad consumida
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datos">
          <td>{{ item.Edad }}</td>
          <td>{{ item.Sexo}}</td>
          <td>{{ item.Altura }}</td>
          <td>{{ item.Peso }}</td>
          <td>{{ item.Nivel }}</td>
          <td>{{ item.Alimento }}</td>
          <td>{{ item.Cantidad }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>

<script>
export default {
  data () {
    return {
      datos: [
        {
          Edad: 87,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 98,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 67,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 69,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 72,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 86,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 65,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
        {
          Edad: 91,
          Sexo: 'algo',
          Altura: 234,
          Peso: 45,
          Nivel: 'Medio',
          Alimento: 'Papas',
          Cantidad: 123,
        },
      ],
    }
  },
}
</script>