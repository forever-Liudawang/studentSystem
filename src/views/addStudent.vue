<template>

<div>
    <form class="form1 moment" action="">
            <div>
                <label for="name">姓名 :</label>              
                <input type="text" name="name" v-model="formData.name">
            </div>
            <div>
                <label for="sex">性别 :</label>
                男<input type="radio" class="man" name="sex" value=0 checked>
                女<input type="radio" class="woman" name="sex" value=1>
            </div>
            <div>
                <label for="sNo">学号 :</label>               
                <input type="text" name="sNo" v-model="formData.sNo">
            </div>
            <div>
                <label for="email">邮箱 :</label>              
                <input type="email" name="email" v-model="formData.email">
            </div>
            <div>
                <label for="birth">出生年:</label>             
                <input type="text" name="birth" v-model="formData.birth">
            </div>
            <div>
                <label for="phone">手机号 :</label>             
                <input type="tel" name="phone" v-model="formData.phone">
            </div>
            <div>
                <label for="address">住址 :</label>             
                <input type="text" name="address" v-model="formData.address">
            </div>
            <div class="btn">
                    <button class="submit" @click.prevent="addData">提交</button>
                    {{""}}
                    <button class="reset" @click.prevent="resetData">重置</button>

            </div>
        </form>
</div>
</template>

<script>
import api from "../api.js"
import { METHODS } from 'http';
import {mapMutations,mapState} from "vuex";
export default {
        data(){
            return{
                formData:{
                    name:"",
                    birth:"",
                    sex:0,
                    email:"",
                    address:"",
                    phone:"",
                    sNo:"",
                }
            }
        },
        methods:{
            addData(){
                api.addStudent(this.formData)           //调用新增学生的接口
                    .then(data=>{
                        if(data.data.msg='success'){
                            alert('添加成功')
                             var active=this.isActive
                             this.setActive(!active)   //新增学生成功后跳转至学生列表页面左侧列表的相应的转换
                             this.$store.dispatch('getStuList') //新增成功后再次请求数据渲染表格页面
                                 .then(()=>{
                                     this.$router.push('/studentList')  //跳转至学生列表页面
                                 })
                        }else{
                            alert(data.data.msg)
                        }
                    })
                    .catch(err=>{
                        alert(err)
                    })
            },
            resetData(){            //点击重置按钮时清空表单中的数据
                this.formData={};
            },
            ...mapMutations(['setActive'])
        },
        computed:{
            ...mapState(['isActive'])
        }
}
</script>

<style>

</style>