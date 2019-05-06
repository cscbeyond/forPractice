<template>
    <div class="login">
        <div class="content">
            <div class="center1" ref="center">
                <!-- <button @click="showLoading">showLoading</button> -->
                <!-- <button @click="hideLoading">hideLoading</button> -->
                <h2 class="title">Geek Mall</h2>
                <div class="demo-input-suffix eleInput">
                    用户名：
                    <el-input placeholder="请输入用户名" v-model="name">
                    </el-input>
                </div>
                <br>
                <div class="demo-input-suffix eleInput">
                    密码：
                    <el-input @keydown.native.13="login()" placeholder="请输入密码" type="password" v-model="pwd">
                    </el-input>
                </div>
                <br>
                <el-row>
                    <el-button class="login-btn" @click="login()" type="primary" plain>登 录</el-button>
                </el-row>

                <div class="to-register">
                    <span>还没有账户？<a id="register-btn" class="register" href="javascript:void(0)">注册</a></span>
                </div>
            </div>
            <div class="center2" ref="center">
                <h2 class="title">Geek Mall</h2>
                <div class="demo-input-suffix eleInput">
                    用户名：
                    <el-input @change="checkRegName" placeholder="请输入用户名" v-model="regName">
                    </el-input>
                </div>
                <br>
                <div style="margin-bottom:10px;" class="demo-input-suffix eleInput">
                    密码：
                    <el-input placeholder="请输入密码" type="password" v-model="regPwd">
                    </el-input>
                </div>
                <div class="demo-input-suffix eleInput">
                    确认密码：
                    <el-input placeholder="请确认密码" type="password" v-model="reRegPwd">
                    </el-input>
                </div>
                <br>
                <el-row>
                    <el-button class="login-btn" @click="register()" type="primary" plain>注 册</el-button>
                </el-row>

                <div class="to-register">
                    <span>已有账户？<a id="login-btn" class="register" href="javascript:void(0)">登录</a></span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Footer from 'components/Footer/Footer.vue';
    import $post from '../../utils/myAxios.js'
    export default {
        data: function () {
            return {
                name: null,
                pwd: null,
                regName: null,
                regPwd: null,
                reRegPwd: null,
                msg: '',
            }
        },
        components: {
            Footer,
        },
        mounted: function () {
            this.bindEvent();
        },
        methods: {
            bindEvent: function () {
                var center1 = $('.center1');
                var center2 = $('.center2');
                $('#register-btn').click(function () {
                    center1.animate({
                        'left': '80%',
                    }, 300).animate({
                        'left': '-200%'
                    }, 300).fadeOut(0, function () {
                        center2.fadeIn(200);
                        center2.animate({
                            'left': '50%'
                        }, 300);
                    });
                });
                $('#login-btn').click(function () {
                    center2.animate({
                        'left': '60%',
                    }, 300).animate({
                        'left': '-200%'
                    }, 300).fadeOut(0, function () {
                        center1.fadeIn(200);
                        center1.animate({
                            'left': '50%',
                        }, 300);
                    });
                });
            },
            errTips: function (errMsg) {
                this.$notify({
                    message: errMsg,
                    type: 'warning'
                });
            },
            login: function () {
                console.log('登录操作')
                if (!this.name) {
                    this.errTips('请输入用户名');
                    return
                } else if (!this.pwd) {
                    this.errTips('请输入密码');
                    return;
                } else {
                    $post('/login/user_login.api', {
                        name: this.name,
                        pwd: this.pwd
                    }).then(res => {
                        // console.log(res);
                        if (res.data.code == 0) {
                            localStorage.setItem('onLine', 'true');
                            this.$router.push('/index')
                        } else {
                            let errMsg = res.data.val;
                            this.errTips(errMsg);
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },
            checkRegName: function () {
                if (this.regName) {
                    Axios.post('/register/user_register/checkname.api', {
                        regName: this.regName,
                    }).then(res => {
                        if (res.data.code == 0) {
                            console.log('可以注册此用户名');
                        } else {
                            let errMsg = res.data.val;
                            this.errTips(errMsg);
                        }
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },
            register: function () {
                if (this.regPwd) {
                    if (this.regPwd != this.reRegPwd) {
                        this.errTips('两次密码输入不一致');
                        return;
                    }
                };
                Axios.post('/register/user_register.api', {
                    regName: this.regName,
                    regPwd: this.regPwd,
                }).then(res => {
                    console.log(res);
                    let errMsg = res.data.val;
                    if (res.data.code == 0) {
                        this.errTips(errMsg);
                        // 注册成功
                        this.errTips('3秒后跳转到登录页');
                        setTimeout(() => {
                            $('#login-btn').trigger('click');
                        }, 3000);
                    } else {
                        this.errTips(errMsg);
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
        }
    }
</script>
<style lang="less">
    .login {
        overflow: hidden;
        background-image: url('../../assets/images/loginBg.png');
        background-size: 100% 100%;
        background-origin: center;
        height: 100vh;
        background-color: #b8e5f8;
        position: relative;

        .content {

            .center1,
            .center2 {
                position: absolute;
                width: 400px;
                display: inline-block;
                border-radius: 3px;
                padding: 30px 10px;
                background-color: #fff;
                transform: translateX(-50%) translateY(-50%);

                .title {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 30px;
                    color: lightblue;
                    margin-bottom: 10px;
                }

                .eleInput {
                    color: #8590a6;
                    ;
                    margin: 0 auto;
                    width: 200px;
                    overflow: hidden;
                    line-height: 30px;
                    font-size: 1.2em;

                    .el-input__inner {
                        height: 30px;
                        font-size: 1em;
                    }
                }

                .login-btn {
                    width: 70%;
                    height: 30px;
                    padding: 0;
                }

                .to-register {
                    margin-top: 20px;
                    font-size: 13px;

                    .register {
                        color: #175199;
                    }

                    .register:hover {
                        color: red;
                    }
                }
            }

            .center1 {
                left: 50%;
                top: 40%;
            }

            .center2 {
                left: 150%;
                top: 40%;
                display: none;
            }
        }

        .el-input {
            width: 60%;
            float: right;
            height: 30px;
        }
    }
</style>