<template>
<div class="login-out">
    <div class="login-modal">
        <div class="content">
            <b @click="closeModal">✘</b>
            <div class="img-box">
                <img src="../../assets/images/sry.jpg" alt="">
            </div>
            <p class="p-tag">抱歉，您还未登录。如购买教程，请您先<span @click="toLogin()" class="to-login">登录</span></p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        show: function(){
            $(this.$el).fadeIn(100);
        },
        toLogin: function(){
            this.$router.push('/');
        },
        closeModal: function(){
            $(this.$el).fadeOut(100);
        }
    }
}
</script>

<style lang="less">
.login-out{
    display: none;
    .login-modal{
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.5);
        width: 100vw;
        height: 100vh;
        z-index: 10087;
        display: flex;
        justify-content:center;/*x轴对齐方式*/
        align-items:center;
        .content{
            border-radius: 5px;
            width: 300px;
            background-color: #fff;
            padding: 20px 40px;
            text-align: center;
            position: relative;
            b{
                position: absolute;
                right: 10px;
                top: 10px;
                text-align: right;
                cursor: pointer;
                font-size: 18px;
                &:hover{
                    color: red;
                }
            }
            .p-tag{
				text-align: center;
				font-size: 120%;
            }
            .to-login{
				cursor: pointer;
                color: red;
            }
            .img-box{
                width: 200px;
                margin-bottom: 20px;
                img{
                    margin: 0 50px;
                    width: 100%;
                }
            }
        }
    }
}
</style>
