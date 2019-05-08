# webpack
## webpack的sourcemap
* 配置：config/index.js dev devtool:'cheap-module-eval-source-map' 此处有七种配置
* 只要包含source-map，就能从打包的文件，映射会源文件

## 判断环境
 `
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = '';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = '';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = '';
}
 `

## 快速删除node_modules
*   `cnpm install rimraf -g`

*  `rimraf node_modules`