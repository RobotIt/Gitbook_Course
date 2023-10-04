# Git常用指令

### 1 使用远程仓库

1 Git 全局设置
创建版本库之前，首先要进行 Git 全局设置。 因为使用了`--global`参数，这个设置一次即可，所有版本库都会使用这个参数
```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

2 创建版本库  
第一步：创建空目录
```
cd ~
mkdir GitRepo
```

第二步：通过`git init`命令把这个目录变成 Git 可以管理的仓库
```
cd GitRepo
git init
```

3 把文件添加到版本库
```
touch README.md
git add README.md
```

4 提交文件到暂存库
```
git commit -m "first commit"
```

5 添加SSH Key  
第一步：创建SSH Key
在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件。如果已经有了，可直接跳过此步骤。如果没有，打开终端，创建SSH Key：
```
ssh-keygen -t rsa -C "youremail@example.com"
```
  
第二步：添加SSH Key
登陆GitHub，打开“Account settings”，“SSH Keys”页面。然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容。点“Add Key”，你就应该看到已经添加的Key。

6 添加远程库  
第一步：新建仓库
登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库。在Repository name填入`GitRepo`，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库。
  
第二步：关联远程仓库
把一个已有的本地仓库与远程仓库关联，把本地仓库的内容推送到GitHub仓库。在本地的`GitRepo`仓库下运行命令：
```
git remote add origin git@github.com:YourGitRepoName/gitrepo.git
```
远程库的名字就是`origin`，这是**Git默认的叫法**，也可以改成别的，但是`origin`这个名字一看就知道是远程库。后面的 URL 使用 HTTPS 或者 SSH 都可以，一般使用 SSH。

7 本地推送到远程  
执行完上述步骤，就可以把本地库的所有内容推送到远程库上：
```
git push -u origin master
```
备注：
> 第一次推送时使用`-u`参数，用于将本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令，不使用`-u`参数
> 当你第一次使用Git的`clone`或者`push`命令连接GitHub时，会得到一个警告。这是因为 Git 使用 SSH 连接，而 SSH 连接在第一次验证 GitHub 服务器的 Key 时，需要你确认 GitHub 的 Key 的指纹信息是否真的来自 GitHub 的服务器，输入`yes`回车即可。


8 拉取远程仓库内容  
语法：git pull <远程主机名> <远程分支名>:<本地分支名>
```
git pull origin next:master
```

9 查询和删除远程仓库  
查询远程仓库：
```
git remote -v
```

删除远程仓库：
```
git remote rm origin
```

10 从远程仓库克隆  
```
mkdir RemoteRepo
cd RemoteRepo
git clone git@github.com:YourGitRepoName/RepoName.git
```

### 2 Git Cheat Sheet

#### 1 GIT BASICS

|  命令   | 解释  |
|  ----  | ----  |
| `git init <directory>` | 在指定的目录下创建一个空的 git repo。不带参数将在**当前目录**下创建一个 git repo。 |
| `git clone <repo>`  | 克隆一个指定repo到本地。指定的`<repo>`可以是由 HTTP 或 SSH 指定的远程仓库路径或者本地文件系统。 |
| `git add <directory>`  | 将指定目录的所有修改加入到下一次 commit 中。把 `<directory>` 替换成 `<file>` 将添加指定文件的修改。 |
| `git commit -m "<message>" `| 提交暂存区的修改，使用指定的 `<message>` 作为提交信息，而不是打开文本编辑器输入提交信息。 |
| `git status` | 显示哪些文件已被 staged、未被 staged 以及未跟踪 untracked。 |
| `git log` | 以缺省格式显示全部 commit 历史。更多自定义参数请参考后续部分。 |
> repo 表示 仓库

#### 2 GIT DIFF

|  命令   | 解释  |
|  ----  | ----  |
| `git diff` | ⽐较⼯作区和暂存区的修改。 |
| `git diff HEAD` | ⽐较⼯作区和上⼀次 commit 后的修改。 |
| `git diff --cached`  | ⽐较暂存区和上⼀次 commit 后的修改。 |


#### 3 UNDOING CHANGEAS

|  命令   | 解释  |
|  ----  | ----  |
| `git revert <commit>` | 对指定 `<commit>` 创建⼀个 undo 的 commit，并应⽤到当前分⽀。 |
| `git reset <file>`  | 将 `<file>` 从暂存区移除，但保持⼯作区不变。此操作不会修改⼯作区的任何⽂件。 |


#### 4 REWRITING GIT HISTORY

|  命令   | 解释  |
|  ----  | ----  |
|` git commit -m <message> --amend`  | 将当前 staged 修改合并到最近⼀次的 commit 中。 |
| `git rebase <base> ` | 基于 `<base>` 对当前分⽀进⾏ rebase。`<base>` 可以是 commit、分⽀名称、tag 或相对于 HEAD 的 commit。 |
| `git reflog`  | 显示本地 repo 的所有 commit ⽇志。 |


#### 5 GIT BRANCHES

|  命令   | 解释  |
|  ----  | ----  |
| `git branch ` | 显示本地 repo 的所有分⽀。 |
| `git switch -c <branch> ` | 创建并切换到⼀个新的名为 `<branch>` 的分⽀。去掉 `-c` 参数将切换到⼀个已有分⽀。 |
| `git merge <branch> ` | 将指定 `<branch>` 分⽀合并到**当前分⽀**。 |


#### 6 REMOTE REPOSITORIES

|  命令   | 解释  |
|  ----  | ----  |
| `git remote add <name> <url>`  | 添加⼀个新的远程连接。添加后可使⽤ `<name>` 作为指定 `<url>` 远程连接的名称。 |
| `git fetch <remote> <branch>`  | 从指定 `<remote>` 抓取指定 `<branch>` 的所有 commit 到本地 repo。去掉 `<branch>` 将抓取远程所有分⽀的修改。 |
| `git pull <remote> ` | 从指定 `<remote>` 抓取所有分⽀的 commit 并⽴刻合并到本地 repo。 |
| `git push <remote> <branch> ` | 将本地指定 `<branch>` 推送到指定远程 `<remote>`。如果远程没有对应的分⽀，将⾃动在远程创建此分⽀。 |


#### 7 GIT CONFIG

|  命令   | 解释  |
|  ----  | ----  |
| `git config --global user.name <name> ` | 配置当前⽤户名，使⽤`--global`参数将针对当前系统登录⽤户⽣效。 |
| `git config --global user.email <email> ` | 配置当前⽤户Email。 |
| `git config --global alias.<alias-name> <git-command>`  | 配置⼀个 git 命令的快捷⽅式。例如：配置”alias.glog log --graph --oneline”使”git glog”相当于”git log --graph --oneline”. |
| `git config --system core.editor <editor>`  | 配置⽂本编辑器，例如vi，在必要时⾃动打开此⽂本编辑器。 |
| `git config --global --edit`  | 打开当前⽤户的 git 全局配置并编辑。 |


#### 8 GIT LOG

|  命令   | 解释  |
|  ----  | ----  |
| `git log -<limit> ` | 限制 log 的显示数量。例如：”git log -5” 仅显示最新 5 条 commit。 |
| `git log --oneline`  | 每⾏显示⼀条commit。 |
| `git log --author="<pattern>" ` | 按提交者名字搜索并显示 commit。 |
| `git log --grep="<pattern>" ` | 按指定内容搜索并显示 commit。 |
| `git log <since>..<until>`  | 显示指定范围的 commit。范围参数可以是 commit ID、分⽀名称、HEAD或任意相对位置。 |
| `git log -- <file> ` | 仅显示包含指定⽂件修改的 commit。 |
| `git log --graph`  | 使⽤`--graph`参数显示图形化的 branch 信息。 |


#### 9 GIT RESET

|  命令   | 解释  |
|  ----  | ----  |
| `git reset ` | 移除所有暂存区的修改，但不会修改⼯作区。 |
| `git reset --hard ` | 移除所有暂存区的修改，并强制删除所有⼯作区的修改。 |
| `git reset <commit`>  | 将当前分⽀回滚到指定 `<commit>`，清除暂存区的修改，但保持⼯作区状态不变。 |
| `git reset --hard <commit> ` | 将当前分⽀回滚到指定 `<commit>`，清除暂存区的修改，并强制删除所有⼯作区的修改。 |


#### 10 GIT REBASE

|  命令   | 解释  |
|  ----  | ----  |
|`git rebase -i <base>`|以交互模式对当前分⽀做rebase。|



#### 11 GIT PULL

|  命令   | 解释  |
|  ----  | ----  |
|`git pull --rebase <remote>`|抓取所有远程分⽀，并以 rebase 模式并⼊本地 repo ⽽不是 merge。|

#### 12 GIT PUSH

|  命令   | 解释  |
|  ----  | ----  |
|`git push <remote> --force`|将本地分⽀推送到远程。**不要使⽤`--force`参数**，除⾮你完全明⽩此操作的后果。|
|`git push <remote> --tags`|使⽤ push 命令并不会⾃动将本地 tag 推送到远程。加上`--tags`参数会将所有本地 tag 推送到远程。|



### 3 工作区、版本库和暂存区示意图

![](images/2.4.png)