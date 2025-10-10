<template>
    <div class="wrapper-header">

        <header class="header" >
            <a href="/">
                <img :src="LogoIcon" alt="logo" >
            </a>       

            <ul class="spisski">
                <li class="spisski-li"><a href="about"> О нас</a></li>
                <li class="spisski-li"><a href="contact"> Контакты</a></li>
            </ul>

            <div class="namber-social-icon">
                <div class="social-icon">
                    <img class="social-icon-img" :src="telegrameIcon" alt="telegram">
                    <img class="social-icon-img" :src="watsappIcon" alt="WhatsApp">
                    <img class="social-icon-img" :src="YouTubeIcon" alt="YouTube">
                </div>
                <div v-if="hidePhone" class="number">
                    <p style="color: rgb(236, 236, 236);">+7 (8352) 67-52-52</p>
                    <p style="color: rgb(236, 236, 236); margin-top: 4px;">+7 (927) 997-12-42</p>
                </div>
            </div>
        </header>


    </div>
</template>

<script setup>

import telegrameIcon from './icons/telegram.svg';
import watsappIcon from './icons/WatsApp.svg';
import YouTubeIcon from './icons/YouTube.svg';
import LogoIcon from './icons/logo.svg';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const hidePhone = computed(() => route.meta.hidePhone || false);
const hideInfoAbout = computed(() => route.meta.hideInfoAbout || false);



</script>

<style>

.text-about-us {
    color: white;
    font-size: 20px;
    margin-top: 30px;
}

body {
    overflow-x: hidden;
    font-family:"Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    background: linear-gradient(90deg,rgba(42, 123, 155, 1) 7%, rgba(69, 125, 102, 1) 57%);

}

ul, li, ol {
    list-style: none;
}

a {
    text-decoration: none;
}

h1 {
    font-size: 52px; 
    font-weight: 600;
}

.wrapper-header {
    margin: 250px 250px 0 250px;
    background-color: rgba(0, 0, 0, 0.671);
    border-radius: 10px;    
    padding: 30px 40px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);;
}

.header {
    display: flex;
    justify-content: space-between;

    align-items: center;
    align-self: center;

}

.wrapper {
    width: 1400px;
    margin: 0 auto;
}

.spisski {
    display: flex;
    justify-content: center;

}

.spisski-li {
    margin: 0 20px;
    font-size: 30px;
    color: rgb(236, 236, 236);
}

.namber-social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.namber-social-icon-margin {
    margin: 0 9px;
}

.social-icon {
    margin: 0 5px;
}

.social-icon-img {
    margin: 0 3px;
}

.social-icon {
    margin-right: 27px ;
}
</style>