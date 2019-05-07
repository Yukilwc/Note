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
	* mutation：修改state的唯一接口,内部方法参数：(state,data)
	* getter：获取依赖state的数据,内部方法参数：(context,data)
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

## export使用
* export/export default后面跟随的必须是一个{}包围的对象，不可以直接export a，需要export {a}

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
* vue为每个组件的css的class，id都添加hash值，保证仅组件内生效，一个组件的多个实例，他们的hash是相同的。
* vuex的state，在组件中使用时需要用computed而不是data
	* [detail](https://segmentfault.com/q/1010000009696383)
	* data引用store.state.info,当info变化时，data作为引用，并没有发生变化，并不会追踪依赖。
	* computed会追踪依赖，检测到其引用的数据本体变化时，则会触发重新计算。
	* 那data设计的职责是什么？它的设计目标就是保存组件的局部状态数据而已

## vue文件中的注释
* html:<!--   -->
* css,stylus,js: //   /*  */

## vue操作样式style
* 对象方式：`:class="{'openPhoto':isShowInfo}"`，花括号内是键值对的样式名：bool值
* 数组方式`:class="[class1,class2]"`,方括号内是字符串组成的数组

## vue事件
* vue监听事件时，需要使用event，参数写作$event.`@mouseout="handleOut($event)"`

## 处理大量图片的懒加载lazy load，预加载
* lazy load
	* 自己实现
		* data-src
	* vue库
## html模板引擎的意义
## nginx反向代理
## nodejs前后端分离项目部署

## vuex异步
* [detail](https://vuex.vuejs.org/zh/guide/actions.html)
* vue的action负责异步方法
* action并非直接改变state，而实通过提交mutation。
	* `context.commit('pushCollects',item);`
	* 函数接受一个与 store 实例具有相同方法和属性的 context 对象
* 触发action中的方法
	* `store.dispatch("AsyncAction")`
* 异步处理
	* 有异步，必然有操作是需要异步完成后，才进行
	* store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：
	* 首先，vuex action的异步函数，需要`return new promise(AsyncFuncFromApi)`
	* 在其他组件中调用：`$store.dispatch('actionA').then()`
	* dispatch中可以触发多个异步，当全部异步完成后，才会执行回调

## vuex使用的api设计
* 参数设计：
	* url
	* param
	* success backfunc:用于异步操作成功后执行，异步操作完成后必然提供数据，
	* failure backfunc
* 异步操作中
	* 回调地狱没有返回值，是通过回调函数操作数据
	* 使用promise有返回值，返回一个promise的对象，传递的数据通过resolve（data),then(data=>log(data))获取
* 一个异步操作的嵌套调用
* 多个异步操作（有顺序）的[嵌套调用](https://www.cnblogs.com/momozjm/p/8603007.html)

## vue生命周期与异步获取数据加载
* 生命周期
	* BeforeCreate 无数据，无dom
	* created	无数据，无dom
	* BeforeMount
	* mounted	挂载dom完毕
	* beforeUpdate
	* updated
	* beforeDestory
	* destoryed
* 异步获取数据放在哪个生命周期合理?
* [detail](https://blog.csdn.net/weixin_34050005/article/details/87964047)
	* 异步函数跟同步函数的不同之处，最大的应该就是异步函数会等到所有同步函数执行完成之后再执行
	* 因此，生命周期执行完成后，才会执行异步操作
	* 放在created阶段即可，需要将生命周期用到的数据初始化，防止undefined。注意获取的数据不可放在组件的data，因为此时data并未加载
	* 必然出现，vue需要renderdom但是当前却没有data

## vue全局变量
*  `Vue.prototype.GLOBAL = global；`

## css中的url
*  background-image:url()
*  动态绑定时出现的[问题1](https://blog.csdn.net/qq_32963841/article/details/81512044) [2](https://blog.csdn.net/qq_35393869/article/details/80333564)
*  在style标签中的css，使用background-image:
*	html内联样式
*	html动态切换样式
*	发现的
	*	对于使用v-bind绑定的样式中的url，webpack的loader不会做处理
		*	`:style="{'background-image':imgUrl}"`
		*	`imgUrl:url("../assets/loading.gif")`
		*	前端工程获取的是`http://localhost:8080/assets/loading.gif`
		*	也就是，通过css设定的图片，会被url-loader打包近制定目录，并将路径替换为正确绝对路径
		*	而通过js直接引入的图片，则不会被url-loader打包，会保持原样，维持一个工程路径，而不是打包后的路径，在前端浏览器的static/img文件夹中，根本不会出现此图片
	* 在js中引入图片，需要用`"url("+require("../assets/loading.gif")+")";`
		* 这仅仅适用于路径是一个静止路径，不能使用动态路径变量
		* 推测，require的执行发生在服务器端打包过程，此时vue并未实例化，也就没有数据，在require中使用vue的data，自然无法找到此模块。因此，图片路径只能填写，在工程目录下，可以找到的路径，而不能是动态路径。
	* 因此图片资源分为两种
		* 一种是静态的，在服务器打包是，进入dist/static/img文件夹的。例如，各种不变的图标，logo
		* 一种是动态的，并不会进入服务器打包流程，也不存在于dist文件夹，它从数据库，从js文件流获取，发送到前端。例如，登陆后的头像，每日刷新的图片排行榜。这些是不能打包的。
	* 关于动态图片的解决方案
		* 1 把动态图片资源放在static文件夹下，此文件夹即便没有主动引入，也会被拷贝一份进入打包后文件。在CopyWebpackPlugin中配置
		* 2 如此，前端从后端获取绝对的图片路径，注入到url中

## static文件夹和assets文件夹中的图片，使用情景

## npm run build
* 编译前清除dist
* 去除dist中冗余的map文件
* 生产环境与开发环境的路径问题
* 这个过程，webpack给assets中的图片如何处理路径？
	* 生产环境，即production，publicpath被配置为：config.build.assetsPublicPath，其值为'/',
	* 生产环境，也就是build，处理图片路径的url-loader，name配置为：config.build.assetsSubDirectory(值为'static')+'img/[name].[hash:7].[ext]'
	* 生产环境，output的path配置为config.build.assetsRoot（值为../dist）,其负责输出js，不影响图片路径
	* 结论，build过程中，出现的图片url，配替换路径为：/static/img/namehash.jpg
	* 因此，生成的dist中的static文件夹，必须放在express工程中的public文件夹下面，才能保证图片顺利获取。
* static中的图片路径如何和生产中统一？

