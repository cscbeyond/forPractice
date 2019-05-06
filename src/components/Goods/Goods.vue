<template>
    <div class="goods">
        <div class="content">
            <div class="pad-5">
                <div class="img-box">
                    <img :src="item.imgSrc" alt="webpack基础教程">
                </div>
                <p class="title">{{item.title}}</p>
                <p class="decstiption">
                    <span>购买人数：{{item.buyCounts}}</span>
                    <span>评论数：{{item.commentcounts}}</span>
                    <span class="price">{{item.price}}元</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                required: true,
                default: [],
                type: Object
            }
        },
    }
</script>
<style lang="less">
    .goods {
        width: 20%;
        transition: all .3s ease;
        display: inline-block;

        .content {
            padding: 5px;

            .pad-5 {
                padding: 10px;
                border: 1px solid #ccc;
                &:hover {
                    box-shadow: 6px 4px 10px -2px #000;
                    transition: all .3s ease;
                }

                .img-box {
                    cursor: pointer;
                    min-width: 100%;
                    height: auto;
                    margin-bottom: 15px;

                    img {
                        border: 1px dashed #000;
                        min-width: 100%;
                        height: auto;
                    }
                }

                .title {
                    cursor: pointer;
                    font-size: 14px;
                    color: #000;
                    color: #616161;
                    margin-bottom: 10px;
                    text-align: left;

                    &:hover {
                        color: #43bc60;
                        ;
                    }
                }

                .decstiption {
                    text-align: left;
                    cursor: pointer;
                    color: #c1c1c1;

                    .price {
                        float: right;
                        color: red;
                    }
                }
            }
        }
    }
</style>