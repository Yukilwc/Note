# less

## vue使用less
* 如果在.vue文件中使用，
	* 安装less `npm install less less-loader --save-dev`
	* 在vue文件的style标签添加属性`lang="less"`

* 如果不在vue文件中使用或引用，则除了上面的操作，还需要配置webpack的module.rules

## 常用功能
* [detail](https://segmentfault.com/a/1190000012360995?utm_source=tag-newest)
* 变量
	* `@width:100px;`
* 混合Mixins
	* 定义：`.class{}`
	* 使用：`.class();`
* 嵌套Nesting
	* `.class1{ .class2{}  } `

* 运算
	* 注意，运算的变量和运算符直接，必须有空格`   margin-left:@userWidth / 2 - @navHeight / 2;`