<template>
  <div>
    <h4>字段title变化时，把值赋值给titleCopy</h4>
    <ModuleField :fieldList="demo1List" @onCell="demo1OnCell"></ModuleField>
    <h4>某一个字段的值变化时，根据该值过滤选择器组件的选项内容</h4>
    <ModuleField :fieldList="demo2List" @onCell="demo2OnCell" @paramsChange="onDemo2ParamsChange"></ModuleField>
  </div>
</template>

<script>
export default {
  name: "ChainDemo",
  data(){
    return {
      demo1List:[
        {
          fieldType:'text',
          fieldName:'title',
          label:'字段title',
          type:'text',
          fieldValue:''
        },
        {
          fieldType:'text',
          fieldName:'titleCopy',
          label:'字段titleCopy',
          fieldValue:''
        },
      ],
      demo2List:[
        {
          fieldType:'select',
          fieldName:'language',
          label:'语言',
          fieldValue:'',
          optionCodes:[
            {
              name:'英语',
              id:'english'
            },
            {
              name:'法语',
              id:'french'
            }
          ]
        },
        {
          fieldType:'select',
          fieldName:'exam',
          label:'考试名称',
          fieldValue:'',
          getType:'url',
          postUrl:'/chain/dict/demo2',
          //查询参数
          postData:'',
          refreshWhenClick:true
        },
      ]
    }
  },
  methods:{
    demo1OnCell(fieldVal,item){
      if (item.fieldName === 'title') {
        const titleCopy = this.demo1List.find(item=>item.fieldName === 'titleCopy')
        titleCopy.fieldValue = fieldVal
      }
    },
    demo2OnCell(){

    },
    onDemo2ParamsChange(row){
      //如果点击的是考试名称，则获取考试类型的值后加到搜索参数中去
      if (row.fieldName === 'exam') {
        const language = this.demo2List.find(item=>item.fieldName === 'language')
        row.postData = JSON.stringify({
          type:(language.fieldValue || {}).id
        })
      }
    }
  }
}
</script>

<style scoped>
h4{
  margin: 10px;
}
</style>
