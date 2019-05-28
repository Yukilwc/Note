## 变量提升，var let const
### 变量提升
* var与函数定义均会提升到作用域最上面
* 函数定义优先级更高
* 这是在静态编译阶段进行的
* 变量提升，只会提升变量声明，而变量赋值不会提升

### var,let,const
* 全局作用域下定义时，let and const不会被挂载到window对象上，而var会
* let与const没有变量提升，因此存在暂时性死区
* let与const的区别是，const声明的变量不可以再次赋值

## class
### 语法糖class
* 本质：
  * `class Person{};`
  * `Person instanceof Function  //true`
### 继承的实现
* 继承是针对于父构造函数和子构造函数，也就是说是两个函数
* 组合继承
  * 基本思路
* 寄生组合继承
* class继承

## 模块化
### 立即执行函数
### commonjs
* 导出
* 导入
* require本质，包装了立即执行函数

### ES Module
* 与commonjs的区别
  * 对动态导入的支持
  * 同步异步
  * 拷贝还是引用
  * ES的编译

## proxy
### 设计的意义
### 用其实现一个vue双向绑定

## map,filter,reduce
### 相同点
* 都是创建新的存在
* 都是由一个数组发起调用
* 都是与遍历相关，可以替代for循环
### map
### filter
### reduce
### 各自的使用场景