# 1 Linux命令基础：文件目录操作命令

### 1.1  ls命令

- ls 命令是 linux 下最常用的命令，ls 命令就是 list 的缩写
- ls 用来打印出当前目录的清单。如果 ls 指定其他目录，那么就会显示指定目录里的文件及文件夹清单 
- 通过 ls 命令不仅可以查看 linux 文件夹包含的文件，而且还可以查看目录和文件权限等信息

#### 1.1.1  **命令格式**

> ls  [选项] [文件]
>
> 备注：[]表示其为可选参数

#### 1.1.2 **常用参数**

| 参数   | 描述                                                         |
| ------ | :----------------------------------------------------------- |
| -a     | –all 列出目录下的所有文件，包括以 . 开头的隐含文件           |
| -l     | 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来 |
| --help | 帮助信息                                                     |

- **备注：**在linux系统中，通过“命令 --help”可获取该命令的帮助信息

#### 1.1.3  **常用范例**

**例一：**列出`/home/`文件夹下的所有文件和目录的详细资料，可以使用如下命令：

```shell
ls -a -l /home
ls -al /home
```

上面两个命令执行结果一样，即多个参数可以合并使用，运行结果如下：

```sh
ros@ros-course:~$ ls -a -l /home
总用量 12
drwxr-xr-x  3 root root 4096 6月   4 07:26 .
drwxr-xr-x 25 root root 4096 8月  10 16:45 ..
drwxr-xr-x 31 ros  ros  4096 8月  12 08:25 ros
```

```sh
ros@ros-course:~$ ls -al /home
总用量 12
drwxr-xr-x  3 root root 4096 6月   4 07:26 .
drwxr-xr-x 25 root root 4096 8月  10 16:45 ..
drwxr-xr-x 31 ros  ros  4096 8月  12 08:25 ros
```

