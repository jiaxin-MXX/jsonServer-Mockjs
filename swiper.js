const Mock = require('mockjs')
var data = Mock.mock({
    "filmlist|1-10":[
        {
            "id|+1":100,
            "name":"@ctitle",
            "arr|1-4":[
                {
                    "imgsrc":"@image"
                }
            ],
            "price|50-60.2":1,
            "word|100-200":"@cword"
        }
    ]
})

module.exports={
    swiper:data
}