# Josn Server的方法
## 过滤
```js
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
```
> 添加_ne以排除值
```js
GET /slider?id_ne=1&id_ne=2
[
  {
    "id": 3,
    "path": "product/vivo",
    "title": "VIVO"
  },
  {
    "id": 4,
    "path": "product/Samsung",
    "title": "三星"
  },
  {
    "id": 5,
    "path": "product/mi",
    "title": "小米"
  },
]
```
> 添加_like到过滤器（支持RegExp）
```js
GET /slider?path_like=mi
[
  {
    "id": 5,
    "path": "product/mi",
    "title": "小米"
  }
]
```
>　加q进行全文检索

```js
GET /slider?q=i
[
  {
    "id": 1,
    "path": "product/huawei",
    "title": "华为"
  },
  {
    "id": 3,
    "path": "product/vivo",
    "title": "VIVO"
  },
  {
    "id": 5,
    "path": "product/mi",
    "title": "小米"
  }
]
```
## 分页
> 使用_page和（可选）_limit对返回的数据进行分页。
```js
GET /slider?_page=0
//默认返回10个项目,并且page=1和page=0的结果是一样的
GET /slider?_page=2&_limit=2

[
  {
    "id": 3,
    "path": "product/vivo",
    "title": "VIVO"
  },
  {
    "id": 4,
    "path": "product/Samsung",
    "title": "三星"
  }
]
```
## 排序
> 添加_sort和_order（默认升序）(asc升序，desc降序)
```js
GET /slider?_sort=id&_order=desc&_limit=2
[
  {
    "path": "product/aaa",
    "title": "啊啊啊",
    "id": 7
  },
  {
    "path": "product/111",
    "title": "111",
    "id": 6
  }
]
```
## 切片
> 加_start和_end或_limit,与Array.slice完全一样（即_start包含和_end排除）
```js
//start应该从0开始
GET /slider?_start=0&_end=2
[
  {
    "id": 1,
    "path": "product/huawei",
    "title": "华为"
  },
  {
    "id": 2,
    "path": "product/oppo",
    "title": "OPPO"
  }
]
```
> 添加_gte或_lte获取范围

```js
GET slider?id_gte=1&id_lte=2
[
  {
    "id": 1,
    "path": "product/huawei",
    "title": "华为"
  },
  {
    "id": 2,
    "path": "product/oppo",
    "title": "OPPO"
  }
]
```