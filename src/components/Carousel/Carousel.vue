<template>
    <el-carousel :interval="4000" indicator-position="outside">
        <el-carousel-item v-for="item in items" :key="item">
            <div class='img-box'>
                <img :src="item" alt="">
            </div>
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    export default {
        data: function () {
            return {
                items: [
                    require('@/assets/images/01.jpg'),
                    require('@/assets/images/02.jpg'),
                    require('@/assets/images/03.jpg'),
                ]
            }
        },
        mounted: function () {
            this.initData();
        },
        methods: {
            initData: () => {
                // Axios.get('').then(res => {
                //     console.log(res);
                // }).catch(err => {
                //     console.log(err);
                // })
            }
        }
    }
</script>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .img-box {
        height: 100%;
    }

    .img-box img {
        width: 100%;
        height: 100%;
    }
</style>