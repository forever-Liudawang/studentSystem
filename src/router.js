import Vue from 'vue'
import Router from 'vue-router'
import addStudent from "./views/addStudent.vue"
import studentList from "./views/studentList.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/addStudent',
      name:'addStu',
      component:addStudent
    },
    {
      path:'/studentList',
      name:'stuList',
      component:studentList
    },
    {
      path:"*",
      redirect:'/studentList'
    }
  ]
})
