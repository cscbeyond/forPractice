<template>
<div>
    <div class="footer-box">
        <FriendLinks></FriendLinks>
        <h1>Powered by csc</h1>
    </div>
</div>

</template>

<script>
// import '../../assets/css/footer.less'
import FriendLinks from './FriendLinks'
export default {
    components:{
        FriendLinks
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/footer.less';
</style>