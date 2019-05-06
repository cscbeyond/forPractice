<template>
    <div class="item-detial">
        <Header></Header>
        <div class="main">
            <div class="content">
                <div class="top-left">
                    <div class="img-box">
                        <div class="mask">
                            <span class="play"><i class="el-icon-d-arrow-right"></i></span>
                            <div class="btm">
                                <span>
                                    <i class="el-icon-info">
                                    </i> &nbsp&nbsp {{itemDetial.buyCounts}}人加入学习
                                </span>
                            </div>
                        </div>
                        <img :src='itemDetial.imgSrc' alt="">
                    </div>
                </div>
                <div class="top-right">
                    <h1>{{itemDetial.title}}</h1>
                    <p class="des" @mouseover="showTips($event)" @mouseout="hideTips($event)">{{itemDetial.description}}</p>
                    <p class="price">价格：<span class="price-num">￥{{itemDetial.price}}</span></p>
                    <div class="purchase btns">
                        <el-button @click="purchase(itemDetial.id)" type="primary">购买</el-button>
                    </div>
                </div>
            </div>
            <div class="blk-1"></div>
            <div class="blk-1"></div>
            <div class="blk-1"></div>
            <div class="blk-1"></div>
            <div class="blk-1"></div>
            <div class="blk-1"></div>
        </div>
        <Tips :text='itemDetial.description' ref="tips"></Tips>
        <LoginModal ref="loginModal"></LoginModal>
        <Footer></Footer>
    </div>
</template>
<script>
    import Footer from 'components/Footer/Footer';
    import Header from 'components/Header';
    import Tips from '../../utils/Tips/Tips.vue';
    import LoginModal from 'components/LoginModal/LoginModal.vue';
    export default {
        components: {
            Header,
            Footer,
            Tips,
            LoginModal
        },
        mounted: function () {
            this.getParams();
        },
        data: function () {
            return {
                itemId: 0,
                itemDetial: {},
            }
        },
        watch: {
            itemId: function () {
                this.getItem();
            }
        },
        methods: {
            purchase: function (id) {
                let ifOnLine = localStorage.getItem('onLine');
                if (ifOnLine == 'true' || ifOnLine == true) {
                    this.$router.push({
                        name: 'confirmOrder',
                        query: {
                            item: this.itemDetial,
                        }
                    })
                    console.log('可以购买');
                } else {
                    this.$refs.loginModal.show();
                    console.log('登录框');
                }
            },
            //取传过来的id
            getParams: function () {
                this.itemId = this.$route.query.id;
            },
            //根据id取商品
            getItem: function () {
                Axios.post('/item/getItemDetial.api', {
                    id: this.itemId
                }).then(res => {
                    if (res.data.code == 0) {
                        this.itemDetial = res.data.val;
                        this.itemDetial.price = this.itemDetial.price.toFixed(2);
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            showTips: function (e) {
                console.log(e);
                this.$refs.tips.show(e);
            },
            hideTips: function (e) {
                this.$refs.tips.hide(e);
            },
        }
    }
</script>

<style lang="less">
    .item-detial {
        text-align: left;
        background: #f5f5f5;

        .blk-1 {
            height: 10px;
        }

        p {
            text-align: left;
        }

        .main {
            width: 80%;
            margin: 0 auto;

            .content {
                margin-top: 50px;
                background-color: #fff;
                padding: 20px;
                overflow: hidden;

                .top-left {
                    float: left;

                    .img-box {
                        position: relative;
                        width: 400px;

                        .mask {
                            width: 100%;
                            position: absolute;
                            z-index: 1;
                            background-color: rgba(0, 0, 0, .5);
                            height: 100%;
                            transition: all .3s ease;

                            &:hover {
                                transition: all .3s ease;
                                background-color: rgba(0, 0, 0, .2);
                            }

                            .btm {
                                padding: 10px 20px;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                color: #f5f5f5;

                            }

                            .play {
                                font-size: 30px;
                                color: #fff;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translateX(-50%) translateY(-50%);
                            }
                        }

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .top-right {
                    padding-left: 410px;

                    .purchase {
                        margin-top: 10px;
                    }

                    .price {
                        .price-num {
                            font-size: 22px;
                            color: red;
                        }
                    }

                    h1 {
                        text-align: left;
                        font-size: 18px;
                        font-weight: 400;
                        margin-bottom: 10px;
                    }

                    .des {
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-bottom: 10px;

                    }
                }
            }
        }
    }
</style>