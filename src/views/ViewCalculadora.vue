<script setup>
import ResultPlace from '@/components/caluladora/ResultPlace.vue';
import AsyncSelect from '@/components/caluladora/AsyncSelect.vue';
// import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';
const result = ref('bad')

// const asyncSelect = defineAsyncComponent(() => import('@/components/caluladora/AsyncSelect.vue'))
</script> 
<template>
    <v-container class="text-center mt-4">
        <h4 class="text-h4">{{ $route.name }}</h4>
    </v-container>

    <v-form>
        <v-container>
            <v-row>
                <v-col class="mx-10">
                    <v-row justify="start">
                        <v-col cols="1">
                            <v-avatar color="deep-orange">1</v-avatar>
                        </v-col>
                        <v-col class="my-auto">
                            <h6 class="text-h6">Peso</h6>
                        </v-col>
                    </v-row>
                    <!-- input -->
                    <v-row class="w-75">
                        <v-text-field density="comfortable" prefix="kg" type="number" persistent-placeholder></v-text-field>
                    </v-row>
                    <v-row justify="start">
                        <v-col cols="1">
                            <v-avatar color="deep-orange">2</v-avatar>
                        </v-col>
                        <v-col class="my-auto">
                            <h6 class="text-h6">Alimento</h6>
                        </v-col>
                    </v-row>
                    <!-- select -->
                    <v-row class="w-75">
                        <Suspense>
                            <async-select></async-select>
                            <template #fallback>
                                loading ..
                            </template>
                        </Suspense>
                    </v-row>
                    <v-row justify="start">
                        <v-col cols="1">
                            <v-avatar color="deep-orange">3</v-avatar>
                        </v-col>
                        <v-col class="my-auto">
                            <h6 class="text-h6">Cantidad Consumida</h6>
                        </v-col>
                    </v-row>
                    <!-- input -->
                    <v-row class="w-75">
                        <v-text-field density="comfortable" prefix="g/dia" type="number"
                            persistent-placeholder=""></v-text-field>
                    </v-row>
                </v-col>
                <v-col>
                    <ResultPlace :result="result"></ResultPlace>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
