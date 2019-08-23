<template>
            <div class="search">
                    关键字:
                    <input class="inp" type="text" placeholder="刘德华" v-model="val">
                    {{""}}
                    <button class="searchBtn" @click="searchFind">搜索</button>
            </div>
        

</template>

<script>
import {mapActions,mapMutations} from'vuex'
export default {
        data(){
                return{
                        val:''
                }
        },
        methods:{
                searchFind(){
                        this.setKeyword(this.val)
                        if(this.val==""){       //若搜索框为空时点击搜索按钮时获取初次渲染的数据
                            this.getStuList()
                        }else{
                            this.searchList(1)  
                        }
                        

                },
                ...mapActions(['searchList','getStuList']),
                ...mapMutations(['setKeyword'])
        }
}
</script>

<style scoped>

</style>