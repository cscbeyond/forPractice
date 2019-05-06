<template>
    <div class="index-page">
        <Header></Header>
        <Carousel></Carousel>
        <section>
            <MyFilter
                @getItemType='selSubjectType'
                :mySelectList='mySelectList'
                ref="myfilyer"
            />
            <div class="pageation">
                <page-controllor
                    :PageControllor='PageControllor'
                    @prevPage='prevPage'
                    @nextPage='nextPage'
                    @jumpPage='jumpPage'
                    @changeLimit='changeLimit'
                />
                <div class="clearfixed"></div>
            </div>
            <div class="items">
                <Goods
                    @click.native="viewItem(item.id)"
                    v-for="(item,idx) in goodsList"
                    :key="idx" :item="item"
                />
            </div>
        </section>

        <RightFixed></RightFixed>
        <Footer></Footer>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from 'components/Header.vue';
    import Carousel from 'components/Carousel/Carousel.vue';
    import Footer from 'components/Footer/Footer.vue';
    import RightFixed from 'components/Fixed/RightFixed.vue';
    import Goods from 'components/Goods/Goods.vue';
    import MyFilter from 'components/MyFilter/MyFilter.vue';
    import PageControllor from 'components/PageControllor/index.js';
    export default {
        data: function() {
            return {
                PageControllor: {
                    curPage: 1,
                    totalCount: 51,
                    limit: 10,
                },
                goodsList: [],
                mySelectList: [{
                        "name": "全部",
                        "val": 0
                    },
                    {
                        "name": "JavaScript",
                        "val": 1
                    },
                    {
                        "name": "HTML",
                        "val": 2
                    },
                    {
                        "name": "CSS",
                        "val": 3
                    },
                    {
                        "name": "NODE",
                        "val": 4
                    },
                ],
                subjectType: 0,
            }
        },
        components: {
            Header,
            Carousel,
            MyFilter,
            Footer,
            RightFixed,
            Goods,
            PageControllor
        },
        created: function() {
        },
        mounted () {
            // console.log(this.$refs.myfilyer);
        },
        methods: {
            prevPage(curPage) {
                this.PageControllor.curPage = curPage;
                this.getItemList();
            },
            nextPage(curPage) {
                this.PageControllor.curPage = curPage;
                this.getItemList();
            },
            jumpPage(targetPage) {
                this.PageControllor.curPage = targetPage;
                this.getItemList();
            },
            changeLimit(limit) {
                this.PageControllor.limit = limit;
                this.getItemList();
            },
            selSubjectType(e, v, id) {
                this.subjectType = id;
                this.getItemList();
            },
            viewItem(id) {
                this.$router.push({
                    path: '/itemDetial',
                    query: {
                        id: id
                    }
                });
            },
            getItemList: function() {
                var that = this;
                Axios.post('/item/getItem.api', {
                    curPage: this.PageControllor.curPage,
                    limit: this.PageControllor.limit,
                    subjectType: this.subjectType
                }).then(res => {
                    // console.log(res);
                    if (res.data.code == 0) {
                        this.goodsList = res.data.val.data;
                        this.PageControllor.totalCount = res.data.val.count;
                    } else {
                        let errMsg = res.val;
                        // this.errTips(errMsg);
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
    }
</script>

<style lang="less">
    .index-page {
        .clearfixed {
            clear: both;
        }

        margin-bottom: 70px;

        section {
            .items {
                text-align: left;
                padding: 10px 100px;
            }
        }
    }
</style>