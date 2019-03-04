<template>
  <div class="logo_search">
	  <input type="text" class="searchText " v-model='value' @keyup.13="search"/>
	  
	  <router-link :to="`/recipe/${value}`"><input type="button" class="search " value="搜索" @click="search" /></router-link>
  </div>
</template>

<script>
export default {
    data(){
		return{
          value:'',
		}
	}, 
	props:{

	},
	methods:{
			search(){
				// console.log(this.value)
				// this.$emit('handelSearch',this.value)
				// this.$router.push({path:'/recipe',query:{rname:this.value}});
				// this.$router.push({name:'Recipe',params:{rname:this.value}});
				 let routeData = this.$router.resolve({path:'/recipe',query:{rname:this.value}});
				//  let routeData = this.$router.resolve({name:'Recipe',params:{rname:this.value}});
                window.open(routeData.href, '_blank');

			}
	}
	
}
</script>
<style>
    .logo_search {
		height:26px;
		border: 1px solid #ccc;
		border-bottom-right-radius: 5px;
		border-top-right-radius: 5px;
	}

	.logo_search input {
		display: block;
		float: left;
		font-size: 14px;
		line-height: 20px;
		border-bottom-right-radius: 3px;
		border-top-right-radius: 3px;
	}

	.logo_search input[type="text"] {
		width: 160px;
		height: 20px;
		padding: 3px;
		border: 0;
		outline: none;
	}

	.logo_search input[type="button"] {
		width: 80px;
		height: 26px;
		color: #fff;
		background: #999 url(/../img/index_img/search.png) no-repeat scroll 12px center/16px auto;
		border: 0;
		text-align: right;
		padding-right: 15px;
		transition: all .3s;
		cursor: pointer;
	}

	.logo_search input[type="button"]:hover {
		background: #FF6767 url(/../img/index_img/search.png) no-repeat scroll 12px center/16px auto;
	}
</style>
