# javascript
## javascript 基础
* 判断对象类型：使用原型中的tostring和正则表达式
* for(i in o),o为数组时，i为索引，o为对象时，i为成员的键名字，可以用o[i]访问
* 同上，访问对象内成员有两种方式
	* object.name
	* object['name']
	* name是对象成员的名字

## js判断鼠标是否在某元素内
* 使用dom1.contains(dom2)进行判断
* dom是Element类型，可以从鼠标事件的event中获取，也可以document.getElementById()获取

## js事件
* mouseout事件
	* event.toElement:是鼠标即将进入的dom元素

## 运算符
* `...`运算符
	* 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
	* `let bar = { a: 1, b: 2 };let baz = { ...bar }; // { a: 1, b: 2 }`
	* 常用作拷贝
	* 注意运算结果需要加花括号才行`this.imgInfos={...infos};`
## promise的使用
* [detail](https://www.cnblogs.com/sweeeper/p/8442613.html)
* `new promise(function(resolve,reject){AsyncAction{resolve()} })`
* resolve and reject
* then
* catch
* all
* race
* `resolve(value1)`只能填写一个值，其他会被忽略，之后的then中可以接收`.then(value1=>console.log(value1));`
* 回调地狱与promise的方法比较
* promise原理机制

## 获取数量
* 对象
* 数组

