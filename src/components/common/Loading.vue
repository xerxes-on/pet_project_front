<script setup></script>

<template>
    <div class="loader"></div>
</template>

<style scoped>
.loader {
    background-color: #a4c0ed;
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
    position: relative;
    border-radius: 10px 0 10px 0;
}
.loader:before,
.loader:after {
    content: '';
    position: absolute;
    border-radius: 50px;
    box-shadow: 0 0 0 3px inset #fff;
    animation: l5 2.5s infinite;
}
.loader:after {
    animation-delay: -1.25s;
    border-radius: 0;
}
@keyframes l5 {
    0% {
        inset: 0 35px 35px 0;
    }
    12.5% {
        inset: 0 35px 0 0;
    }
    25% {
        inset: 35px 35px 0 0;
    }
    37.5% {
        inset: 35px 0 0 0;
    }
    50% {
        inset: 35px 0 0 35px;
    }
    62.5% {
        inset: 0 0 0 35px;
    }
    75% {
        inset: 0 0 35px 35px;
    }
    87.5% {
        inset: 0 0 35px 0;
    }
    100% {
        inset: 0 35px 35px 0;
    }
}
</style>