- **运行结果说明**：
  - 第1行，ros@ros-course：第一个ros为用户名，ros-course为计算机名称，~$表示普通用户，#表示root用户，具有root权限）
  
  - 第2行，总计(total)
  
  - 第3-5行，文件详细信息，包含7个字段，具体参见[**ls -l 详解**](https://blog.csdn.net/sjzs5590/article/details/8254527)：
  
    ![img](https://gitee.com/qielongfei/typora-image/raw/master/Image/3-10.png)
  
    - 第1字段: 文件属性字段
    - 第2字段：文件硬链接数，链接占用的节点
    - 第3字段：文件（目录）拥有者
    - 第4字段：文件（目录）拥有者所在的组
    - 第5字段: 文件所占用的空间(以字节为单位)
    - 第6字段：文件（目录）最近访问（修改）时间
    - 第7字段：文件名

---

### 1.2  cd命令

- cd 命令是 change directory 的缩写
- cd命令切换当前目录至指定的目录

#### 1.2.1 **命令格式**

> cd [目录名]
>
> 备注：cd后不跟参数，进入主目录

#### 1.2.2 **常用范例**

**例一：**从当前目录进入系统**根目录**，可以使用如下命令：

```sh
cd  /
```

**例二：**从当前目录进入**父目录**，可以使用如下命令：

```sh
cd ..
```

.. 表示父目录，即上一级目录

**例三：**从当前目录进入当前用户**主目录**，可以使用如下命令：

```sh
cd ~
```

~ 表示当前用户主目录，注意它与系统根目录不是同一个概念

**例四：**从当前目录进入**上次所在目录**，可以使用如下命令：

```sh
cd -
```

\- 表示上次进入的目录

---

### 1.3  pwd命令

-  pwd 命令是 Print Working Directory 的缩写
- Linux 中用 pwd 命令来查看“当前工作目录”的完整路径
- 每当在终端进行操作时，都会有一个当前工作目录。在不太确定当前位置时，就可以使用 pwd 来判定当前目录在文件系统内的确切位置

#### 1.3.1 **命令格式**

> pwd [选项]

#### 1.3.2 **常用参数**

| 参数 | 描述                                       |
| ---- | ------------------------------------------ |
| -P   | 显示实际物理路径，而非使用连接（link）路径 |
| -L   | 当目录为连接路径时，显示连接路径           |

#### 1.3.3.**常用范例**

**例一：**显示当前目录所在路径，可以使用如下命令：

```sh
pwd
```

**例二：**显示当前目录的物理路径，可以使用如下命令：

```sh
pwd -P
```

**例三：**显示当前目录的连接路径，可以使用如下命令：

```sh
pwd -L
```

运行结果如下：

```sh
ros@ros-course:~$ cd /usr/local/man
ros@ros-course:/usr/local/man$ pwd
/usr/local/man
ros@ros-course:/usr/local/man$ pwd -P
/usr/local/share/man
ros@ros-course:/usr/local/man$ pwd -L
/usr/local/man
```

<img src="https://gitee.com/qielongfei/typora-image/raw/master/Image/image-20210812110334283.png" alt="image-20210812110334283" style="zoom:80%;" />

---

### 1.4 touch命令

- touch命令用来新建一个不存在的文件，或者修改文件时间戳

#### 1.4.1 命令格式：

> touch [选项] 文件

#### 1.4.2 命令参数：

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -a   | 只更改存取时间                                               |
| -d   | 使用指定的日期时间，而非现在的时间                           |
| -t   | 使用指定的日期时间，而非现在的时间                           |
| -m   | 只更改变动时间                                               |
| -r   | 把指定文档或目录的日期时间，设成和参考文档或目录的日期时间相同 |

#### 1.4.3 使用范例：

**例一**：创建文件log1.log和log2.log：

```sh
sudo touch log1.log log2.log
```

运行结果如下：	

```sh
ros@ros-course:~/ROS_Course$ sudo touch log1.log log2.log
ros@ros-course:~/ROS_Course$ ls -l
总用量 0
-rw-r--r-- 1 root root 0 8月  12 11:44 log1.log
-rw-r--r-- 1 root root 0 8月  12 11:44 log2.log
```

**备注**：sudo命令表示以系统管理者的身份执行指令，经由 sudo 所执行的指令等同于 root 执行

**例二**：创建log3.log，更新log3.log的时间和log2.log时间戳相同：

- 创建log3.log

```sh
ros@ros-course:~/ROS_Course$ sudo touch log3.log
ros@ros-course:~/ROS_Course$ ls -l
总用量 0
-rw-r--r-- 1 root root 0 8月  12 11:44 log1.log
-rw-r--r-- 1 root root 0 8月  12 11:44 log2.log
-rw-r--r-- 1 root root 0 8月  12 11:46 log3.log
```

- 更改log3.log时间与log2.log相同

```sh
ros@ros-course:~/ROS_Course$ sudo touch -r log2.log log3.log
ros@ros-course:~/ROS_Course$ ls -l
总用量 0
-rw-r--r-- 1 root root 0 8月  12 11:44 log1.log
-rw-r--r-- 1 root root 0 8月  12 11:44 log2.log
-rw-r--r-- 1 root root 0 8月  12 11:44 log3.log
```

**例三：设定文件的时间戳：**

```
touch -t 202111142234.50 log1.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ sudo touch -t 202111142234.50 log1.log
ros@ros-course:~/ROS_Course$ ls -l
总用量 0
-rw-r--r-- 1 root root 0 11月 14  2021 log1.log
-rw-r--r-- 1 root root 0 8月  12 11:44 log2.log
-rw-r--r-- 1 root root 0 8月  12 11:44 log3.log
```

- **补充说明：**
  - -t time 使用指定的时间值 time 作为指定文件相应时间戳记的新值。此处的 time规定为如下形式的十进制数:   [[CC]YY]MMDDhhmm[.SS]
  - CC为年数中的前两位，即”世纪数”；YY为年数的后两位，即某世纪中的年数。如果不给出CC的值，则touch  将把年数CCYY限定在1969--2068之内
  - MM为月数，DD为天数，hh 为小时数(几点)，mm为分钟数，SS为秒数。此处秒的设定范围是0--61，这样可以处理闰秒。这些数字组成的时间是环境变量TZ指定的时区中的一个时间。由于系统的限制，早于1970年1月1日的时间是错误的

---

### 1.5 mkdir命令

- mkdir 命令是 make directory 的缩写
- mkdir 命令用来创建指定名称的目录
- 要求创建目录的用户在当前目录中具有写权限，并且指定的目录名不能是当前目录中已有的目录

#### 1.5.1 **命令格式**

> mkdir [选项] 目录

#### 1.5.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -m   | 设定权限                                                     |
| -p   | 可以是一个路径名称。若路径中的某些目录尚不存在，加上此选项后，系统将自动建立好那些尚不存在的目录，即一次可以建立多个目录 |
| -v   | 每次创建新目录都显示信息                                     |

#### 1.5.3 **常用范例**

**例一：**递归创建多个目录 ，可以使用如下命令：

```sh
mkdir -p  ROS/test
```

**例二：**创建权限为 777 的目录，可以使用如下命令：

```sh
mkdir -m 777  ROS
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ mkdir -m777 ROS
ros@ros-course:~/ROS_Course$ ls -l
总用量 4
drwxrwxrwx 2 ros ros 4096 8月  12 17:55 ROS
```

**例三：**创建目录显示信息，可以使用如下命令：

```sh
mkdir -vp ROS/test
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ mkdir -vp ROS/test
mkdir: 已创建目录 'ROS'
mkdir: 已创建目录 'ROS/test'
```

#### 1.5.4 **练习题**

尝试以下命令，看看有什么事情发生，tree 命令需要单独安装

```sh
sudo apt-get update
sudo apt-get install tree
mkdir -vp ROS/{lib/,bin/,doc/{info,product}}
tree ROS/
```

---

### 1.6 rm命令

- rm命令是 remove 的缩写
- rm命令的功能为删除一个目录中的一个或多个文件或目录，它也可以将某个目录及其下的所有文件及子目录均删除
- 对于链接文件，只会删除链接，原文件均保持不变

**注意**：rm 是一个危险的命令，使用的时候要特别当心，尤其对于新手，否则整个系统就会毁在这个命令（比如在/（根目录）下执行 rm -rf）

#### 1.6.1 **命令格式**

> rm [选项] 文件或目录

#### 1.6.2 **常用参数**

| 参数 | 描述                                               |
| ---- | -------------------------------------------------- |
| -f   | 忽略不存在的文件，从不给出提示                     |
| -i   | 进行交互式删除                                     |
| -r   | 指示 rm 将参数中列出的全部目录和子目录均递归地删除 |
| -v   | 详细显示进行的步骤                                 |

#### 1.6.3 **常用范例**

先来创建一个测试文本：

```sh
sudo touch ROS.log
```

**例一：**删除文件，系统会先询问是否删除，可以使用如下命令：

```sh
rm ROS.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ rm ROS.log
rm：是否删除有写保护的普通空文件 'ROS.log'？ y
```

**例二：**强行删除文件，系统不再提示，可以使用如下命令：

```sh
rm -f ROS.log
```

**例三：**删除后缀名为.log 的所有，删除前逐一询问，可以使用如下命令：

```sh
rm *.log 或 rm -i *.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ sudo touch a.log
ros@ros-course:~/ROS_Course$ sudo touch b.log
ros@ros-course:~/ROS_Course$ sudo touch c.log
ros@ros-course:~/ROS_Course$ ls
a.log  b.log  c.log
ros@ros-course:~/ROS_Course$ rm *.log
rm：是否删除有写保护的普通空文件 'a.log'？ y
rm：是否删除有写保护的普通空文件 'b.log'？ y
rm：是否删除有写保护的普通空文件 'c.log'？ y
ros@ros-course:~/桌面/ROS_Course/Examples_folder$ ls
```

**补充说明**：*在Linux中表示匹配任意字符串，其他特殊字符使用参见[linux（ubuntu）中一些特殊符号.md](/home/ros/桌面/ROS_Course/1_Ubuntu/1.1/linux（ubuntu）中一些特殊符号.md)

---

### 1.7 mv命令

- mv 命令是 move 的缩写
- mv 命令功能是用来移动文件或更改文件名，经常用来备份文件或者目录
-  mv 命令根据第二个参数类型（目标是一个文件还是目录），决定执行将文件重命名或将其移至一个新的目录中
- 当第二个参数类型是文件时，mv  命令完成文件重命名，此时，源文件只能有一个（也可以是源目录名），它将所给的源文件或目录重命名为给定的目标文件名
- 当第二个参数是已存在的目录名称时，源文件或目录参数可以有多个，mv 命令将各参数指定的源文件均移至目标目录中

#### 1.7.1 **命令格式**

> mv [选项] 源文件或目录 目标文件或目录

#### 1.7.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -b   | 若需覆盖文件，则覆盖前先行备份                               |
| -f   | 如果目标文件已经存在，不会询问而直接覆盖                     |
| -i   | 若目标文件已经存在时，就会询问是否覆盖                       |
| -u   | 若目标文件已经存在，且源文件比较新，才会更新                 |
| -t   | 该选项适用于移动多个源文件到一个目录的情况，此时目标目录在前，源文件在后 |

#### 1.7.3 **常用范例**

**例一：**将文件`ROS.log`重命名为`ROS1.log`，可以使用如下命令：

```sh
mv ROS.log ROS1.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ sudo touch ROS.log
ros@ros-course:~/ROS_Course$ ls
ROS.log
ros@ros-course:~/ROS_Course$ mv ROS.log ROS1.log
ros@ros-course:~/ROS_Course$ ls
ROS1.log
```

**例二：**将文件`ROS1.log`移动到 test 目录下（test 目录必须已经存在，否则执行重命名），可以使用如下命令：

```sh
mv ROS1.log test
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ mkdir test
ros@ros-course:~/ROS_Course$ ls
ROS1.log  test
ros@ros-course:~/ROS_Course$ mv ROS1.log test
ros@ros-course:~/ROS_Course$ ls
test
ros@ros-course:~/ROS_Course$ cd test
ros@ros-course:~/ROS_Course/test$ ls
ROS1.log
```

**例三：**将文件`ROS1.log`移动到 test 目录下，如果文件存在，覆盖前询问是否覆盖，可以使用如下命令：

```sh
mv -i ROS1.log test
```

  运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ touch ROS1.log
ros@ros-course:~/ROS_Course$ mv -i ROS1.log test
mv：是否覆盖'test/ROS1.log'？ y
```

#### 1.7.4 **思考题**

思考下面这段代码有什么作用？

```sh
D=/tmp/$(date "+%Y%m%d%H%M%S")
mkdir -p $D
mv "$@" $D && echo "moved to $D ok"
```

---

### 1.8 cp命令

- cp 命令是 copy 的缩写
- cp 命令用来复制文件或者目录

#### 1.8.1 **命令格式**

> cp [选项] 源文件 目录 cp [选项] -t 目录 源文件

#### 1.8.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -t   | 指定目标目录                                                 |
| -i   | 覆盖前询问                                                   |
| -n   | 不要覆盖已存在的文件                                         |
| -s   | 对源文件建立符号链接，而非复制文件                           |
| -f   | 强行复制文件或目录，不论目的文件或目录是否已经存在           |
| -u   | 使用这项参数之后，只会在源文件的修改时间较晚的文件更新时，或是对应的目的文件并不存在，才复制文件 |

#### 1.8.3 **常用范例**

**例一：**对文件`ROS.log`建立一个符号链接`r.log`，可以使用如下命令：

```sh
cp -s ROS.log r.log
```

**例二：**将 test 目录下的所有文件复制到 test1 目录下，覆盖前询问，可以使用如下命令：

```sh
cp -i test/* test1
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ mkdir test1
ros@ros-course:~/ROS_Course$ ls
r.log  ROS.log  test  test1
ros@ros-course:~/ROS_Course$ cp -i test/* test1
ros@ros-course:~/ROS_Course$ cd test1
ros@ros-course:~/ROS_Course/test1$ ls
ROS1.log
```

**例三：**将 test1 目录下的最近更新的文件复制到 test目录下，覆盖前询问，可以使用如下命令：

```sh
cp -iu test1/* test
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cd test
ros@ros-course:~/ROS_Course/test$ ls -l
总用量 0
-rw-rw-r-- 1 ros ros 0 8月  12 16:27 ROS1.log
ros@ros-course:~/ROS_Course/test$ cd ../test1
ros@ros-course:~/ROS_Course/test1$ ls -l
总用量 4
-rw-rw-r-- 1 ros ros 4 8月  12 17:01 ROS1.log
ros@ros-course:~/ROS_Course/test1$ cd ..
ros@ros-course:~/ROS_Course$ cp -iu test1/* test
cp：是否覆盖'test/ROS1.log'？ y
```

---

### 1.9 cat命令

- cat 命令是 concatenate 的缩写
- cat 命令的功能是将文件或标准输入组合输出到标准输出
- 这个命令常用来显示文件内容，或者将几个文件连接起来显示，或者从标准输入读取内容并显示，它常与重定向符号配合使用

#### 1.9.1 **命令格式**

> cat [选项] 文件

#### 1.9.2 **常用参数**

| 参数 | 描述                                         |
| ---- | -------------------------------------------- |
| -A   | 等价于 -vET                                  |
| -b   | 对非空输出行编号                             |
| -e   | 等价于 -vE                                   |
| -E   | 在每行结束处显示 $                           |
| -n   | 由 1 开始对所有输出的行数编号                |
| -s   | 有连续两行以上的空白行，就代换为一行的空白行 |
| -t   | 与 -vT 等价                                  |
| -T   | 将跳格字符显示为 ^I                          |
| -v   | 使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外      |

#### 1.9.3 **常用范例**

**例一：**把`ROS.log`的文件内容加上行号后输入`ROS1.log`这个文件里，可以使用如下命令：

```sh
cat -n ROS.log > ROS1.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat ROS.log
a
b
c
d
e
f
ros@ros-course:~/ROS_Course$ cat -n ROS.log > ROS1.log
ros@ros-course:~/ROS_Course$ cat ROS1.log
     1	a
     2	b
     3	c
     4	d
     5	e
     6	f
```

**运行结果说明**：

- “ cmd > file”中，">" 表示重定向输出。把cmd命令的输出重定向到文件file中。如果file已经存在，则清空原有文件，使用bash的noclobber选项可以防止复盖原有文件
- “cmd >> file”中，">>" 表示重定向输出。把cmd命令的输出重定向到文件file中，如果file已经存在，则把信息加在原有文件後面
- “cmd < file”中，"<" 表示重定向输入。使cmd命令从file读入
- “cmd << text”中，"<<" 表示重定向输入。从命令行读取输入，直到一个与text相同的行结束。除非使用引号把输入括起来，此模式将对输入内容进行shell变量替换

**例二：**把`ROS.log`的文件内容加上行号后追加到`ROS2.log`这个文件里，多行空行换成一行输出，可以使用如下命令：

```sh
cat -ns ROS.log >> ROS2.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat ROS.log
a
b


c



d



e
f
ros@ros-course:~/ROS_Course$ cat -ns ROS.log >> ROS2.log
ros@ros-course:~/ROS_Course$ cat ROS2.log
     1	a
     2	b
     3	
     4	c
     5	
     6	d
     7	
     8	e
     9	f
```

**例三：**将`ROS.log`的文件内容反向显示，可以使用如下命令：

```sh
tac  ROS.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ tac ROS.log
f
e



d



c


b
a
```

**运行结果说明**：tac 是将 cat 反写过来，所以它的功能就跟 cat 相反， tac 由最后一行开始到第一行反向在屏幕上显示出来

#### 1.9.4 **思考题**

执行下面命令会输出什么？为什么？

```sh
ros@ros-course:~/ROS_Course$ cat -A << a
> 1
> 2
> 3
> 4
> a
```

---

### 1.10 more命令

- more 命令，功能类似 cat ，cat 命令是将整个文件的内容从上到下显示在屏幕上。more  命令会一页一页的显示，方便使用者逐页阅读，最基本的指令就是按空格键（space）往下一页显示，按 B  键就会往回（back）一页显示，而且还有搜寻字串的功能
- more 命令从前向后读取文件，因此在启动时就加载整个文件

#### 1.10.1 **命令格式**

> more [选项] 文件

#### 1.10.2 **常用参数**

| 参数      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| +n        | 从笫 n 行开始显示                                            |
| -n        | 定义屏幕大小为 n 行                                          |
| +/pattern | 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示 |
| -c        | 从顶部清屏，然后显示                                         |
| -d        | 提示“Press space to continue，’q’ to quiet”，禁用响铃功能    |
| -p        | 通过清除窗口而不是滚屏来对文件进行换页，与-c 选项相似        |
| -s        | 把连续的多个空行显示为一行                                   |
| -u        | 把文件内容中的下划线去掉                                     |

#### 1.10.3 **常用操作**

| 符号   | 描述             |
| ------ | ---------------- |
| =      | 输出当前行的行号 |
| q      | 退出 more        |
| 空格键 | 向下滚动一屏     |
| b      | 返回上一屏       |

1.10.4 **常用范例**

创建文件`ROS3.log`，文件内容如下：

```log
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
2021-11-5 f
2021-11-5 g
2021-11-5 h
2021-11-5 e
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
2021-11-5 f
2021-11-5 g
2021-11-5 h
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
```

**例一：**从第五行开始显示`ROS3.log`文件中的内容，可以使用如下命令：

```sh
more +5 ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ more +5 ROS3.log
2021-11-5 e
2021-11-5 f
2021-11-5 g
2021-11-5 h
2021-11-5 e
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
2021-11-5 f
2021-11-5 g
2021-11-5 h
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
```

**例二：**从`ROS3.log`文件中查找第一个出现“g”字符串的行，并从该处前两行开始显示输出，可以使用如下命令：

```sh
more +/g ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ more +/g ROS3.log

...跳过
2021-11-5 e
2021-11-5 f
2021-11-5 g
2021-11-5 h
2021-11-5 e
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
2021-11-5 f
2021-11-5 g
2021-11-5 h
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
```

**例三：**设定每屏行数为 5，可以使用如下命令：

```sh
more -5 ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ more -5 ROS3.log
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
--更多--(22%)
```

**例四：**使用 ls 和 more 命令显示`/etc`目录信息，可以使用如下命令：

```sh
ls -l /etc | more -10
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ ls -l /etc | more -10
总用量 1396
drwxr-xr-x  3 root root     4096 2月   4  2020 acpi
-rw-r--r--  1 root root     3028 2月   4  2020 adduser.conf
drwxr-xr-x  2 root root    12288 8月  10 16:35 alternatives
-rw-r--r--  1 root root      401 5月  30  2017 anacrontab
drwxr-xr-x  3 root root     4096 8月   8 17:28 apache2
-rw-r--r--  1 root root      433 10月  2  2017 apg.conf
drwxr-xr-x  6 root root     4096 2月   4  2020 apm
drwxr-xr-x  3 root root     4096 2月   4  2020 apparmor
drwxr-xr-x  8 root root     4096 8月   8 16:52 apparmor.d
--更多--
```

每页显示 10 个文件信息，按 Ctrl+F 或者 空格键 将会显示下 10 条文件信息

---

### 1.11 less命令

- less 命令也是对文件或其它输出进行分页显示的工具，是 linux 正统查看文件内容的工具

#### 1.11.1 **命令格式**

> less [选项] 文件

#### 1.11.2 **常用参数**

| 参数 | 描述                                                 |
| ---- | ---------------------------------------------------- |
| -e   | 当文件显示结束后，自动离开                           |
| -f   | 强迫打开特殊文件，例如外围设备代号、目录和二进制文件 |
| -i   | 忽略搜索时的大小写                                   |
| -m   | 显示类似 more 命令的百分比                           |
| -N   | 显示每行的行号                                       |
| -s   | 显示连续空行为一行                                   |

#### 1.11.3 **常用操作**

| 符号    | 描述                                 |
| ------- | ------------------------------------ |
| /字符串 | 向下搜索“字符串”的功能               |
| ?字符串 | 向上搜索“字符串”的功能               |
| n       | 重复前一个搜索（与 / 或 ? 有关）     |
| N       | 反向重复前一个搜索（与 / 或 ? 有关） |
| b       | 向前翻一页                           |
| d       | 向后翻半页                           |
| q       | 退出 less 命令                       |
| 空格键  | 向后翻一页                           |
| 向上键  | 向上翻动一行                         |
| 向下键  | 向下翻动一行                         |

#### 1.11.4 **常用范例**

**例一：**显示`ROS3.log`文件中的内容，并显示行号，可以使用如下命令：

```sh
less -N ROS3.log
```

运行结果如下：

```sh
      1 2021-11-5 a
      2 2021-11-5 b
      3 2021-11-5 c
      4 2021-11-5 d
      5 2021-11-5 e
      6 2021-11-5 f
      7 2021-11-5 g
      8 2021-11-5 h
      9 2021-11-5 e
     10 2021-11-5 a
     11 2021-11-5 b
     12 2021-11-5 c
     13 2021-11-5 d
     14 2021-11-5 e
     15 2021-11-5 f
     16 2021-11-5 g
     17 2021-11-5 h
     18 2021-11-5 a
     19 2021-11-5 b
     20 2021-11-5 c
     21 2021-11-5 d
     22 2021-11-5 e
~
(END)
```

**例二：**显示`ROS3.log`文件中的内容，搜索字符串”a”，可以使用如下命令：

```sh
less ROS3.log
/a
```

**例三：**ps 查看进程信息并通过 less 分页显示，可以使用如下命令：

```sh
ps -f | less
```

运行结果如下：

```sh
UID        PID  PPID  C STIME TTY          TIME CMD
ros       3889  3882  0 10:23 pts/0    00:00:00 bash
ros       4707  4706  0 10:30 pts/0    00:00:00 bash
ros       5149  5148  0 10:34 pts/0    00:00:00 bash
ros      23928  5149  0 22:11 pts/0    00:00:00 ps -f
ros      23929  5149  0 22:11 pts/0    00:00:00 less
(END)
```

#### 1.11.5 less 与 cat 和 more 的区别

- cat 命令功能：用于显示整个文件的内容，因为单独使用没有翻页功能，所以经常和 more 命令搭配使用，cat 命令还有一个可以将数个文件合并成一个文件的功能

- more 命令功能：让画面在显示满一页时暂停，此时可按空格健继续显示下一个画面，或按 q 键停止显示

- less 命令功能：less 命令的用法与 more 命令类似，也可以用来浏览超过一页的文件。所不同的是 less 命令除了可以按空格键向下显示文件外，还可以利用上下键来滚动文件。当要结束浏览时，只要在 less 命令的提示符“：”下按 q 键即可

---

### 1.12 head指令

- head 命令主要是用来显示档案的开头至标准输出中，默认 head 命令打印其相应文件的开头 10 行

#### 1.12.1 **命令格式**

> head [选项] 文件

#### 1.12.2 **常用参数**

| 参数     | 描述       |
| -------- | ---------- |
| -q       | 隐藏文件名 |
| -v       | 显示文件名 |
| -c<字节> | 显示字节数 |
| -n<行数> | 显示的行数 |

#### 1.12.3 **常用范例**

**例一：**显示`ROS3.log`文件中的前 5 行内容，可以使用如下命令：

```sh
head -n 5 ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ head -n 5 ROS3.log
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
```

**例二：**显示`ROS2.log`和`ROS3.log`文件中的前 5 行内容，可以使用如下命令：

```sh
head -n 5 ROS2.log  ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ head -n 5 ROS2.log  ROS3.log
==> ROS2.log <==
     1	a
     2	b
     3	
     4	c
     5	

==> ROS3.log <==
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
```

---

### 1.13 tail命令

- tail 命令用于显示指定文件末尾内容，常用查看日志文件

#### 1.13.1 **命令格式**

> tail [选项] 文件

#### 1.13.2 **常用参数**

| 参数     | 描述               |
| -------- | ------------------ |
| -f       | 循环读取           |
| -q       | 不显示处理信息     |
| -v       | 显示详细的处理信息 |
| -c<字节> | 显示的字节数       |
| -n<行数> | 显示行数           |

#### 1.13.3 **常用范例**

**例一：**显示`ROS3.log`文件中的最后 5 行内容，可以使用如下命令：

```sh
tail -n 5 ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ tail -n 5 ROS3.log
2021-11-5 a
2021-11-5 b
2021-11-5 c
2021-11-5 d
2021-11-5 e
```

**例二：**显示`ROS3.log`文件中的最后 5 行内容，当`ROS3.log`文件有新内容增加时自动更新显示，可以使用如下命令：

```sh
tail -n 5 -f ROS3.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ ping www.shiyanlou.com >> ROS4.log &
[1] 24886
ros@ros-course:~/ROS_Course$ tail -n 5 -f ROS4.log
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=1 ttl=89 time=34.9 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=2 ttl=89 time=33.1 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=3 ttl=89 time=35.2 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=4 ttl=89 time=33.0 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=5 ttl=89 time=33.6 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=6 ttl=89 time=33.2 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=7 ttl=89 time=36.9 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=8 ttl=89 time=35.0 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=9 ttl=89 time=32.4 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=10 ttl=89 time=33.3 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=11 ttl=89 time=33.1 ms
64 bytes from 121.40.227.60 (121.40.227.60): icmp_seq=12 ttl=89 time=33.1 ms
```

**运行结果说明：**

- `ping www.shiyanlou.com >>ROS4.log` 这条命令作用是 ping 远程主机，并将信息追加到`ROS4.log`文件中
- & 的作用是将这条命令放在后台执行，这样`ROS4.log`文件就会一直有内容增加
- 使用 tail 命令的 -f 选项可以即时输出文件变化后追加的内容。`tail -f filename` 会把 filename 里最尾部的内容显示在屏幕上，并且不断刷新，使你看到最新的文件内容
- linux 下执行 ping 命令会一直执行，必须手动停止才行。 windows 下执行 ping 命令时，默认发送四个请求后会自动停止
- jobs 命令可查看正在后台运行的任务，kill 命令可杀死一个任务，但要使用任务的 pid，任务的 pid 可以通过 ps 命令查看获得，然后使用`k&ill -9 任务pid`可以将这个后台进程杀死

---

### 1.14 nl命令

- nl 命令是 number of lines 的缩写
- nl 命令用来计算文件中的行号
- nl 可以将输出的文件内容自动加上行号，其默认的结果与 cat -n 有点不太一样。nl 可以将行号做较多的显示设计，包括位数、是否自动补齐 0 等功能

#### 1.14.1 **命令格式**

> nl [选项] [文件]

#### 1.14.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -b   | 指定行号的方式，主要有两种：<br />-b a 表示不论是否为空行，也同样列出行号（类似 cat -n）<br />-b t  表示如果有空行，空的那一行不要列出行号（默认值） |
| -n   | 列出行号表示的方法，主要有三种：<br />-n ln   行号在屏幕的最左方显示<br />-n rn   行号在自己栏位的最右方显示，且不加 0<br />-n rz   行号在自己栏位的最右方显示，且加 0 |
| -w   | 行号栏位的占用的位数                                         |

#### 1.14.3 **常用范例**

**例一**：把`ROS.log`的文件内容加上行号后显示，空行不加行号，可以使用如下命令：

```sh
nl -b t ROS.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat ROS.log
a
b

u
f
ros@ros-course:~/ROS_Course$ nl -bt ROS.log
     1	a
     2	b
       
     3	u
     4	f
```

**例二**：把`ROS.log`的文件内容加上行号后显示，行号分别在屏幕最左方、最右方不加 0 和最右方加 0 显示，可以使用如下命令：

```sh
nl -n ln ROS.log
nl -n rn ROS.log
nl -n rz ROS.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ nl -n ln ROS.log
1     	a
2     	b
       
3     	u
4     	f
ros@ros-course:~/ROS_Course$ nl -n rn ROS.log
     1	a
     2	b
       
     3	u
     4	f
ros@ros-course:~/ROS_Course$ nl -n rz ROS.log
000001	a
000002	b
       
000003	u
000004	f
```

**例三：**把`ROS.log`的文件内容加上行号后显示，行号在屏幕最右方加 0 显示，行号栏目占位数为 3，可以使用如下命令：

```sh
5nl -n rz -w 3 ROS.log
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ nl -n rz -w 3 ROS.log
001	a
002	b
    
003	u
004	f
```

---

### 1.15 echo命令

- echo 命令用来在标准输出中显示输入的字符串

#### 1.15.1 **命令格式**

> echo [选项] 字符串

#### 1.15.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -n   | 输出字符串不换行                                             |
| -e   | 处理转义字符：<br />\a 发出警告声<br/>\b 删除前一个字符<br/>\c 最后不加上换行符号<br/>\f 换行但光标仍旧停留在原来的位置<br/>\n 换行且光标移至行首<br/>\r 光标移至行首，但不换行<br/>\t 插入tab<br/>\v 与\f相同<br/>\\ 插入\字符<br/>\0nnn 字节数以八进制数 NNN (1至3位)表示<br />\xHH 字节数以十六进制数 HH (1至2位)表示 |
| -E   | 禁用转义解释                                                 |

#### 1.15.3 **常用范例**

**例一**：显示普通字符串：

```sh
ros@ros-course:~/ROS_Course$ echo "It is a test"
It is a test
```

 **例二**：显示转义字符：

```sh
ros@ros-course:~/ROS_Course$ echo "\"It is a test\""
"It is a test"
```

 **例三**：显示结果定向至文件：

```sh
echo "It is a test" > ROS5.txt
```

 运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ echo "It is a test" > ROS5.txt
ros@ros-course:~/ROS_Course$ ls
r.log  ROS1.log  ROS2.log  ROS3.log  ROS4.log  ROS5.txt  ROS.log  test  test1
ros@ros-course:~/ROS_Course$ more ROS5.txt 
It is a test
```

**例四**：显示命令执行结果：

```sh
echo `date`
```

运行结果如下：

```
ros@ros-course:~/ROS_Course$ echo `date`
2021年 08月 12日 星期四 23:26:45 CST
```

- **注意**：这里使用的是反引号 `, 而不是单引号 '

#### 1.15.4 **思考题**

输入`echo --help`会发生什么？echo指令如何查看帮助文档？

---

### 1.16 chmod命令

- chmod 命令是 change mode的缩写
- chmod命令作用是控制用户对文件的权限的命令

#### 1.16.1 **命令格式**

> chmod [选项] mode 文件/目录

- **补充说明**：

  - Linux 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users），见下图

  <img src="https://gitee.com/qielongfei/typora-image/raw/master/Image/file-permissions-rwx.jpg" alt="img" style="zoom: 50%;" />

  - 只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限

  

#### 1.16.2 **常用参数**

| 参数 | 描述                                                         |
| :--: | ------------------------------------------------------------ |
|  -c  | 若该文件权限确实已经更改，才显示其更改动作                   |
|  -f  | 若该文件权限无法被更改也不要显示错误讯息                     |
|  -v  | 显示权限变更的详细资料                                       |
|  -R  | 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更) |
| mode | 权限设定字串，格式如下 : [ugoa] [+-=] [rwxX]                 |
|      | u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是<br/>+ 表示增加权限、- 表示取消权限、= 表示将用户类型的所有权限重新设置<br/>r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该文件是个子目录或者该文件已经被设定过为可执行 |

#### 1.16.3 八进制语法

- chmod命令可以使用八进制数来指定权限

- 文件或目录的权限位是由9个权限位来控制，每三位为一组，它们分别是文件所有者、用户组以及其它用户（Other）的读、写、执行，见下图

  <img src="https://gitee.com/qielongfei/typora-image/raw/master/Image/rwx-standard-unix-permission-bits.png" alt="img" style="zoom:80%;" />

| #    | 权限           | rwx  | 二进制 |
| ---- | -------------- | ---- | ------ |
| 7    | 读 + 写 + 执行 | rwx  | 111    |
| 6    | 读 + 写        | rw-  | 110    |
| 5    | 读 + 执行      | r-x  | 101    |
| 4    | 只读           | r--  | 100    |
| 3    | 写 + 执行      | -wx  | 011    |
| 2    | 只写           | -w-  | 010    |
| 1    | 只执行         | --x  | 001    |
| 0    | 无             | ---  | 000    |

- 读权限，表示你可以使用 `cat <file name>` 之类的命令来读取某个文件的内容；写权限，表示你可以编辑和修改某个文件的内容；执行权限，通常指可以运行的二进制程序文件或者脚本文件
  - **一个目录同时具有读权限和执行权限才可以打开并查看内部文件，而一个目录要有写权限才允许在其中创建其它文件**
- 上例中， 765 将这样解释：
  - 所有者的权限用数字表达：属主的那三个权限位的数字加起来的总和。如 rwx ，也就是 4+2+1 ，应该是 7
  - 用户组的权限用数字表达：属组的那个权限位数字的相加的总和。如 rw- ，也就是 4+2+0 ，应该是 6
  - 其它用户的权限数字表达：其它用户权限位的数字相加的总和。如 r-x ，也就是 4+0+1 ，应该是 5

#### 1.16.4 **常用范例**

**例一**：将文件 ROS1.txt 设为所有人皆可读取 ：

```sh
chmod ugo+w ROS1.txt  or  chmod a+w ROS1.txt
```

- `g`、`o` 、 `u` 分别表示 group（用户组）、others（其他用户） 和 user（用户），`+` 和 `-` 分别表示增加和去掉相应的权限

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ touch ROS1.txt
ros@ros-course:~/ROS_Course$ ls -l ROS1.txt
-rw-rw-r-- 1 ros ros 0 8月  13 16:33 ROS1.txt
ros@ros-course:~/ROS_Course$ chmod ugo+w ROS1.txt
ros@ros-course:~/ROS_Course$ ls -l ROS1.txt
-rw-rw-rw- 1 ros ros 0 8月  13 16:33 ROS1.txt
```

**例二**：将文件ROS2.txt 与ROS3.txt 设为该文件拥有者、以及其所属同一个群体者只可写入，其他以外的人只执行 ：

```sh
chmod ug=w,o=r ROS2.txt ROS3.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ touch ROS2.txt ROS3.txt
ros@ros-course:~/ROS_Course$ ls -l ROS2.txt ROS3.txt
-rw-rw-r-- 1 ros ros 0 8月  13 16:41 ROS2.txt
-rw-rw-r-- 1 ros ros 0 8月  13 16:41 ROS3.txt
ros@ros-course:~/ROS_Course$ chmod ug=w,o=x ROS2.txt ROS3.txt
ros@ros-course:~/ROS_Course$ ls -l ROS2.txt ROS3.txt
--w--w---x 1 ros ros 0 8月  13 16:41 ROS2.txt
--w--w---x 1 ros ros 0 8月  13 16:41 ROS3.txt
```

**例三**：将文件ROS4.txt设为该文件拥有者、所属组以及其他人均可读、写、执行：

```sh
chmod a=rwx ROS4.txt or chmod 777 ROS4.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ touch ROS4.txt
ros@ros-course:~/ROS_Course$ ls -l ROS4.txt
-rw-rw-r-- 1 ros ros 0 8月  13 16:51 ROS4.txt
ros@ros-course:~/ROS_Course$ chmod a=rwx ROS4.txt
ros@ros-course:~/ROS_Course$ ls -l ROS4.txt
-rwxrwxrwx 1 ros ros 0 8月  13 16:51 ROS4.txt
ros@ros-course:~/ROS_Course$ rm ROS4.txt && touch ROS4.txt
ros@ros-course:~/ROS_Course$ ls -l ROS4.txt
-rw-rw-r-- 1 ros ros 0 8月  13 16:54 ROS4.txt
ros@ros-course:~/ROS_Course$ chmod 777 ROS4.txt
ros@ros-course:~/ROS_Course$ ls -l ROS4.txt
-rwxrwxrwx 1 ros ros 0 8月  13 16:54 ROS4.txt
```

**例四**：将test目录下的所有文件与子目录皆设为任何人可写入：

```sh
chmod -R a+w test
```

当前test及test下ROS1.log文件的权限如下：

```sh
drwxrwxr-x 2 ros ros 4096 8月  12 16:28 test
-rw-rw-r-- 1 ros ros 4 8月  12 17:03 ROS1.log
```

运行结果如下：

```sh
drwxrwxrwx 2 ros ros 4096 8月  12 16:28 test
-rw-rw-rw- 1 ros ros 4 8月  12 17:03 ROS1.log
```

