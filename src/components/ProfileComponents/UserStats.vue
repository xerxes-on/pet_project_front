<script setup>
import { Bar } from 'vue-chartjs'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
    ],
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
}
</script>

<template>
    <!-- Statistics Section -->
    <section class="bg-orange p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-bold mb-4">This Week's Statistics</h2>
        <div class="flex justify-between items-center">
            <!-- Weekly Reading Stats -->
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

            <!-- Premium Membership Section -->
            <div class="p-4 bg-yellow-100 rounded-lg text-center">
                <img src="https://source.unsplash.com/featured/?reading" alt="Premium" class="w-24 h-24 mx-auto mb-4" />
                <h3 class="font-bold">Go Premium</h3>
                <p class="text-gray-600">Explore 25k+ books with a lifetime membership.</p>
                <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Upgrade</button>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
