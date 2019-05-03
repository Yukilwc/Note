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
