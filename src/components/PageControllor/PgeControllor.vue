<template>
    <div class="page-controllor-wrap">
        <button class="prev" @click="prevPage">上一页</button>
            {{curPage}} / {{totalPage}}
        <button class="next" @click="nextPage">下一页</button>
        <select v-model="limit">
            <option :value="10">10</option>
            <option :value="20">20</option>
            <option :value="30">30</option>
            <option :value="40">40</option>
            <option :value="50">50</option>
        </select>
        <span>共{{PageControllor.totalCount}}条</span>
        <!-- 到第<input v-model="targetPage" class="target-page" type="number">页
        <button class="confirm" @click="jumpPage">确定</button> -->
    </div>
</template>
<script>
    export default {
        props: {
            PageControllor: {
                type: Object,
                default: {
                    totalCount: 0,
                    limit: 10,
                }
            },
        },
        data() {
            return {
                targetPage: null,
                limit: 10,
                curPage: 1,
            }
        },
        mounted() {
            this.limit = this.PageControllor.limit;
            this.curPage = this.PageControllor.curPage;
        },
        watch: {
            limit: {
                handler(nv, ov) {
                    this.curPage = 1;
                    this.$emit('changeLimit', nv);
                },
                immediate: true,
                deep: true
            },
        },
        methods: {
            prevPage() {
                if (this.curPage >= 2) {
                    this.curPage -= 1;
                    this.$emit('prevPage', this.curPage);
                } else {
                    return;
                }
            },
            nextPage() {
                // debugger
                if (this.curPage >= this.totalPage) {
                    return;
                } else {
                    this.curPage = this.curPage + 1;
                    this.$emit('nextPage', this.curPage);
                }
            },
            jumpPage() {
                if (Number(this.targetPage)) {
                    if (this.totalPage >= this.targetPage) {
                        this.$emit('jumpPage', Number(this.targetPage));
                    } else {
                        console.log('超出总页数');
                        return;
                    }
                    this.targetPage = null;
                } else {
                    console.log('请输入页数');
                }
            },
        },
        computed: {
            totalPage() {
                let computedTotalPage = Math.ceil(this.PageControllor.totalCount / this.limit)
                return computedTotalPage;
            }
        }
    }
</script>

<style lang="less" scoped>
    .page-controllor-wrap {
        padding: 10px;

        .prev,
        .next,
        .confirm {
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
            padding: 5px 10px;
            margin: 0 5px;

            &:hover {
                background-color: #e5e5e5;
            }

            &:active {
                background-color: lightblue;
            }
        }

        span,
        input,
            {
            margin: 0 10px;
            text-align: center;
            padding: 5px;
        }

        select {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 4px 10px;
        }

        input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none !important;
            margin: 0;
        }

        .target-page {
            width: 40px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 4px 7px;
        }
    }
</style>