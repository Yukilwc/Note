## == 与 ===
### ==
* 比较时，若类型不同，先进行强制类型转换
* 转换规则：
  * null  undefined
  * string number
  * boolean number
  * object
### ===
比较 类型 和 值 是否都相同

## let
### for循环中，使用Let与var的区别

## 深浅拷贝
### 浅拷贝
* 使用assign
  * `Object.assign({},target)`将target中的属性和值拷贝一份
  * 如果值是对象，则只会拷贝其指针
* 使用...
  * `{...target}`
  * 和assign相同，都无法处理值为Object的情况
### 深拷贝
* 使用JSON
  * 缺陷：
    * 会忽略undefined and symbol
    * 不能序列化函数，值为函数时，此键值对会被忽略
    * 不能解决循环引用的对象
* 使用lodash的深拷贝函数

## 原型
### _proto_
* _proto_是每一个js对象都拥有的属性，或者说，每一个 被构造者 拥有的属性。
* 这个属性会指向该对象的原型
* 一个object是通过new一个构造function产生的，这个object相当于子，构造function相当于父，object中的_proto_指向一个存在，而function中也有一个prototype指向这个存在。这个存在，且称它为 原型
### prototype
* prototype是函数才会有的属性，或者说，每一个 构造者 拥有的属性。
* function是通过new function()构建的，普通的函数定义是语法糖
* prototype本质是个指针，指向原型
### constructor
* constructor是原型的一个属性。
* 它指向关联的构造函数，也就是指向了父的构造function本身。
### 原型链
* 在一个object中，查找一个属性，会顺着原型链向上查找。
* 原型的原型
  * 一个Person构造函数，其拥有prototype属性，指向原型
  * 而这个原型，本身作为对象，也是由构造函数构造的
  * 因此Person的prototype必然也拥有_proto_成员，因为它是被构造者
  * 构造它的是Object，其拥有Object.prototype,其Object.prototype._prop_为null。
### 相关方法
* 获取对象原型：Object.getPrototypeOf()
### 继承
* 继承本质是复制，而js通过原型实现的继承，并不是复制
* 说是继承，但本质是委托。当需要一个属性，自己没有，则委托给原型链的上层。