export default{
    name:'certifications',
    title:'Certifications',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'trainings',
            title:'Trainings',
            type:'array',
            of:[{ type:'trainings'}]
        },
    ]
}