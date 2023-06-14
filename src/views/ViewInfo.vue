<template>
  <!-- Título -->
  <v-container fluid class="pb-0 mb-10">
    <v-row align="center" justify="center" class="h-100">
      <h1 class="text-deep-orange-darken-1">Los contaminantes en alimentos</h1>
    </v-row>
  </v-container>

  <!-- Carousel -->
  <v-container fluid>
    <v-row class="mt-10"> <!--Container-->
      <v-carousel height="750" hide-delimiter-background >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet color="blue-grey-lighten-5" height="100%">
            <v-row> <!-- Agregada la clase "align-center" -->
              <v-col class="align-center" justify="center">
                <h2 class="text-left pl-16 mt-16 text-black"><strong>{{ slide.title1 }}</strong></h2>
                <p class="pl-16 text-justify text-black">{{ slide.paragraph1 }}</p>
                <h2 class="text-left pl-16 mt-16 text-black">
                  <strong v-html="highlightText(slide.title2)"></strong>
                </h2>
                <p class="pl-16 text-justify text-black">{{ slide.paragraph2 }}</p>
              </v-col>
              <v-col class="align-center" justify="center">
                <v-img src="@/assets/First.png" class="w-50 mx-auto"></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title1: 'No todo lo que comes hace bien.',
          paragraph1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          title2: 'Tranquilízate, no todo es malo.',
          paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title1: '¿Qué contaminantes existen?',
          paragraph1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          title2: '¿En qué alimentos se pueden encontrar?',
          paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          title1: '¿Qué debería comer?',
          paragraph1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          title2: '',
          paragraph2: '',
        },
      ],
    }
  },
  methods: {
    highlightText(text) {
      return text.replace('Tranquilízate', '<span class="text-deep-orange-darken-1">Tranquilízate</span>');
    },
  },
}
</script>
