<template>

<div>
        <table border="0" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>年龄</th>
                <th>手机号</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in stuList" :key="index">
                <td>{{item.sNo}}</td>
                <td>{{item.name}}</td>
                <td>{{item.sex?'女':'男'}}</td>
                <td>{{item.email}}</td>
                <td>{{new Date().getFullYear()-item.birth}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.address}}</td>
                <td>
                    <button class="write" @click="editor(item)">编辑</button>
                    {{''}}
                    <button class="cancle" @click="del(item.sNo)">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from'vuex'
export default {
        computed:{
            ...mapState(['stuList'])
        },
        methods:{
            editor(item){
                this.setShowModel(true)
                this.setEditorData(item)
            },
            del(sNo){       //根据学好删除对应的数据
                let flag=window.confirm('确认删除吗');
                if(flag){
                    this.delData(sNo)
                }
            },
            ...mapActions(['delData']),
            ...mapMutations(['setShowModel','setEditorData'])
        }
}
</script>

<style scoped>

</style>