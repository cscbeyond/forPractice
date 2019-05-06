<template>
	<div class="sc-test">
		this component is for test
	</div>
</template>

<script>
export default {
	mounted () {
		this.test();
	},
	methods: {
		test(){
			alert('test');
		},
	},
}
</script>
<style lang="less">
	.sc-test{
		background-color: #ccc;
		color: #fff;
		height: 50px;
		line-height: 50px;
	}
</style>