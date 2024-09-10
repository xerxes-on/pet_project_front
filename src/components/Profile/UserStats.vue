<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Hours read',
            backgroundColor: '#f87979',
            data: [2, 3, 1, 0, 2, 3, 1],
        },
    ],
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    barThickness: 30,
    hoverBackgroundColor: '#000000',
    scales: {
        y: {
            beginAtZero: true,
            max: 5,
            label: 'hours',
        },
    },
}
</script>

<template>
    <!-- Statistics Section -->
    <section class="bg-orange p-6 rounded-lg shadow-md mb-6 w-full">
        <h2 class="text-xl font-bold mb-4">This Week's Statistics</h2>
        <div class="flex justify-between items-center">
            <!-- Weekly Reading Stats -->
            <Bar :data="data" :options="options" style="width: 70%" />
        </div>
    </section>
</template>

<style scoped></style>
