import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList:[],
    size:10,
    page:1,
    showModel:false,
    editorData:{} ,  //点击编辑时所对应得每条表格中的数据将其渲染到遮罩层的表单元素中
    totalPage:0,
    keyword:"",
    isActive:true,
  },
  mutations: {
    setStuList(state,list){
      state.stuList=list
    },
    setShowModel(state,bool){
      state.showModel=bool
    },
    setEditorData(state,data){
      state.editorData=data
    },
    setTotal(state,cont){
      state.totalPage=Math.ceil(cont/10)
    },
    setKeyword(state,word){
      state.keyword=word;
    },
    setActive(state,active){
      state.isActive=active;
    }
  },
  actions: {
    getStuList({commit,state,dispatch},page=1){ //在App.vue中调用一次初次渲染
      if(state.keyword!=""){    //防止搜索框中的搜索词为空时
          dispatch('searchList',page)
      }else{
    return  api.findByPage(page)    
            .then(data=>{
              commit('setStuList',data.data.data.findByPage)//获取数据后将其传给stuList便于渲染学生表格
              commit('setTotal',data.data.data.cont)  //设置数据的条数
            })
            .catch(err=>console.log(err))
          }
    },
    changeData({commit,state},data){
      return api.upData(data)
            .then(msg=>{
              if(msg.data.status=='success'){
                Object.assign(state.editorData,data);
                state.showModel=false;  //遮罩层消失
                alert(msg.data.msg)
                // return msg.data.status
              }else{
                return Promise.reject(msg.data.msg)
              }
            })
            .catch(err=>alert(err))
    },
    delData({dispatch},sNo){
       api.delData(sNo)
           .then(msg=>{
             console.log(msg)
                 dispatch('getStuList')   //删除成功后重新调用数据接口获取数据渲染页面
                 alert('删除成功')
           })
    },
    searchList({commit,state},page){
      api.searchData(state.keyword,page)
          .then(data=>{
            commit('setStuList',data.data.data.searchList)  //将渲染表格的数据变成搜索过来的数据
            commit('setTotal',data.data.data.cont)        //重新设置的页面数据的条数
          })
    }
  }
})
