<template>
  <div id="app">
<!--    <ValidationObserver ref="validate">-->
<!--          <FieldText-->
<!--              v-model="textModel.fieldValue"-->
<!--              :label="textModel.label"-->
<!--              :type="'text'"-->
<!--              :scene="1"-->
<!--              :required="textModel.required"-->
<!--              :placeholder="textModel.placeholder"-->
<!--              :validateRules="'required'"-->
<!--              :fieldType="textModel.fieldType"-->
<!--          ></FieldText>-->
<!--    </ValidationObserver>-->
<!--     <ModuleFieldReactive v-model="obj" :fieldList="fieldList">-->
<!--       <template slot="kemu" slot-scope="scope">-->
<!--         <van-switch v-model="obj.kemu"></van-switch>-->
<!--       </template>-->
<!--     </ModuleFieldReactive>-->
<!--     <div>----------------------------------------</div>-->
<!--     <div>----------------------------------------</div>-->
     <ModuleField ref="form" :fieldList="fieldList" @onCell="onCell">
       <template slot="kemu" slot-scope="scope">
         <van-switch v-model="scope.row.fieldValue"></van-switch>
       </template>
       <template slot="crudView_crud" slot-scope="scope">
         <div @click="onScope(scope)">
           <div v-for="(moduleList,index) in ((scope.row.typeSecondShowPageList || [])[0] || {}).list" :key="index">
             <div>
               序号: {{index}}
             </div>
              <div v-for="(field,key) in moduleList">

              </div>
           </div>
         </div>
       </template>
      <!--  远程搜索item样式自定义     -->
       <template slot="checkBoxSelectItem_tree" slot-scope="scope">
          <div style="text-align: left">
            <div>考试名称 : {{scope.row.name}}</div>
            <div>考试id : {{scope.row.id}} </div>
          </div>
       </template>
     </ModuleField>
    <div style="margin: 16px;">
      <Button round block type="info" @click="onSubmit">提交</Button>
    </div>
  </div>
</template>

