# 浅克隆
# 深克隆
## 要求
* 克隆对象和原对象，内部成员不可===，即指向同一内存
## 实现思想
### JSON.parse
* 缺陷
  * 无法对函数，Regexp克隆
  * 抛弃函数的constructor，指向Object
  * 对象有循环引用，会报错
### 自己实现
* 深度遍历，迭代
* 特殊处理 针对性克隆
  * Array
  * RegExp
  * Date
* 处理循环引用
### lodash的深克隆实现
## 应用情景