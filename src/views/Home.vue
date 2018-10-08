<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <Carousel></Carousel>
        <Tag></Tag>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Tag from '@/components/Tag/Tag.vue'
export default {
    name: 'home',
    components: {
        // HelloWorld,
        Carousel,
        Tag
    }
}
</script>
