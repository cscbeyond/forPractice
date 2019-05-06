<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#fff" text-color="#616161" active-text-color="#ffd04b" style="height: 60px;line-height: 60px;">
            <el-menu-item index="1">课程</el-menu-item>
            <el-menu-item index="3">阅读</el-menu-item>
            <el-menu-item index="4">
                <a href="javascript:void(0);" target="_blank">学习小组</a>
            </el-menu-item>
            <el-menu-item index="5">
                <a href="javascript:void(0);" target="_blank">会员专区</a>
            </el-menu-item>
            <el-menu-item index="6">
                <a href="javascript:void(0);" target="_blank">关于我们</a>
            </el-menu-item>
            <div class="user-center">
                <el-input placeholder="搜索"
                size="small" style="display: inline-block; width: 40%;margin-right: 10px;">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>

                <el-button type="primary" size="small">我的学习
                </el-button>
                <span>个人中心</span>
                <button @click="logOut()">退出</button>
                <div class="content">
                </div>
            </div>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect: function(key, keyPath) {
                console.log(key, keyPath);
            },
            logOut: function() {
                localStorage.removeItem('onLine');
                this.$router.push('/')
            },
        }
    }
</script>
<style scoped lang="less">
    .user-center {
        input:focus{ outline:none; }
        height: 60px;
        line-height: 60px;
        float: right;
        color: #fff;
        font-size: 16px;

        &:hover {
            .content {
                display: block;
            }
        }

        .content {
            display: block;
        }
    }
</style>