<script setup></script>

<template>
    <!-- Logout Button -->
    <div class="flex justify-center">
        <RouterLink :to="{ name: 'logout' }">
            <button class="bg-dark_blue text-white px-6 py-2 rounded-lg">Logout</button>
        </RouterLink>
    </div>
</template>

<style scoped></style>
