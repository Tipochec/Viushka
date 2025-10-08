<template>
    <div class="wrapper">
        <HeaderComponents />
    </div>

    <FooterComponents />
</template>

<script setup>

import FooterComponents from '@/components/FooterComponents.vue';
import HeaderComponents from '@/components/HeaderComponents.vue';

</script>

<style>


.wrapper {
    width: 1400px;
    margin: 0 auto;
}
</style>