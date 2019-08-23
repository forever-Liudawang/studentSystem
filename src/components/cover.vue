<template>
    <div class="coverBox" @click="coverModel"> 
            <div class="cover"></div>
            <div class="editor">
                <form class="form2" action="" @click="cover">
                    <div>
                        <label for="name">姓名 :</label>              
                        <input type="text" ref="name" name="name" :value="editorData.name" @input="upData('name',$event.target.value)">
                    </div>
                    <div>
                        <label for="sex">性别 :</label>
                        男<input type="radio"  ref="sex" class="man" name="sex" value=0 :checked="editorData.sex==0" @change="upData('sex',0)">
                        女<input type="radio" ref="sex" class="woman" name="sex" value=1 :checked="editorData.sex==1" @change="upData('sex',1)">
                    </div>
                    <div>
                        <label for="sNo">学号 :</label>               
                        <input type="text" ref="sNo" name="sNo" :value="editorData.sNo" @input="upData('sNo',$event.target.value)">
                    </div>
                    <div>   
                        <label for="email">邮箱 :</label>              
                        <input type="email"  ref="email" name="email" :value="editorData.email" @input="upData('email',$event.target.value)">
                    </div>
                    <div>
                        <label for="birth">出生年:</label>             
                        <input type="text"  ref="birth" name="birth" :value="editorData.birth" @input="upData('birth',$event.target.value)">
                    </div>
                    <div>
                        <label for="phone">手机号 :</label>             
                        <input type="tel"  ref="phone" name="phone" :value="editorData.phone" @input="upData('phone',$event.target.value)">
                    </div>
                    <div>
                        <label for="address">住址 :</label>             
                        <input type="text" ref="address" name="address" :value="editorData.address" @input="upData('address',$event.target.value)">
                    </div>
                    <div class="btn">
                            <button class="editorSubmit" @click.prevent="submit">提交</button>
                            {{''}}
                            <button class="reset" @click.prevent="reset">重置</button>
                    </div>
                </form>     
            </div>
    </div>
</template>

<script>
import {mapMutations,mapState,mapActions} from "vuex"
export default {
    data(){
        return {
            formData:{}
        }
    },
    methods:{
        upData(key,value){      //修改输入框中的内容时实时修改forData中的数据，用于与本来的数据合并
            this.formData[key]=value
        },
        submit(){
            let newData=Object.assign({},this.editorData,this.formData);//将本来的数据与修改之后的数据合并
            this.changeData(newData)        //调用修改数据的接口
        },
        reset(){
            for(let prop in this.$refs){   //$refs是获取所设置的属性的ref的值
                if(prop!='sex'){
                    this.formData[prop]=this.$refs[prop].value="";//将表单中的元素内容全部清空
                }
                this.$refs.sex.checked=true;        //修改性别的默认值
                this.formData.sex=0;
            }
        },
        coverModel(){           //设置遮罩层消失的布尔值
            this.setShowModel(false)
        },
        cover(e){               //阻止点击form表单区域触发的冒泡事件
            e.stopPropagation()
        },
         ...mapActions(['changeData']),
         ...mapMutations(['setShowModel'])
    },
    computed:{
         ...mapState(['editorData']),       //获取点击相应的表格行时获取其中的数据渲染cover中的表单
    }
};
</script>

<style scoped>
</style>