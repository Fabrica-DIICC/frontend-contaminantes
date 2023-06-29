<template>
    <div class="carousel-container">
        <div id="chart-container">
            <Bar :id="`chart-${currentChartIndex}`" :options="chartOptions" :data="chartData[currentChartIndex]" />
        </div>

        <button @click="previousChart">Anterior</button>
        <button @click="nextChart">Siguiente</button>
    </div>
</template>
  
<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'ChartCarousel',
    components: { Bar },
    data() {
        return {
            chartData: [
                {
                    labels: ['Mercurio', 'Arsenico', 'Cadmio'],
                    datasets: [
                        {
                            data: [0.05, 0.02, 0.03],
                            backgroundColor: '#FF6384',
                            borderColor: '#FF6384',
                            borderWidth: 1
                        }
                    ]
                },
                {
                    labels: ['Mercurio', 'Arsenico', 'Cadmio'],
                    datasets: [
                        {
                            data: [0.01, 0.04, 0.02],
                            backgroundColor: '#36A2EB',
                            borderColor: '#36A2EB',
                            borderWidth: 1
                        }
                    ]
                },
                {
                    labels: ['Mercurio', 'Arsenico', 'Cadmio'],
                    datasets: [
                        {
                            data: [0.05, 0.04, 0.02],
                            backgroundColor: '#FFCE56',
                            borderColor: '#FFCE56',
                            borderWidth: 1
                        }
                    ]
                },
                {
                    labels: ['Mercurio', 'Arsenico', 'Cadmio'],
                    datasets: [
                        {
                            data: [0.03, 0.06, 0.01],
                            backgroundColor: '#4BC0C0',
                            borderColor: '#4BC0C0',
                            borderWidth: 1
                        }
                    ]
                },
                {
                    labels: ['Mercurio', 'Arsenico', 'Cadmio'],
                    datasets: [
                        {
                            data: [0.02, 0.05, 0.04],
                            backgroundColor: '#E7E9ED',
                            borderColor: '#E7E9ED',
                            borderWidth: 1
                        }
                    ]
                }
            ],
            chartOptions: {
                responsive: true,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'mg/Kg',
                            font: {
                                size: 18,
                                family: 'Arial'
                            },
                            color: '#666'
                        }
                    }
                },
                plugins: {
                    title: {
                        text: 'salmón',
                        display: true,
                        font: {
                            size: 24,
                            family: 'Arial'
                        },
                        color: '#333'
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutBounce'
                }
            },
            currentChartIndex: 0,
            foodNames: ['salmón', 'atún', 'sardina', 'mejillón', 'ostra'],
            colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E7E9ED']
        };
    },
    mounted() {
        this.updateChartTitle();
        this.updateChartColor();
    },
    methods: {
        previousChart() {
            this.currentChartIndex =
                (this.currentChartIndex - 1 + this.chartData.length) % this.chartData.length;
        },
        nextChart() {
            this.currentChartIndex = (this.currentChartIndex + 1) % this.chartData.length;
        },
        updateChartTitle() {
            const foodName = this.foodNames[this.currentChartIndex];
            const chartTitle = `${foodName}`;
            this.chartOptions.plugins.title.text = chartTitle;
        },
        updateChartColor() {
            const color = this.colors[this.currentChartIndex];
            this.chartData[this.currentChartIndex].datasets[0].backgroundColor = color;
            this.chartData[this.currentChartIndex].datasets[0].borderColor = color;
        }
    },
    watch: {
        currentChartIndex() {
            this.updateChartTitle();
            this.updateChartColor();
        }
    }
};
</script>
  
<style scoped>
.carousel-container {
    width: 800px;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
}

#chart-container {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
}

.carousel-container button {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
}

/* button hover */
.carousel-container button:hover {
    background: #FF5722;
    color: #fff;
    border-color: #FF5722;
}
</style>
