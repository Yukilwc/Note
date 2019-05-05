# CSS笔记

## 设计css时考虑的思路

## border
* border-width
* border-style
	* none
	* solid
	* groove 3d凹边框
	* ridge 3d凸边框
	* inset
	* outset
* border-color
	* color
	* transparent
* 单边：border-bottom
* 圆角：border-radius

## 盒子模型
* height与width，不包含margin，padding，border
* 脱离文档流
	* float脱离文档流后，其他文档流元素将无视它。
	* absolute脱离文档流，参照系为祖先元素中，最近的，非static布局的元素。
	* fixed脱离文档流，基于浏览器窗口定位
	* relative不会让元素脱离文档流，其是相对于自身正常位置的定位
	* 是否脱离文档流，区别在是否会占位不被填充


## 图片在块内垂直居中,图片与容器均为inline-block
* flex布局`display:flex;align-items:center;`
* 绝对布局：容器：`position:relative`图片：`position:absolute;top:计算值`

## 布局设计思路
* 要设计独立容器，也就是，容器内所有元素布局，仅依赖容器本身，而不依赖容器外元素，例如浏览器窗口。
* 设计的容器自身的布局：
	* 元素状态：float 和 非float
	* 元素定位：static relative absolute fixed
	* 状态与定位排列组合，进行布局。
	* 文档流内，那么，内部元素也必须在文档流内，可使用relative定位，不可浮动，不可设置absolute脱离文档流
	* 设置为浮动，容器在文档流外，定位static，则子元素可浮动可非浮动，定位仅可以是relative,不可以absolute
	* 设置为浮动，容器在文档流外，定位非static，则子元素可以浮动或非浮动，定位可以relative absolute,但不可fixed
	* fixed定位仅用在顶级容器中，如top，container，footer

## css字体
* font-family:使用外部字体
	* 在app.vue中引入css
* font-style:normal,italic,oblique
* font-weight:
* font-size:

## 导航栏菜单实现
* 一级菜单使用ul li a结构
* 二级菜单使用li a与ul
* 清除ul原有样式 list-style-type:none；margin，padding：0
* li左浮动，从而横向排列
* li a样式：text-decoration:none;
* a:hover:background-color:
* ul本身是块级元素，不需要在外层套容器了
* 垂直居中的处理
	* a标签是内联元素，设置height不会生效
	* 因此本质是块ul 中的块li 中的行内元素a居中问题
	* 设置li的height和line-height可居中
	* 将a设置为行内块元素

## 登陆头像
* 圆形头像：img添加border-radius:50%

## 阴影box-shadow
* `box-shadow: h-shadow v-shadow blur spread color inset;`
* [教程](https://www.cnblogs.com/wuchuanlong/p/5980766.html)

## CSS设置z轴不起作用
* z-index仅在position为relative/absolute/fixed的元素上生效
* 其只能决定父容器中，同级子元素的堆叠顺序
* z-index的值不能带px，否则无效

## css属性选项
* cursor属性
	* pointer,手指

## 怎样画出好看的边框
* 阴影法:box-shadow
	* 设置`box-shadow:1px 1px 10px 5px rgba(0, 0, 0, 0.1);`
	* [detail](https://www.cnblogs.com/sapho/p/5481257.html)

## CSS动画与过度
* transition:
* display与Transition的冲突:当display：none；时，是无法设置过度的。可以改成visibility

## 制作光圈散开的提示效果

## ::after使用情景


## 图片框组件设计：截取类，缩略类
* 截取类：
	* `background-image:url("../test/TestImg/1.jpg");`这里在vue中，写为基于组件的相对地址，在编译后，会去掉地址中的相对部分，图片名前加上publicpath，变成`url(/static/img/1.4e14dc7.jpg)`
    * `background-repeat:no-repeat;`
    * `background-position:left top;`表示对齐方式，图片与容器左边对齐，上边对齐
    * `background-size:cover;`让图片覆盖容器
    * 情景：使用i标签制作小图标

## 使用id与class的选择
* id是独一无二的，class是超过一个的
* 在独立组件开发中，用class，因为独立组件会实例化多个
* 在页面组件中，可以用id，因为一个页面

## 文本的配置
* font-size
* font-weight
* color
* white-space:nowrap
* overflow:hiden


## ::after ::before
* 使用情景
* 使用方法

## 鼠标悬停，图片等比放大
* `transform:scale(1.1);`
* `transition:transform 0.3s`