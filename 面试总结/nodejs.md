# ESLint规范
* 条件判断必须是===，不可用==
* 缩进用两个空格，而不是tab
* 行尾不加分号
* 属性值必须是单引号
* 各种空格
* [更详细](https://www.cnblogs.com/-walker/p/8143715.html)

# nodejs优缺点
## 优点
* 单线程，非阻塞，擅长处理高并发访问，不用担心多线程，锁，并发问题
* 海量第三方组件

# libuv多线程

# node架构
* 应用app，内置架构，操作系统
* 内置架构：
  * 核心模块，c++绑定，libuv+http+CAes 

# node核心模块
## EventEmitter
* 使用方法
* 应用
## stream
## FS
## Net
## 全局对象
* process
* console
* Buffer
## 定时功能有哪些
* setTimeout/clearTimeout, setInterval/clearInterval, setImmediate/clearImmediate, process.nextTick

# nodejs event loop
五个阶段都是按照先进先出的规则执行回调函数。按顺序执行每个阶段的回调函数队列，直至队列为空或是该阶段执行的回调函数达到该阶段所允许一次执行回调函数的最大限制后，才会将操作权移交给下一阶段。
每个阶段的简单概要：

timers: 执行setTimeout() 和 setInterval() 预先设定的回调函数。
I/O callbacks: 大部分执行都是timers 阶段或是setImmediate() 预先设定的并且出现异常的回调函数事件。
idle, prepare: nodejs 内部函数调用。
poll: 搜寻I/O事件，nodejs进程在这个阶段会选择在该阶段适当的阻塞一段时间。
check: setImmediate() 函数会在这个阶段执行。
close callbacks: 执行一些诸如关闭事件的回调函数，如socket.on('close', ...) 。
