# 基本类型
基本类型有六类，其都为value，即不存在可调用的方法       
* undefind
* null
* number
* boolean
* string
* symbol

需要注意的一些点：
1. 关于string与String，其中String是对象类型，当写`"1".toString()`时，这里会先强制转换为String类型。
2. NaN
3. symbol
   

# 对象类型
## 作为参数传递
此时传递的是指针的拷贝

## typeof and instanceof

## 类型转换
* 转boolean：


## this
* this的本质
* this指向的判定
  * 其与调用运行时相关
  * 一个函数，其调用方法会对this指向有影响，不同调用有着优先级
* this和作用域，上下文的关系
* 箭头函数：
  * 箭头函数的this，就是包含它的普通函数的this
  * 对箭头函数使用bind无效
  * 箭头函数的this一旦绑定，就再也不能更改，因此VUE method中不可以使用箭头函数

## bind的使用
* `func.bind(a)`






