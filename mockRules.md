##1、属性值是字符串 String
- 'name|min-max': string
```js
//通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
var string = Mock.mock({
    'string|1-10':'哈'
})
console.log(JSON.stringify(string))
//结果随机生成1~10个哈
{"string":"哈哈哈哈"}
```
- 'name|count': string
```js
//通过重复 string 生成一个字符串，重复次数等于 count。
var string = Mock.mock({
    'string|5':'哈'
})
console.log(JSON.stringify(string))
//结果生成五个哈
{"string":"哈哈哈哈哈"}
```


## 属性值是数字 Number
- 'name|+1': number
> 属性值自动加 1，初始值为 number。

- 'name|min-max': number
```js
//生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
var number = Mock.mock({
    'id|1-10': 1
})
//结果1-10的随机数
{"id":8}
```
- 'name|min-max.dmin-dmax': number
```js
//生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位，number 只是用来确定类型。

Mock.mock({
    'number1|1-100.1-10': 1, //生成1-10位的小数
    'number2|123.1-10': 1, //同上
    'number3|123.3': 1, //生成三位小数
    'number4|123.10': 1.123 //生成10位小数
})
// =>
{
    "number1": 12.92,
    "number2": 123.51,
    "number3": 123.777,
    "number4": 123.1231091814
}
```
## 属性值是布尔型 Boolean
- 'name|1': boolean
```js
//随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
var boolean = Mock.mock({
    'boolean|1':true
})//true和false几率都是1/2
```
- 'name|min-max': value
```js
//随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
var data2 = Mock.mock({
    'boolean|1-2':true
})//true的概率是1/3,false的概率是2/3
```
## 属性值是对象 Object
- 'name|count': object

```js
//从属性值 object 中随机选取 count 个属性。
var obj = Mock.mock({
    'obj|2':{
        id:1,
        name:'jx',
        age:18,
        address:'JiNan',
        love:'you'
    }
})//随机在obj里面挑选俩属性显示
//结果
{"obj":{"name":"jx","love":"you"}}
```
- 'name|min-max': object
```js
//从属性值 object 中随机选取 min 到 max 个属性。
var obj = Mock.mock({
    'obj|1-5':{
        id:1,
        name:'jx',
        age:18,
        address:'JiNan',
        love:'you'
    }
})//随机在obj里面挑选1~5个属性显示
//结果
{"obj":{"love":"you","id":1,"age":18,"name":"jx"}}
```
## 属性值是数组 Array
- 'name|1': array
```js
//从属性值 array 中随机选取 1 个元素，作为最终值。
var data = Mock.mock({
    'list|5': [1]
})
//结果
{"list":[1,1,1,1,1]}
```
- 'name|+1': array

> 从属性值 array 中顺序选取 1 个元素，作为最终值。

- 'name|min-max': array
```js
//通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
var data = Mock.mock({
    'list|1-10': [{
        "id|+1":1
    }]
})//结果随便输出1~10个数
//结果
{"list":[{"id":1},{"id":2},{"id":3}]}
```
- 'name|count': array
```js
//通过重复属性值 array 生成一个新数组，重复次数为 count。
var data = Mock.mock({
    'list|3': [{
        "id|+1":1
    }]
})//输出3个数
//结果
{"list":[{"id":1},{"id":2},{"id":3}]}
```
## 属性值是函数 Function
- 'name': function
```js
//执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'name': ()=>{
        return 'jia'+'xin'
    }
})
//结果
{"name":"jiaxin"}
```
## 属性值是正则表达式 RegExp
- 'name': regexp
```js
//根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。

Mock.mock({
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\w\W\s\S\d\D/,
    'regexp3': /\d{5,10}/
})
// =>
{
    "regexp1": "pJ7",
    "regexp2": "F)\fp1G",
    "regexp3": "561659409"
}
```
## Mock.Random
```js
var Random = Mock.Random
Random.email()
// => "n.clark@miller.io"
Mock.mock('@email')
// => "y.lee@lewis.org"
Mock.mock( { email: '@email' } )
// => { email: "v.lewis@hall.gov" }
```

> 自定义随机
```js
Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@CONSTELLATION')
// => "天蝎座"
Mock.mock({
    constellation: '@CONSTELLATION'
})
```
## mock占位符

| Type       | Method  | 
| --------   | -----  |
| Basic        | boolean, natural, integer, float, character, string, range, date, time, datetime, now     |
| Image       | image, dataImage     |
| Color       | color      |
| Text        | paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle     |
| Name       | first, last, name, cfirst, clast, cname      |
| Web       | url, domain, email, ip, tld      |
| Address        | area, region     |
| Helper       | capitalize, upper, lower, pick, shuffle     |
| Miscellaneous       | guid, id      |

