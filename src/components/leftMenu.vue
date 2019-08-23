<template>
    <div>
            <div class="menu">
                <ul>
                    <li class="studentControl">学生管理</li>
                    <router-link class="studentlist"
                                tag="li"
                                to="/addStudent"
                                :class="{active:!isActive}"
                                @click.native="changeClass">
                                新增学生</router-link>
                               
                    <router-link class="addStudent" 
                                tag="li"  
                                to="/studentList"
                                :class="{active:isActive}"
                                @click.native="changeClass">学生列表</router-link>
                    
                    <!-- <li class="studentlist" data-id="listPage">学生列表</li>
                    <li class="addStudent" data-id="form1">新增学生</li> -->
                </ul>
            </div>
            <div class="content">
                 <router-view></router-view>
            </div>
        
    </div>

</template>

<script>
import {mapMutations,mapState} from "vuex"

export default {
        methods:{
            changeClass(){      //点击导航标签时切换类名
                this.setActive(!this.isActive)
            },
            ...mapMutations(['setActive'])
        },
        computed:{
            ...mapState(['isActive'])
        }
}
</script>

<style scoped>

</style>