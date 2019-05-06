<template>
    <div class="filter">
        <ul class="ul">
            <li
                @click="subjectType($event,item)"
                :class='[{active:selItemId==item.val}]'
                v-for="item in mySelectList"
                :key="item.val"
            >
                <a href="javascript:void(0)">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        "mySelectList":{
            default: ()=>{
                return [
                    {"name":"ss","val":1},
                    {"name":"HTML","val":2}
                ]
            }
        }
    },
    data: function(){
        return {
			active: 'JavaScript',
			selItemId: '0',
        }
    },
    mounted: function () {
        // console.log(this.myArray);
    },
    methods:{
        subjectType: function(e,v){
			this.selItemId = v.val;
            this.$emit('getItemType',e,v,this.selItemId)
        }
    }
}
</script>

<style lang='less'>
.filter{
        background-color: #fff;
        position: sticky;
        top: 0;
    ul{
        overflow: hidden;
		border-bottom: 1px solid #ccc;
        padding-left: 100px;
        padding-bottom: 10px;
        li{
            margin-left: 20px;
            width: 70px;
            height: 40px;
            float: left;
            line-height: 40px;
            border-radius: 6px;
			transition: all .3s ease;
            &:hover{
                background-color: lightskyblue;
                transition: all .3s ease;
            }
        }
        .active{
			background-color: lightskyblue;
			a{
				color: #fff;
			}
        }
    }
}
</style>
