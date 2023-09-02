### 1 安装Vscode
#### 第1步 下载vscode
> 官方网址：https://code.visualstudio.com/
> 国内镜像网址：https://fishros.com/docs/page/#/tools/install-vscode/%E5%AE%89%E8%A3%85VsCode

进入网站，如下图，下载图片中的.deb格式文件：  
![picture1](images/1.1.png "vscode download")
#### 第2步 安装vscode
cd到下载文件所在的目录，打开终端，执行`sudo apt install ./第1步下载的文件`。
![picture1](images/1.2.png "vscode download")
例如：第1步下载的文件名称为`code_1.59.1-1629375198_amd64.deb`，则执行`sudo apt install ./code_1.59.1-1629375198_amd64.deb`
在终端窗口输入代码如下图：
![picture1](images/1.3.png )

#### 第3步 安装扩展
![picture1](images/1.4.png )
1. C/C++ @Microsoft
2. C/C++ Extension Pack  @Microsoft
3. Chinese(Simplified)(简体中文)  @Microsoft
4. CMake  @twxs
5. CMake Tools  @Microsoft
6. ROS  @Microsoft
7. Python  @Microsoft
8. Pylance  @Microsoft
9. Markdown All in One  @Yu Zhang
10. Markdown Preview Enhanced  @Yiyi Wang
11. vscode-icons  @VSCode Icons Team
> 备注：@Microsoft表示发行商为Microsoft，见上图



### 2 安装ROS
#### 第1步
#### 第2步 
#### 第3步 
#### 第4步 
#### 第5步 




### 3 安装terminator

在终端输入`sudo apt install teminator`，即可完成安装
![picture1](images/3.1.png )



### 4 安装Anaconda
#### 第1步
进入Anaconda官网，下载Anaconda安装包。
>官方网址：https://www.anaconda.com/

![picture1](images/4.1.png )
![picture1](images/4.2.png )
等待下载完成。
![picture1](images/4.3.png )
#### 第2步 
在安装包位置右键，选择在终端打开,输入bash Ana，后续用Tab进行补齐代码，得到下载的Anaconda版本号相关代码，`bash Anaconda3-2023.03-1-Linux-x86_64.sh`。
![picture1](images/4.4.png )
如无特殊情况，一路回车+yes。
#### 第3步
安装完成后，弹出conda init选项，此选项用于conda初始化，用于配置conda环境变量，选择yes即可。
安装完成后，会默认进入base环境，如需取消自动进入base环境，在终端中输入以下代码：
`conda config --set auto_activate_base false`
#### 第4步 
完成上述操作后无异常，即完成了Anaconda安装。若出现初始化异常，可尝试在主文件夹中使用`ctrl+h`快捷键显示隐藏文件。
![picture](images/4.5.png)
打开.bashrc文件，在文档最下方加入一下代码并保存。
```
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/jayson/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/home/jayson/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/home/jayson/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/jayson/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

source /opt/ros/noetic/setup.bash

# >>> fishros scripts >>>
export PATH=$PATH:/home/jayson/.fishros/bin/ 
# <<< fishros scripts <<<
```
结果如下图所示。
![picture1](images/4.6.png )
#### 第5步  
下面进行一些Anaconda命令说明。
用法1：新建一个虚拟环境
`conda  create -n python38  python=3.8`
用法2：切换（激活）虚拟环境
`activate python37`
用法3：取消激活虚拟环境
`deactivate python37`
用法4：安装第三方包
`conda install requests`
用法5：更新requests包
`conda update requests`
用法6：进入ANACONDA默认base环境的python解释器

```
activate base
python
```

用法7：删除第三方包
`conda remove requests`
用法8：查看虚拟环境列表
`conda env list`
用法9：查看当前环境下的pip安装的包
`pip list`
用法10：删除某个虚拟环境（包括所有包）
`conda remove -n python37 --all`
注意，这里如果是在虚拟环境本身，是无法删除当前虚拟环境的。要切换到另外一个虚拟环境（activate base）。这里的python37是之前新建的虚拟环境名称；base是系统自带默认的环境。
用法11：删除虚拟环境的某个包
`conda remove --name python37 xlrd`
`pip uninstall xlrd`（删除默认pip环境下的包，有时候包没有装到base下面）
用法12：更新包
`conda update conda`          #基本升级
`conda update anaconda`       #大的升级
`conda update xxx `           #更新xxx文件包
`conda upgrade --all` 	      # 升级所有包
用法13：导出当前环境的包信息
`conda env export > environment.yaml `
用法14：用配置文件创建新的虚拟环境
`conda env create -f environment.yaml`
用法15：查看ANACONDA版本
`conda --version`

