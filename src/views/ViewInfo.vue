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
      <v-carousel height="750" hide-delimiter-background>
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
                <v-img src="@/assets/img-frutas.jpg" class="w-50 mx-auto"></v-img>
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
          title1: 'Alimentos seguros para la salud .',
          paragraph1: 'Los alimentos seguros son indispensables para mantener una buena salud, por lo que garantizar la inocuidad alimentaria a lo largo de toda la cadena de producción hasta llegar a la mesa del consumidor es crucial. La inocuidad alimentaria es la garantía de que un alimento no causará daño al consumidor cuando el mismo sea preparado o ingerido de acuerdo con el uso al que se destine. Los alimentos pueden contener agentes biológicos (bacterias, virus, parásitos), químicos (metales pesados, residuos de plaguicidas, entre otros) o físicos que podrían acarrear riesgos sustanciales para la salud de los consumidores representando grandes cargas económicas para los países. ',
          title2: 'Sistemas de Control de Alimentos',
          paragraph2: 'Los sistemas de control de alimentos son la piedra angular para asegurar un suministro de alimentos de alta calidad, inocuos y nutritivos, necesarios para la buena salud de la población como para alcanzar las ventajas económicas derivadas del comercio de alimentos inocuos y de alta calidad. En este sentido, para velar por la inocuidad de los alimentos los países han desarrollado sistemas de control de monitoreo de alimentos para pesquizar los posibles peligros que pueden estar presentes.',
        },
        {
          title1: 'Peligros, exposición y riesgo ',
          paragraph1: 'Los alimentos pueden contener diferentes peligros, estos pueden ser de tipo biológico, químico o físico pero su sola presencia no es indicador de riesgo para la población. Esto quiere decir que podemos estar expuestos a peligros (la mayoría de las veces), pero estos peligros no desencadenarán enfermedades, ya que el efecto nocivo depende de la cantidad ingerida, la toxicidad o patogenicidad de los agentes involucrados y las características de la población expuesta. Por lo tanto el peligro es el agente nocivo en el alimento, la exposición es la concentración (cantidad ingerida) y el riesgo es la probabilidad que este agente desencadene un efecto adverso en el individuo.',
          title2: 'Normativas Alimentarias',
          paragraph2: 'Para resguardar la seguridad de la población, se han creado normativas alimentarias las cuales regulan la presencia de los peligros en los alimentos. Se proponen dosis de referencia, límites máximos permitidos o tolerables estimados con la más actual información científica disponible la cual relaciona la cantidad ingerida con la aparición de efectos adversos.',
        },
        {
          title1: '¿Estoy en riesgo a causa de comer alimentos contaminados? ',
          paragraph1: 'Para resolver esta pregunta, los científicos realizan una evaluación de exposición dietaria donde se estima la dosis de ingesta a través de los alimentos para posterior estimar el riesgo. La exposición dietaria requiere datos de consumo de alimentos y antropométricos de la población en estudio (como el peso) y concentraciones del contaminante en los alimentos. Una vez estimada la exposición (dosis de ingesta del agente) esta se compara con las dosis de referencia toxicológica del compuesto en estudio, si esta traspasa la dosis de referencia podemos decir que es altamente probable que se presenten efectos adversos producto del consumo de ciertos alimentos. ',
          title2: 'Calculadoras de Exposición ',
          paragraph2: 'Los cálculos que conlleva determinar la exposición y riesgo de una población consume mucho tiempo devido a la gran cantidad de datos que deben manejarse, por lo que las calculadoras de exposición son herramientas útiles para saber si una determinada población está en riesgo por el consumo de alimentos contaminados con algún tipo de peligro. Estas calculadoras reducen el tiempo de cálculo y entregan inmediantamente el resultado de una manera comprensible para el consumidor como para las instituciones que trabajan en asustos regulatorios.  ',
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

