# express
## 安装express
* `npm init`初始化package.json文件
* `npm install express --save-dev`安装
* `npm express -v`查看安装成功
## 安装生成器
* 生成器用来作为生成脚手架，快速创建一个express工程
* `npm install express-generator -g`
* 必须全局安装，才能包含express命令行工具
* 命令行运行`express -h`,查看安装成功
* `express demo -e`生成工程目录，参数如-e在express -h中可以查看
* 进入目录，`npm install`安装依赖
* 启动：`npm start`

## express-generator目录解析
*   public:  所有的前端静态资源  html css image  js
*  views: 主要放置 ejs 后端模板文件
*  bin: 启动目录 里面包含了一个启动文件 www 默认监听端口是 3000 
*     app.js:  入口文件(主文件) 总路由 (其他的路由 要由它来分配)
*     routes:  放的是 路由 文件 (默认有两个)。  主要用来接收前端发送的请求 响应数据给前端
## dist部署
* public目录是网站根目录
* 单页应用，vue路由失效，与express路由冲突
	* 在vuerouter的history mode下，路由会被express接收，无法找到页面从而404，解决方法
		* 配置express，令其接收到所有路由，都统一返回index.html
		* app.js中
		* `var history=require('connect-history-api-fallback');`
		* `app.use(history());`
		* `app.use(express.static(path.join(__dirname, 'public')));`此配置已必须在history()配置之后！！
		* 参考[1](https://blog.csdn.net/qq846294282/article/details/78771673) [2](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90) [3](https://github.com/bripkens/connect-history-api-fallback)

## express断点调试