# mongodb
## 安装与部署
* [detail](https://www.cnblogs.com/best/p/6212807.html)
* 下载msi[安装包](http://www.mongodb.org/downloads)并安装
	* 不要勾选install mongodb compass，这是图形化工具
* 配置运行环境
	* 选择存放数据的文件夹，路径全英文，如`F:\data`
	* 创建配置文件，配置输出数据和日志的位置
		* 打开安装目录下`\MongoDB\Server\3.4\bin`,新建一个mongo.config的文件
		* 配置数据库目录：`dbpath=C:\data\db`
		* 配置日志输出文件：`logpath=C:\data\log\db.log
	* 安装windows服务
		* cmd进入`\MongoDB\Server\3.4\bin`下
		* 运行`mongod --config "C:\Program Files\MongoDB\Server\3.4\bin\mongo.config" --install
	* 添加环境变量，PATH中加入"C:\Program Files\MongoDB\Server\3.4\bin"路径。
	* 启动和停止服务：
		* `net start mongodb`
		* `net stop mongodb`
		* 如果拒绝访问，则需要用管理员打开cmd
		* 服务没有响应控制功能：路径出问题了，`sc delete mongodb`,重新安装win服务。config文件内容格式很容易出问题。
	* 执行 `mongod.exe`
	* 执行 `mongo`，之后就进入mongo操作的命令行中，执行数据库操作，例如`show dbs`

* 可视化工具
	* [robomongo](https://robomongo.org/download)
	* [adminmongo](https://adminmongo.markmoffat.com/) 
		* [install](https://adminmongo.markmoffat.com/docs/)
## connectionstring
* [format](https://docs.mongodb.com/manual/reference/connection-string/)
* [detail](https://www.cnblogs.com/ontheroad_lee/p/3684280.html)
* 举例 `mongodb://mongodb0.example.com:27017/admin`
* 默认端口号：27017 任何人都可以连接，没有认证
* 端口号：28017 是一个mongod自带的web监控界面。从中可以获取到数据库当前连接、log、状态、运行系统等信息

## 使用mongose操作mongodb

## api设计
* db.js:职责是负责数据库连接配置，返回mongose对象
* schema属性，职责是定义一个框架，模板，用来后面构造model
* model模型，将schema编译成model，这个过程中，connection被建立，名字是model的名字加一个s，
* document：作为文档型数据库mongodb的基本存储单位
* connection
* mongodb中只有document和connnection，而schema和model是用来生成它们的工具
* schema是定义了document,但无法操作
* 一个connection包含多个document
* 定义schema可用的数据类型
* 文件：
	* db.js
	* schema构建
	* 从schema获取model，然后使用


## mongodb基本操作
* 最初的权限：
	* 默认无需验证，可以直接连接
* 用户设定，权限设定：
	* 超级管理员
		* 
	* 一个数据库的用户：
* 创建数据库
* 创建文档