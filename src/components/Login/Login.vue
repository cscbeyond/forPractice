<template>
    <div class="login">
        用户名：<input type="text" class="user-name" placeholder="请输入用户名" v-model="name">
        <br>
        密码： <input type="test" class="pwd" placeholder="请输入密码" v-model="pwd">
        <br>
        <button @click="login()">
            登录
        </button>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../Footer/Footer.vue';
export default {
    data:function(){
        return{
            name: null,
            pwd: null,
        }
    },
    components:{
        Footer
    },
    methods: {
        login:function(){
            if(!this.name){
                alert('请输入用户名');
                return
            }else if(! this.pwd){
                alert('请输入密码');
                return;
            }else{
                Axios.post('/login/user_login',{
                    name: this.name,
                    pwd: this.pwd
                }).then(res=>{
                    if(res.data.code == 0){
                        console.log('跳转');
                        // this.$route.push()
                    }
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
}
</script>

<style scoped>
    
</style>
