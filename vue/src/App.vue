<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ContactView from './views/ContactView.vue';

</script>

<template>

  <div class="wrapper">
        <header class="header">

            <img src="/img/logo.svg" alt="logo" >

            <ul class="spisski">
                <li class="spisski-li">О нас</li>
                <li class="spisski-li">Услуги</li>
                <li class="spisski-li">Как купить</li>
                <li class="spisski-li">Преимущества</li>
                <li class="spisski-li">Отзывы</li>
                <li class="spisski-li">Контакты</li>
            </ul>

            <div class="namber-social-icon">
                <div class="social-icon">
                    <img class="social-icon-img" src="/icons/telegram.svg" alt="telegram">
                    <img class="social-icon-img" src="/icons/WatsApp.svg" alt="WatsApp">
                    <img class="social-icon-img" src="/icons/YouTube.svg" alt="YouTube">
                </div>
                <div class="namber ">
                    <p>+7 (8352) 67-52-52</p>
                    <p style="margin-top: 4px;">+7 (927) 997-12-42</p>
                </div>            
            </div>
            
        </header>
    </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
