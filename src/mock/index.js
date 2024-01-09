import Mock from 'mockjs'

//FieldSelect 接口调用示例
Mock.mock("/dict/examType","post",{
    'list':[
        {
            name:'线上考试',
            id:'1'
        },
        {
            name:'线下考试',
            id:'2'
        },
        {
            name:'托业考试',
            id:'2'
        },
    ]
})

//FieldSelect 接口调用示例
Mock.mock("/dict/examType1","post",{
    'list':[
        {
            name:'线上考试',
            id:'1'
        },
        {
            name:'线下考试',
            id:'2'
        },
        {
            name:'托业考试',
            id:'3'
        },
        {
            name:'线上考试',
            id:'4'
        },
        {
            name:'线下考试',
            id:'5'
        },
        {
            name:'托业考试',
            id:'6'
        },
        {
            name:'线上考试',
            id:'7'
        },
        {
            name:'线下考试',
            id:'8'
        },
        {
            name:'托业考试',
            id:'9'
        },
        {
            name:'线上考试',
            id:'10'
        },
        {
            name:'线下考试',
            id:'11'
        },
        {
            name:'托业考试',
            id:'12'
        },
    ]
})

//FieldCheckBoxSelect 接口调用示例
Mock.mock("/dict/remoteSearch","get",{
    'list':[
        {
            name:'远程搜索1',
            id:'1'
        },
        {
            name:'远程搜索2',
            id:'2'
        },
        {
            name:'远程搜索3',
            id:'3'
        },
        {
            name:'远程搜索4',
            id:'4'
        },
        {
            name:'远程搜索5',
            id:'5'
        },
    ]
})
