<template>
    <div class="wrapper">
        <header class="header">

            <img :src="LogoIcon" alt="logo" >

            <ul class="spisski">
                <AboutView to="">О нас</AboutView>
                <li class="spisski-li">Контакты</li>
            </ul>

            <div class="namber-social-icon">
                <div class="social-icon">
                    <img class="social-icon-img" :src="telegrameIcon" alt="telegram">
                    <img class="social-icon-img" :src="watsappIcon" alt="WhatsApp">
                    <img class="social-icon-img" :src="YouTubeIcon" alt="YouTube">
                </div>
                <div class="namber ">
                    <p style="color: rgb(236, 236, 236);">+7 (8352) 67-52-52</p>
                    <p style="color: rgb(236, 236, 236); margin-top: 4px;">+7 (927) 997-12-42</p>
                </div>            
            </div>
            
        </header>
    </div>
</template>

<script setup>

</script>

<style>

    body {
    overflow-x: hidden;
    font-family:"Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;

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

.header {
    display: flex;
    justify-content: space-between;
    padding: 30px 40px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);;
    align-items: center;
    align-self: center;
    margin: 250px 250px 0 250px;
    background-color: rgb(47, 138, 112, 0.3);
    border-radius: 10px;
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