<template>
    <v-container class="h-100">
        <v-row justify="center" align-content="center" class="h-50">
            <v-col class="text-center">
                <v-progress-circular indeterminate size="100" width="8"></v-progress-circular>
            </v-col>
        </v-row>
        <v-row align-content="center" class="h-25" v-if="$route.name === 'Filtros'">
            <v-col>
                <h4 class="text-h4 text-center">Estamos Calculando la Informacion Pedida</h4>
            </v-col>
        </v-row>
    </v-container>
</template>