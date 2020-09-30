<template>
<div id="nav">
    <div class="container">
        <carousel :autoplay="true" :duration='5000' :initial="0" :hasDot="true" :hasDirector="true" dotBgcolor="ff00">
            <car-item v-for="(item,index) of carData" :key="index">
                <img :src="require(`./assets/imgs/${item.img_name}`)">
            </car-item>
        </carousel>
    </div>
</div>
<router-view />
</template>

<script>
import carData from "@/data/carousel";
export default {
    name: "App",
    setup() {
        return {
            carData
        }
    }
}
</script>

<style lang="scss">
.container {
    width: 600px;
    height: 400px;
    margin: 150px auto;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
