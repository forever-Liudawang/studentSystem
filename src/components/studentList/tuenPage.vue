<template>

        <div class="page">
            <ul>
            <li class="pre" v-if="nowPage>1" @click="turnPage(0)">上一页</li>
            <li v-if="nowPage>3" @click="turnPage(1)">1</li>
            <li v-if="nowPage>4">...</li>
            <li v-for="i in 5" 
                :key="i"
                :class="{'active':i==3}"
                v-if="nowPage+i-3>0&&nowPage+i-3<=totalPage"
                @click="turnPage(nowPage+i-3)"
                >{{nowPage+i-3}}</li>
            <li v-if="totalPage-4>=nowPage">...</li>
            <li v-if="totalPage-3>=nowPage" @click="turnPage(totalPage)">{{totalPage}}</li>
            <li class="next" v-if="nowPage<totalPage" @click="turnPage(-1)">下一页</li>
            </ul>
        </div>

</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
        data(){
            return {
                nowPage:1
            }
        },
        methods:{
            turnPage(num){
                if(num==0){
                    if(this.nowPage>1){
                        this.nowPage--;
                    }
                }else if(num==-1){
                    if(this.nowPage<this.totalPage){
                        this.nowPage++;
                    }
                }else{
                    console.log(num)
                    this.nowPage=num;
                }
                this.getStuList(this.nowPage)
            },
            
            ...mapActions(['getStuList']),

        },
        computed:{
            ...mapState(['totalPage','keyword'])
        },
        watch:{
            keyword(){
                this.nowPage=1;
            }
        }
}
</script>

<style scoped>

</style>