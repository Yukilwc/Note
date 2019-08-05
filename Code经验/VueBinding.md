## 知识点收集
### 如何判断参数类型？
* 先明确有哪些类型
    * 空，NULL，undefined
    * 非空值类型
    * object
    * function
    * array
* typeof
    * 对原始类型，除null以外，均可以显示
    * 对于对象
        * 函数：显示function
        * 函数外的对象，数组：显示object
    * 评价：用来判定是否是对象，是否是函数，但具体对象的类型，无法判定，也无法判定是否是数组。
* instanceof
    * 其无法返回，而是用来比较
    * 其无法比较原始类型，只能比较对象`person instanceof Person //true`
    * 其可以用Symbol.hasInstance进行自定义比较规则
### Object.keys()
* 职责：返回一个数组，数组由参数对象可枚举的成员的键组成
* 如果参数是数组，则返回["0","1","2"]

### 函数中的成员加this的问题
* 对于构造函数 `function Dep(){ this.target=null;target1=null};Dep.target2=null;`
    * 对于携带this的target，其在实例化时，作为实例的自有变量存在
    * target1,target2定义方式本质相同，他们是属于Dep函数本身的，而不属于实例，因此，属于全局性质。
    * 全局性质的属性和方法，只能通过Dep调用，而不可以用dep实例调用
### documentFragment
* 定义
  * 是node类型，但不属于文档树
  * 由于脱离文档树，是独立的，因此没有parent
  * 通过appendChild放入fragment的节点，会从文档树上删除
* 用法
  * `var fragment=document.createDocumentFragment()`
* 提供的函数及属性
  * 拥有node类型的全部方法属性
  * fragment.appendChild(node)
  * fragment.childNodes 返回元素的子节点的数组
* 性能
  * 通常appendChild每一次都会引起回流
  * fragment是收集完所有的修改后，一次性添加到页面，只回流一次。
  * 因此适合大量节点操作
* fragment作为参数，插入到node中
  * 会将fragment的所有子节点插入，而非片段自身
  * 插入node后，fragment将会失去所有的节点
  * 可以通过闭包保存对这些节点的引用
* 遍历一个nodeList的问题
  * 当遍历得到的item需要加入到fragment时，不可以使用for等遍历方法
  * 因为遍历过程中，nodelist会不断被截取，变化，因此遍历是跳跃的
  * 遍历方法就是循环firstChild添加即可，知道为空
### document提供的函数
* createDocumentFragment()
* document.querySelector(string)
* document.querySelectorAll(string)
### element提供的函数及属性
* el.firstChild
  * el类型是element对象
* child.parentNode
* fragment.childNodes 返回元素的子节点的数组
  * 数组内的元素依旧是节点类型，也存在childNodes
  * 因此可以使用递归遍历
* el.textContent 设置或返回一个节点和它的文本内容
  * 节点包括text类型，这个属性会跳过非text类型的节点，只输出text类型的文本
* el.nodeType
  * 1: div,span类型
  * 3：text类型
### 原生操作DOM方法
### js循环遍历方法
* 数组
  * for
  * foreach
* 对象
  * Object.keys
### 正则表达式
* reg.exec()返回值
  * result[0]匹配的字符串
  * result[1]-result[n]：()中的分组捕获
* exec与match的区别
    * exec可用于过滤
    * match用于检索全部匹配的存在