# less

## vue使用less
* 如果在.vue文件中使用，
	* 安装less `npm install less less-loader --save-dev`
	* 在vue文件的style标签添加属性`lang="less"`

* 如果不在vue文件中使用或引用，则除了上面的操作，还需要配置webpack的module.rules