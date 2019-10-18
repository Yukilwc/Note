## vscode 调试 egg
### 使用debug: toggle auto attach
1. 在vscode中，ctrl+shift+p, 然后运行debug: toggle auto attach
2. 会在根目录下生成.vscode/settings.json, 文件内配置为 on
3. 注意，此时不可以存在.vscode/launch.json
4. 在vscode的terminal直接运行npm run debug
5. 运行后即可打断点，并且在debug console中可以看到对象化的console.log输出

### 配置 launch.json
1. 配置链接： https://eggjs.org/zh-cn/core/development.html
2. 直接一键F5启动

### 直接使用vscode-eggjs
