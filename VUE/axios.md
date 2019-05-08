# axios
## 基础知识
* 是基于promise 的HTTP库，用在浏览器和nodejs中。
* 安装
	* `npm install axios`
* 基于promise，可以使用then,catch,all等方法
* 使用：
	* `axios(config)`
	* config对象可包含：
		* method
		* url 只有她是必须的
		* data
		* 更多配置[参考](https://www.kancloud.cn/yunye/axios/234845)
* 别名
* 创建实例`axios.create();`
* response结构：
	* data
	* status
	* statusText
	* headers
	* config

* 全局axios配置
	* `axios.default.basefURL='';`
* 拦截器 `axios.interceptors`
* 错误处理catch
## 通用api构建
* 封装的流程 [参考](https://juejin.im/post/5b55c118f265da0f6f1aa354)
	* 封装base
		* baseURL 可以按开发环境和生产环境配置
		* timeout 
		* headers.post post请求头
	* interceptors.request
	* interceptors.response
	* export get请求函数
	* export post请求函数
	* 请求失败后的统一错误处理
	* api挂载到vue.prototype上
* 封装架构

## get与post的传入参数问题
* axios.get()参数
	* 1 url字符串
	* 2 一个对象{}
		* params：{}
			* 内部是必须是一个无格式对象(plain object)或 URLSearchParams 对象

## http解析
* Content-Type

## qs模块