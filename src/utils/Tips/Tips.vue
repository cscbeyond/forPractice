<template>
    <div class="tip">
        <div  class="content">
            {{text}}
            <div class="arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text'],
    methods: {
        show: function(e){
            console.log(e);
            this.$el.style.display = 'inline-block';
            this.$el.style.left = (e.x - 210) + 'px';
            this.$el.style.top = (e.y - 90) + 'px';
            console.log(this.text);
        },
        hide: function(){
            this.$el.style.display = 'none';
        }
    }
}
</script>

<style lang="less">
    .tip{
        display: none;
        position: fixed;
        z-index: 100;
        .content{
            display: inline-block;
            position: relative;
            text-indent: 2em;
            color: #fff;
            background-color: #4C4C4C;
            border-radius: 5px;
            padding: 10px 12px;
            text-align: left;
            font-size: 10px;
            max-width: 400px;
        }
        .arrow{
            position: absolute;
            bottom: -5px;
            left: 50%;
            background-color: #4C4C4C;
            height: 10px;
            width: 10px;
            transform: translateX(-50%) rotateZ(45deg);
        }
    }
</style>
