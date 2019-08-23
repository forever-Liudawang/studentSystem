<template>
  <div class="wrapper">
    <system-header></system-header>
    <left-menu></left-menu>
    <cover v-if="showModel"></cover>
  </div>
</template>

<script>
import systemHeader from "./components/systemHeader";
import leftMenu from "./components/leftMenu";
import cover from "./components/cover"

import api from "./api.js";
import {mapActions,mapState,mapMutations} from 'vuex';
export default {
      components:{
        systemHeader,
        leftMenu,
        cover
      },
      created(){
          this.getStuList() //页面一创建时就获取数据便于studentTable中数据的渲染
      },
      methods:{
          ...mapActions(['getStuList'])
      },
      computed:{
          ...mapState(['showModel'])
      }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
button{
    cursor: pointer;
}
button:hover{
    box-shadow: 1px 1px 1px #777;
}
html{
    height: 100%;
}
body{
    height: 100%;
}
.wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.header{
    width: 100%;
    height: 60px;
    display: inline-block;
    background-color: rgb(88, 89, 104);
    position: relative;
    line-height: 60px;
    padding: 0 20px;
    color: #fff;
    font-size: 12px;
    z-index: 5;
    box-sizing: border-box;
}
.img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10px;
}
.menu{
    box-sizing: border-box;
    display: inline-block;
    width: 150px;
    height: 100%;
    background-color: rgb(123, 125, 143);
    color: #fff;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 60px;
    z-index: 4;
}

.menu li{
    margin-top: 12px;
}
.studentControl{
    padding-left: 10px;
}
.studentlist,.addStudent{
    padding:8px 25px;
   cursor: pointer;
}

.active{
    background-color: #fff;
    color: black;
}
.content{
    width: 100%;
    height: 100%;
    padding-left: 150px;
    position: absolute;
    box-sizing: border-box;
    text-align: left;
    background-color: rgb(219, 200, 200);
  
}
.content form div{
    margin-left: 350px;
    margin-bottom: 10px;
}
.form1{
    /* display: none; */
    margin-top: 150px;
    
}
input{
    width: 250px;
    font-size: 20px;
    padding: 0 4px;
}
label{
    display: inline-block;
    min-width: 60px;
}
.man,.woman{
    width: 50px;
}
.btn{
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 20px;
}
.inp{
    color: rgb(0, 0, 0);
    font-size: 20px;
    padding: 6px 4px;
    background-color: rgb(245, 240, 240);
    border-radius: 4px;
}
.submit,.reset{
    width: 100px;
    height: 35px;
}
.editorSubmit{
    width: 100px;
    height: 35px;
}
.listPage{
    /* display: none; */
    width: calc(100% - 150px);
    height: 100%;
    position: absolute;
    top: -60px;
    padding-top: 60px;
    box-sizing: border-box;
}
.search{
    margin-top: 10px;
    margin-left: 350px;
}
.searchBtn,.inp{
    outline: none;
    border: none;
}
.searchBtn{
    font-size: 18px;
    padding:6px 6px;
    color: rgb(90, 79, 79);
    border-radius: 4px;
}
table{
    width: 100%;
    margin-top: 5px;
    margin-bottom: 20px;
}
thead{
    line-height: 35px;
    color: #333;
    padding: 20px 0;
}
th{
    text-align: center;
    background-color: rgb(235, 226, 226);
}
td{
    text-align: center;
    color: rgb(71, 66, 66);
}
tr{
    margin: 4px 0;
}
.write,.cancle{
    width: 60px;
    height: 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
}
tbody tr{
    line-height: 40px;
}
tbody td{
    color: black;
}
.write{
    background-color: green;
}
.cancle{
    background-color: red;
}
.page{
    display:inline-block;
    position: absolute;
    right: 20px;
    bottom: 30px;
    margin-right: 30px;
}
ul{
    width: 100%;
    height: 100%;
}
.page li{
    display: inline-block;
    padding: 2px 8px;
    margin-right: 2px;
    background-color: azure;
    cursor: pointer;
}

.page .active{
    color: #fff;
    background-color: rgb(65, 79, 126);
    border-radius: 4px;
}
.coverBox{
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    z-index: 10;
    background-color: rgba(168, 152, 152, 0.5);
    text-align: center;
    /* display: none; */
}
.coverBox {
    color: rgb(7, 7, 7);
}

.form2{
    margin-top: 85px;
    display: inline-block;
    padding:40px 16px;
    background-color: #fff
}
.form2 div{
    margin-bottom: 8px;
}

</style>