### 5 Anaconda换源
#### 第1步
在主目录使用`ctrl+h`显示隐藏文件，查看主目录下是否有`.condarc`文件，如没有`.condarc`文件，在终端中使用`sudo touch .condarc`命令创建`.condarc`文件。
#### 第2步 
打开`.condarc`文件后将以下代码覆盖到该文件夹并保存。
```
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud

```
结果如下图所示。
![picture1](images/5.2.png )
#### 第3步 
在终端运行`conda clean -i`清除索引缓存，保证使用的是镜像站提供的索引。
#### 第4步 
在终端运行`conda create -n myenv numpy`回车。
![picture1](images/5.3.png )
输入y回车，一路确认即可。


### 6 pip换源
#### 第1步 
创建.pip目录，cd到home目录，在终端中执行以下命令
`mkdir .pip` 

#### 第2步 
cd 到 .pip 目录，新建pip.conf 文件，在终端中执行以下命令：
`sudo touch pip.conf`
#### 第3步 
更新pip.conf文件内容，在终端中输入以下命令：
`sudo gedit pip.conf`
#### 第4步 
在弹出的文件中填写以下内容
```
[global]
index-url=https://pypi.tuna.tsinghua.edu.cn/simple
timeout = 6000

[install]
trusted-host=pypi.tuna.tsinghua.edu.cn
disable-pip-version-check = true

```
#### 第5步 
保存并测试，在终端中输入以下命令：
`pip install numpy`
换源成功后，indexes后显示清华源网址，如下图所示。
![picture1](images/6.1.png )




### 7 安装FIrefox浏览器
#### 第1步
进入Firefox官网，下载Firefox，下载获得Firefox压缩包。
官方网址：http://www.firefox.com.cn/
![picture1](images/7.1.png )
#### 第2步 
在主目录下新建`Software`文件，将firefox压缩包移动到主目录下的`Software`文件中。
![picture1](images/7.3.png )
![picture1](images/7.2.png )
#### 第3步 
打开`Software`文件，右键压缩包并点击提出到此处，将压缩包解压，得到下图解压文件。
![picture1](images/7.4.png )
#### 第4步
卸载ubuntu自带的Firefox软件，在终端中输入以下命令：
`sudo apt purge firefox`
#### 第5步 
创建Firefox快捷方式，总共有3个步骤：
1. 进入/usr/share/applications目录，新建firefox.desktop文件，在终端中执行以下命令：
`sudo touch firefox.desktop`
2. 更新firefox.desktop文件内容，在终端中输入以下命令：
`sudo gedit firefox.desktop`，在弹出的窗口中输入以下内容
```
[Desktop Entry]
Name=firefox
Name[zh_CN]=火狐浏览器
Comment=火狐浏览器
Exec=/opt/firefox/Firefox-latest-x86_64/firefox/firefox
Icon=/opt/firefox/Firefox-latest-x86_64/firefox/browser/chrome/icons/default/default128.png
Terminal=false
Type=Application
Categories=Application;
Encoding=UTF-8
StartupNotify=true

```
> 说明：需要修改两个地方
> 1. 将Exec的路径更换为firefox的解压缩路径（即你电脑上的存放路径），例如：本机的firefox压缩包存放在home目录的Software中，则该路径为`/home/jayson/Software/Firefox-latest-x86_64/firefox`，用此路径替换上述命令中的`/opt/firefox/Firefox-latest-x86_64/firefox`
> 2. 将Icon的路径更换为firefox的解压缩文件夹中default128.png路径，例如：本机的firefox图片存放在firefox的default文件中，则该路径为`/home/jayson/Software/Firefox-latest-x86_64/firefox/browser/chrome/icons/default`，修改结果如下图所示。
> ![picture](images/7.5.png)

### 8 安装搜狗输入法
#### 第1步
#### 第2步 
#### 第3步 
#### 第4步 
#### 第5步 


### 9 安装wps

进入ubuntu的应用商店，搜索wps并下载安装即可。
![picture1](images/9.1.png )


### 10 安装微信
#### 第1步
#### 第2步 
#### 第3步 
#### 第4步 
#### 第5步 


### 11 安装驱动
进入系统的软件和更新，并点击附加驱动，选择合适的驱动并应用更改即可。
![picture1](images/11.1.png )
其中tested为经过测试后的推荐驱动，根据电脑性能进行驱动版本的选择，如性能较差，可安装470版本的驱动。





