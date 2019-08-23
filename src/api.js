import Axios from "axios";
import urls from "./url"

const api={}
const appkey="dongmeiqi_1547441744650"
api.findByPage=function(page,size=10){
    return Axios.get(urls.baseUrl+urls.fingByPageUrl,{
        params:{
            page,
            size,
            appkey,
        }
    })
}
api.upData=function(data){
    return Axios.get(urls.baseUrl+urls.updateStu,{
        params:{
            ...data,
            appkey
        }
    })
}
api.delData=function(sNo){
    return Axios.get(urls.baseUrl+urls.delBySno,{
        params:{
            sNo,
            appkey
        }
    })
}
api.searchData=function(val,page){
    return Axios.get(urls.baseUrl+urls.stuSearch,{
        params:{
            appkey,
            sex:-1,
            search:val,
            page:page,
            size:10   
        }
    })
}
api.addStudent=function(data){
    return Axios.get(urls.baseUrl+urls.addStu,{
        params:{
            appkey,
            ...data,
        }
    })

}
export default api