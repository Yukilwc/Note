# git
## 本地已有工程，推送到github
* 在GitHub网站创建一个同名的空白仓库
* 获取GitHub远程仓库链接`https://github.com/Yukilwc/acgteriri.git`
* 在本地`git init`
* `git add README.md`
* `git commit -m "first commit"`
* `git remote add origin https://github.com/Yukilwc/acgteriri.git`
* `git push -u origin master`

## git推送认证问题
* https
	* 我给我账户的远程仓库提交，直接使用ssh
	* 我给别人远程仓库提交，别人需要添加Collaborators
* ssh：必须在远程仓库添加我本地电脑生成的ssh
* 切换远程仓库url，切换验证协议：`git remote set-url origin [url]
* https每次都需要输入用户名和密码，ssh需要生成和配置，具体见官网`https://help.github.com/en/articles/connecting-to-github-with-ssh`
* 使用https出现的问题见[此处](https://stackoverflow.com/questions/10909221/why-is-github-asking-for-username-password-when-following-the-instructions-on-sc)