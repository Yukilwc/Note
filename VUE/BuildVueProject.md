## 工程构建
* nodejs安装
* vue-cli安装
* `vue init webpack`
* `npm install`
* `npm run dev`

## 工程目录结构
## 文件夹
* *build*:	webpack项目构建相关代码
* *config*：	配置目录，端口号等
* *node_modules*：	npm加载的项目依赖模块
* *src*：	开发目录
	* *assets*	：存放图片
	* *components*：	存放组件文件
	* *App.vue*:	项目入口文件，相当于一个组件。
	* *main.js*：	项目核心文件
* *static*：		静态资源目录，如图片，字体等。
* *index.html*：		首页入口文件
* *package.json*：	项目配置文件

##前端工程构建流程参考
1. vue-cli构建脚手架
2. 开始自定义src目录结构
	* App入口文件 app.vue
	* Api接口调用工具文件夹  api
	* 组件文件夹 component
	* 项目配置文件夹 config
	* 子路由文件夹 frame
	* 项目配置文件 main.js
	* 页面组件文件夹 page
	* 路由配置文件夹 router
	* 基础样式存放目录 style
		* 基础样式文件夹 base
		* 内容页面样式文件夹 scss
		* 主样式文件 style.scss
	* 常用工具文件夹 utils

## 不使用vue-cli构建vue工程
* `npm init`
* `npm install webpack --save-dev`
* `npm install webpack-dev-server`
* 创建webpack.config.js文件
* 配置package.json的script用来启动服务器 
* 创建核心配置文件main.js
* 配置webpack，入口，出口
* 创建入口文件index.html
* npm run dev
* 配置loaders
* module-rules-test-use[从后往前编译]

##store的配置
* 引入 `import Vuex from 'vuex' `
* 在vue中注册新组件 `Vue.use(Vuex)`
* 配置storeConfig对象：
	* state：数据库
	* action：异步
	* mutation：修改state的唯一接口
	* getter：获取依赖state的数据
* 实例化store对象` const store=new Vuex.Store(storeConfig)`
* 在Vue顶级实例中注册

## router的配置
* 引入`import VueRouter from 'vue-router'`
* 在Vue中注册新实例：`Vue.use(VueRouter)`
* 配置routes对象
	* path：
	* component：
	* children
* 配置routerConfig对象：
	* routes
	* mode：'history'
* 构建router实例：`const router=new VueRouter(routerConfig)`
* 在Vue顶级实例中注册
* router-view
* router-link

## import 路径问题
* 相对路径
* 使用@

## publicpath公式
* 静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
* vue-cli：图片路径 
	* 开发模式： / + static +img/[name].[hash:7].[ext]
	* 生产模式：/  +  static +img/[name].[hash:7].[ext]


## vue动态加载图片问题
* assets中的图片，被作为模块，由webpack的loader进行加载处理，需要用相对路径引入
* static中的图片，不做处理，build时直接复制到制定路径下，使用绝对路径引入
* 解决方法：
	* 在assets中的图片，使用require载入为模块，使用相对路径`logoPath:require("../assets/logo.png"),`
	* 在static中的图片，使用绝对路径即可`logoPath:"/static/logo.png",`


## npm全局安装与本地安装
* 本地：`npm install vuex --save-dev`
* 全局`npm install vuex --global`
* 设置/获取全局安装的路径`npm config set/get prefix`


## vue路由跳转
* 使用`<router-link to="">`
* this.$router.push() 本质和router-link相同，都是向history添加一条。点击浏览器返回按钮，会回到上一个页面。
* this.$router.replace()
* this.$router.go()

## data computed method使用情景
* 组件中的data，可以直接读写，当template直接需要时，不需要任何处理，使用data
* 如果template中的表达式数据是动态的，需要使用computed，其使用缓存，为响应式，可变化。其必定要返回一个值。
* method主要用于工具方法，处理某些数据，其为方法，写不写括号都行。其可以不返回值。
## vue项目在chrome中调试打断点
* webpack-dev-server生成了大量冗余代码，导致无法调试
* 在chrome中安装使用vue.js devtools
	* 不能打断点，只能看状态和数据
* 使用vscode进行调试,安装debugger for chrome
	* 在vscode中安装debugger for chrome
	* 在debugger界面选择chrome环境
	* 配置launch.json文件[details](https://blog.csdn.net/yequnat/article/details/81735556)
	* 之后，再次启动webpack-dev-server，这次可以选择以vscode的chrome为前端进行调试

* 一些断点调试问题[detail](https://www.jianshu.com/p/d3329e9cd126)

## 调试方法
* console.log();
* 需要的地方手动写debugger

## 生命周期

## 一些坑
* methods中的方法不要使用箭头函数定义，因为其this作用域会出错。即不可使用a:()=>{},也不可使用a(){},仅可用a:function(){} ,[details](https://cn.vuejs.org/v2/api/#methods)
* 监听鼠标悬停事件时，原生事件是mouseover而不是hover

## vue文件中的注释
* html:<!--   -->
* css,stylus,js: //   /*  */

## vue操作样式style
* 对象方式：`:class="{'openPhoto':isShowInfo}"`，花括号内是键值对的样式名：bool值
* 数组方式`:class="[class1,class2]"`,方括号内是字符串组成的数组

## vue事件
* vue监听事件时，需要使用event，参数写作$event.`@mouseout="handleOut($event)"`

## 处理大量图片的懒加载，预加载
## html模板引擎的意义
## nginx反向代理
## nodejs前后端分离项目部署