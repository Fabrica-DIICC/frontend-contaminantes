<template>
    <v-app>
      <v-main>
        <v-container fluid>
          <!-- Encabezado -->
          <v-layout align-center justify-center style="position: relative; height: 202px; background-color: #E0F2F1;">
            <img src="@/assets/Logo.svg" alt="Logo" style="position: absolute; top: 40px; left: 40px; width: 100px; height: 122px;" />
          </v-layout>
  
          <!-- Contenido principal de la página -->
          <v-layout align-center justify-center>
            <v-layout column>
              <v-flex>
                <h2 class="column-title">Toxicidad de alimentos</h2>
              </v-flex>
              <v-flex>
                <p>Conocer la toxicidad que contienen los alimentos que consumes puede resultar en una práctica positiva.</p>
              </v-flex>
            </v-layout>
          </v-layout>
  
          <!-- Pie de página -->
          <v-footer color="#FF724A" app style="width: 100%; height: 162px; background-color: #FF724A; flex: none; order: 1; align-self: stretch; flex-grow: 0;">
            <v-container fluid>
              <v-layout align-center justify-center>
                <img src="@/assets/figuras.png" alt="Figuras" style="width: 100%; height: 162px;" />
              </v-layout>
            </v-container>
          </v-footer>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style>
  .column-title {
    font-weight: bold;
    text-align: center;
  }
  
  </style>
  