<script>
import {Form,Button} from 'vant'
export default {
  name: 'App',
  components: {
    Form,Button
  },
  data(){
    return{
      textModel:{
        label:'考试标题',
        type:'text',
        fieldValue:'',
        fieldName:'title',
        fieldType:'text',
        required:true,
        // placeholder:'请输入考试标题',
        config:{}
      },
      //字段列表
      fieldList:[
        {
          label:'考试标题主表',
          type:'text',
          fieldValue:'',
          fieldName:'title',
          fieldType:'text',
          required:true,
          labelWidth: 120,
          tip:'考试的主题，是指你这次考试的主要内容'
        },
        {
            label:'Vant 数字类型',
            textFieldType:'int',
            fieldValue:'',
            fieldName:'title1',
            fieldType:'digit',
            required:true,
            labelWidth: 120,
            tip:'Vant 是一个轻量、可定制的移动端组件库,于 2017 年开源。 目前Vant 官方提供了Vue 2 版本、Vue 3 版本和微信小程序版本,并由社区团队维护React 版本和支付宝小程序版本',
            tipLocation:'bottom'
        },
        {
          label:'Money类型',
          textFieldType:'',
          fieldValue:'',
          fieldName:'money',
          fieldType:'amount',
          required:true,
          labelWidth: 120,
          tip:'请输入具体金额，精度为两位小数，货币为人民币'
        },
        {
          label:'Number类型',
          textFieldType:'number',
          fieldValue:'',
          fieldName:'number',
          fieldType:'number',
          required:true,
          precision:1
        },
        {
          label:'考试标题备份',
          type:'text',
          fieldValue:'Copy',
          fieldName:'titleCopy',
          fieldType:'text',
          required:true
        },
        {
          label:'考试类型',
          fieldType:'select',
          fieldName: 'type',
          required: false,
          postUrl:'/dict/examType',
          getType:'url',
          refreshWhenClick: true
        },
        {
          label:'考试节奏',
          fieldType:'select',
          fieldName: 'type11',
          required: false,
          getType:'url',
          refreshWhenClick: true,
          httpFunction:async ()=>{
            const resp =  await this.$post('/dict/examType1')
            return resp.data.list
          }
        },
        {
          label:'考试地点',
          fieldType: 'address',
          fieldName: 'address',
          required: false,
          selectLevel:3,
          showProvinceName: true
        },
        {
          label:'考试科目',
          fieldName:'kemu',
          formSlot:true,
          required: true
        },
        {
          label:'考试日期',
          fieldType:'date',
          fieldName: 'date',
          fieldValue: '',
          required: true,
          tip:'考试日期前往别迟到'
        },
        {
          label:'考试日期和时间',
          fieldType:'datetime',
          fieldName: 'datetime',
          fieldValue: '',
          required: true,
          labelWidth: 100
        },
        {
          label:'考试时间Time',
          fieldType:'time',
          fieldName: 'time',
          fieldValue: '',
          required: true
        },
        {
          label:'远程搜索方式',
          fieldType:'tree',
          fieldName: 'tree',
          fieldValue: '',
          required: true,
          postUrl: '/dict/remoteSearch',
          config:{
            configName:'',
            showName:true
          },
          useItemSlot:true
        },
        {
          label:'远程搜索刷新',
          fieldType:'tree',
          fieldName: 'tree1',
          fieldValue: '',
          required: true,
          postUrl: '/dict/remoteSearch',
          config:{
            configName:'',
            showName:true
          },
          useItemSlot:true,
          refreshWhenClick:true,//每次都刷新数据
          tip:'远程搜索就是从网络上加载数据来选择的意思',
          tipLocation: 'bottom'
        },
        {
          label:'收款人信息',
          fieldType:'fieldCrud',
          fieldName: 'crud',
          fieldValue: [],
          required: true,
          crudViewSlot:false,
          crudEditFunc:'',
          showMoney:true,
          typeList:[
            {
              name:'类型一',
              code:'code1'
            },
          ],
          typeSecondModuleList:[
            {
              type:'reimbType',
              name:'类型1',
              code:'code1',
              moduleList:[
                {
                  label:'考试标题',
                  type:'text',
                  fieldValue:'',
                  fieldName:'title',
                  fieldType:'text',
                  required:true,
                  config:{}
                },
                {
                  label:'考试标题备份',
                  type:'text',
                  fieldValue:'Copy',
                  fieldName:'titleCopy',
                  fieldType:'text',
                  required:true,
                  config:{}
                },
                {
                  label:'考试类型',
                  fieldType:'select',
                  fieldName: 'type',
                  required: false,
                  config:{},
                  optionCodes:[
                    {
                      name:'英语',
                      code:'yingyu'
                    },
                    {
                      name:'法语',
                      code:'fayu'
                    }
                  ]
                },
                {
                    label:'考试费用',
                    fieldValue:'',
                    fieldName:'examAmount',
                    fieldType:'amount',
                    required:true,
                    isSum:true,
                    config:{}
                },
              {
                  label:'考试类型1',
                  fieldType:'select',
                  fieldName: 'type1',
                  required: false,
                  config:{},
                  optionCodes:[
                      {
                          name:'英语',
                          code:'yingyu'
                      },
                      {
                          name:'法语',
                          code:'fayu'
                      }
                  ]
              },
              ]
            }
          ],
          typeSecondEditPageList:[
            {
              type:'reimbType',
              code:'code1',
              name:'类型一',
              list:[
                  [
                    {
                      label:'考试标题',
                      type:'text',
                      fieldValue:'',
                      fieldName:'title',
                      fieldType:'text',
                      required:true,
                      config:{}
                    },
                    {
                      label:'考试标题备份',
                      type:'text',
                      fieldValue:'Copy',
                      fieldName:'titleCopy',
                      fieldType:'text',
                      required:true,
                      config:{}
                    },
                    {
                      label:'考试类型',
                      fieldType:'select',
                      fieldName: 'type',
                      required: false,
                      config:{},
                      optionCodes:[
                        {
                          name:'英语',
                          code:'yingyu'
                        },
                        {
                          name:'法语',
                          code:'fayu'
                        }
                      ]
                    },
                ]
              ]
            }
          ],
          typeSecondShowPageList:[
            // {
            //   type:'reimbType',
            //   code:'code1',
            //   name:'类型一',
            //   list:[
            //     [
            //       {
            //         label:'考试标题',
            //         type:'text',
            //         fieldValue:'',
            //         fieldName:'title',
            //         fieldType:'text',
            //         required:true,
            //         config:{}
            //       },
            //       {
            //         label:'考试标题备份',
            //         type:'text',
            //         fieldValue:'Copy',
            //         fieldName:'titleCopy',
            //         fieldType:'text',
            //         required:true,
            //         config:{}
            //       },
            //       {
            //         label:'考试类型',
            //         fieldType:'select',
            //         fieldName: 'type',
            //         required: false,
            //         config:{},
            //         optionCodes:[
            //           {
            //             name:'英语',
            //             code:'yingyu'
            //           },
            //           {
            //             name:'法语',
            //             code:'fayu'
            //           }
            //         ]
            //       },
            //     ]
            //   ]
            // }
          ],
          config:{
            configName:'',
            showName:true
          }
        },
        {
          label:'考试结束时间Time',
          fieldType:'time',
          fieldName: 'endTime',
          fieldValue: '',
          required: true,
          labelWidth:150
        },
        {
          label:'项目信息',
          fieldType:'fieldCrud',
          fieldName: 'projectCrud',
          fieldValue: [],
          required: true,
          crudViewSlot:false,
          crudEditFunc:'',
          showMoney:true,
          typeList:[
            {
              name:'类型一',
              code:'type1'
            },
          ],
          typeSecondModuleList:[
            {
              type:'reimbType',
              name:'类型1',
              code:'type1',
              moduleList:[
                {
                  label:'项目名称',
                  type:'text',
                  fieldValue:'',
                  fieldName:'title',
                  fieldType:'text',
                  required:true,
                  config:{}
                },
                {
                  label:'项目类型',
                  fieldType:'select',
                  fieldName: 'type',
                  required: false,
                  config:{},
                  optionCodes:[
                    {
                      name:'外部项目',
                      code:'yingyu'
                    },
                    {
                      name:'内部项目',
                      code:'fayu'
                    }
                  ]
                },
                {
                  label:'项目预算',
                  fieldValue:'',
                  fieldName:'examAmount',
                  fieldType:'amount',
                  required:true,
                  isSum:true,
                  config:{}
                },
              ]
            }
          ],
          typeSecondShowPageList:[
          ],
          config:{
            configName:'',
            showName:true
          }
        },
      ],
      obj:{
      }
    }
  },
  methods:{
    onScope(scope){
      scope.row.crudEditFunc(scope.row.typeSecondShowPageList[0],0,0)
    },
    onSubmit(){
        this.$refs.form
            .validate()
            .then(success=>{
                if (success) {
                  this.$toast('可以提交了')
                } else {
                  //提示第一个
                  let errors = this.$refs.validate.refs
                  console.log('validate',this.$refs.validate)
                  let errorFirstKey = Object.keys(errors).find(key => {
                    //console.log(key,errors[key].errors)
                    return errors[key].errors.length > 0
                  })
                  if (!errorFirstKey){

                    this.$refs.validate.observers.every(ob=>{
                      let key = Object.keys(ob.refs).find(key=>{
                        return ob.refs[key].errors.length>0
                      })
                      if (key){
                        this.$toast.fail({message: ob.refs[key].errors[0]})
                        return false
                      }else {
                        return true
                      }
                    })

                  } else{
                    this.$toast.fail({message: errors[errorFirstKey].errors[0]})
                  }
                }
            })
    },
    onCell(fieldVal,item,preVal){
      console.log(item)
      console.log(preVal)
      if (item.fieldName === 'title') {
        const titleCopy = this.fieldList.find(item=>item.fieldName === 'titleCopy') || {}
        titleCopy.fieldValue = fieldVal
      }
    }
  },
  watch:{
    'obj.title'(newVal){
      console.log('startCopy')
      this.obj.titleCopy = newVal
      this.obj.type = {
        name:'type'+newVal,
        id:'222'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
