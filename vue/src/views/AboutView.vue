<script setup>
import MainLoyout from '../layouts/MainLoyout.vue';

</script>

<template>
    
    <MainLoyout>
        
        <h1>Добро пожаловать на главную!</h1>
        <p>Это содержимое конкретной страницы</p>
        <div class="custom-content">
            Ваш уникальный контент для этой страницы
        </div>
        <router-view />
    </MainLoyout>

</template>

<style>

</style>
