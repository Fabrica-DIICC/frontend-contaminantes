<template>
    <!--Titulo.-->
    <v-container fluid class="pb-0 mb-10" >
       <v-row align="center" justify="center" class="h-100">
        <h1 class="text-deep-orange-darken-1">Los contaminantes en alimentos</h1>
       </v-row>
    </v-container>
    <!--Carousel-->
    <v-container fluid class="">
        <v-row class="mt-10">
            <v-carousel height="750" hide-delimiter-background>
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet :color="colors[i]" height="100%">
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="text-h2">
                                {{ slide }} Slide
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'blue-grey-lighten-5',
          'blue-grey-lighten-5',
          'blue-grey-lighten-5',
          'blue-grey-lighten-5',
          'blue-grey-lighten-5',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

