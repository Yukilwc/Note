# 分支
## 用法
* 创建
  * `git branch dev`
* 切换
  * `git checkout dev`
* 合并
  * `git merge dev`
* 删除
  * `git branch -d dev`
* 远程冲突
  * 先`git push origin dev`发生冲突
  * 则`git pull origin dev`拉取到本地解决冲突
  * 重新推送
## 原理
* 指针
  * head指针
  * master指针，dev指针
  * 当合并时，移动指针
  * 当出现冲突时，创建新节点，并移动指针
* git rebase
  * 使用另一个分支作为基础，形成支线的节点线
  * 作为合并功能，和git merge原理不同
* git pull
  * =`git fetch + git merge`

## 回退
* `git reset HEAD~1`
* reset与rm的区别
  * reset不会删除文件目录文件，git rm会删除stage和文件目录中的文件