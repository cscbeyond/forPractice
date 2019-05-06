<template>
    <div class="body">
        <Header></Header>
        <section>
            <div class="content">
                <div class="step">
                    <el-steps :active="step" align-center>
                        <el-step title="订单确认" description="1"></el-step>
                        <el-step title="订单支付" description="2"></el-step>
                        <el-step title="订单完成" description="3"></el-step>
                    </el-steps>
                </div>
                <div class="item-abstract">
                    <div class="img-box">
                        <img :src="item.imgSrc" alt="">
                    </div>
                    <div class="des">
                        <p class="title">{{item.title}}</p>
                        <span class="price">￥{{item.price}}</span>
                    </div>
                </div>
            </div>
            <div>
                <button @click="pay()" class="submit-order">
                    提交订单
                </button>
            </div>
        </section>
    </div>
</template>
<script>
    import Header from 'components/Header.vue'
    export default {
        components: {
            Header,
        },
        data: function () {
            return {
                active: 0,
                item: null,
                step: 1,
            }
        },
        created: function () {
            this.getParams();
        },
        methods: {
            pay: function () {

            },
            getParams: function () {
                this.item = this.$route.query.item;
            }
        }
    }
</script>

<style lang="less">
    .body {
        background-color: #f1f1f1;

        section {
            padding: 20px 30px;
            margin: 20px auto;
            width: 60%;
            background-color: #fff;

            .content {
                .item-abstract {
                    background-color: #f1f1f1;
                    overflow: hidden;

                    .img-box {
                        float: left;
                        width: 200px;

                        img {
                            width: 100%;
                        }
                    }

                    .des {
                        overflow: hidden;
                        margin-top: 15px;

                        .title {
                            font-size: 16px;
                            color: rgba(0, 0, 0, 0.88);
                            text-align: left;
                            padding-left: 20px;
                            margin-bottom: 10px;
                        }

                        .price {
                            text-align: left;
                            font-size: 14px;
                            color: red;
                            display: block;
                            padding-left: 20px;
                        }
                    }
                }
            }

            .submit-order {
                color: #fff;
                background-color: #43bc60;
                padding: 10px 15px;
                border: none;

                &:hover {
                    transition: all .3s ease;
                    box-shadow: 0 6px 6px 0 rgba(67, 188, 96, .3);
                }
            }
        }
    }
</style>