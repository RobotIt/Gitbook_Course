# 2.2 文件查找命令

### 2.1  which命令

- which 命令在 PATH 变量指定的路径中搜索可执行文件的所在位置
- which 命令一般用来确认系统中是否安装了指定的软件

#### 2.1.1 **命令格式**

> which 可执行文件名称

#### 2.1.2 **常用范例**

**例一：**确认是否安装了 gcc，可以使用如下命令：

```sh
which gcc
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ which gcc
/usr/bin/gcc
```

**例二：**查看 ls 命令的位置路径，可以使用如下命令：

```sh
which ls
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ which ls
/bin/ls
```

- **备注**：`echo $PATH`这条指令可以查看PATH路径的内容
- **补充知识**：到底什么是命令？
  - 命令可以是下面四种形式之一：
    1. 是一个可执行程序，就像我们所看到的位于目录`/usr/bin`中的文件一样。属于这一类的程序，可以编译成二进制文件，诸如用 C 和 C++ 语言写成的程序，也可以是由脚本语言写成的程序，比如说 shell，perl，python，ruby等等
    2. 是一个内建于 shell 自身的命令。bash 支持若干命令，内部叫做 shell 内部命令 (builtins)。例如， cd 命令就是一个 shell 内部命令
    3. 是一个 shell 函数。这些是小规模的 shell 脚本，它们混合到环境变量中。 比如上面讲到的 cd 命令，在某些环境中就是一个 shell 函数
    4. 是一个命令别名。我们可以定义自己的命令，建立在其它命令之上

---

### 2.2 whereis 命令

- whereis 命令用于定位可执行文件、源代码文件和帮助文件在文件系统中的位置
- whereis 命令具有搜索源代码、指定备用搜索路径和搜索不寻常项功能
- whereis 命令在数据库（/var/lib/mlocate/mlocate.db）查询，此数据库由 Linux 系统自动创建，包含有本地所有文件的信息，每天通过自动执行 updatedb  命令更新一次，因此whereis 命令查找速度非常快
- 因为此数据库要每天才更新一次，使得 whereis 命令的搜索结果有时候会不准确，比如刚添加的文件可能搜不到

#### 2.2.1 **命令格式**

> whereis [选项] 文件

#### 2.2.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -b   | 定位可执行文件                                               |
| -m   | 定位帮助文件                                                 |
| -s   | 定位源代码文件                                               |
| -u   | 搜索默认路径下除可执行文件、源代码文件和帮助文件以外的其它文件 |
| -B   | 指定搜索可执行文件的路径                                     |
| -M   | 指定搜索帮助文件的路径                                       |
| -S   | 指定搜索源代码文件的路径                                     |

#### 2.2.3 **常用范例**

**例一：**搜索 gcc 可执行文件的路径，可以使用如下命令：

```sh
whereis -b gcc
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ whereis -b gcc
gcc: /usr/bin/gcc /usr/lib/gcc
```

**例二：**搜索 gcc 帮助文件的路径，可以使用如下命令：

```sh
whereis -m gcc
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ whereis -m gcc
gcc: /usr/share/man/man1/gcc.1.gz
```

**例三：**搜索 gcc 源代码的路径，可以使用如下命令：

```sh
whereis -s gcc
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ whereis -s gcc
gcc:
```

- **运行结果说明**：没有找到gcc源代码，输出结果为空

---

### 2.3 locate 命令

- locate 命令跟 whereis 命令类似，它们使用的是相同的数据库。但 whereis 命令只能搜索可执行文件、帮助文件和源代码文件，locate命令可查找符合搜索字符串条件的文档或目录
- locate 命令使用了十分复杂的匹配语法，可以使用特殊字元（如’*’和’?’）来指定需要查找的样本

#### 2.3.1 **命令格式**

> locate [选项] 搜索字符串

**常用参数**

| 参数 | 描述                           |
| ---- | ------------------------------ |
| -q   | 安静模式，不会显示任何错误讯息 |
| -n   | 至多显示 n 个输出              |
| -r   | 使用正则表达式做寻找的条件     |
| -V   | 显示版本信息                   |

#### 2.3.2 **常用范例**

**例一：**搜索 etc 目录下所有以 sh 开头的文件，可以使用如下命令：

```sh
locate /etc/sh
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ locate /etc/sh
/etc/shadow
/etc/shadow-
/etc/shells
/snap/core/11420/etc/shadow
/snap/core/11420/etc/shells
/snap/core/8268/etc/shadow
/snap/core/8268/etc/shells
/snap/core18/2074/etc/shadow
/snap/core18/2074/etc/shells
/snap/core18/2128/etc/shadow
/snap/core18/2128/etc/shells
/snap/core20/1081/etc/shadow
/snap/core20/1081/etc/shells
```

**例二：**搜索 etc 目录下文件名包含 lou 的文件，可以使用如下命令：

```sh
locate /etc/*lou*
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ locate /etc/*lou*
/etc/modprobe.d/libopenni-sensor-pointclouds0.conf
/etc/systemd/system/cloud-final.service.wants
/etc/systemd/system/cloud-final.service.wants/snapd.seeded.service
```

**例三：**搜索 etc 目录下以字串h开头且以字符e结尾的文件，可以使用如下命令：

```sh
locate /etc/h*e
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ locate /etc/h*e
/etc/hostname
/snap/core/11420/etc/hostname
/snap/core/8268/etc/hostname
/snap/core18/2074/etc/hostname
/snap/core18/2128/etc/hostname
/snap/core20/1081/etc/hostname
```

---

### 2.4 find 命令（一）

- find 命令主要作用是沿着文件层次结构向下遍历，匹配符合条件的文件，并执行相应的操作

#### 2.4.1 **命令格式**

> find [选项] [搜索路径] [表达式]
>
> - 默认路径是当前目录，默认表达式为 -print
> - 表达式组成：操作符、选项、测试表达式以及动作

#### 2.4.2 **常用参数**

| 参数         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| -print       | find 命令将匹配的文件输出到标准输出                          |
| -exec        | find 命令对匹配的文件执行该参数所给出的 shell 命令           |
| -name        | 按照文件名查找文件                                           |
| -type        | 查找某一类型的文件                                           |
| -prune       | 使用这一选项可以使 find 命令不在当前指定的目录中查找，如果同时使用 -depth 选项，那么 -prune 将被 find 命令忽略 |
| -user        | 按照文件属主来查找文件                                       |
| -group       | 按照文件所属的组来查找文件                                   |
| -mtime -n +n | 按照文件的更改时间来查找文件，-n 表示文件更改时间距现在小于 n 天，+n 表示文件更改时间距现在大于 n 天，find 命令还有 -atime 和 -ctime 选项 |

**备注**：其他命令选项及表达式参见`find --help`

#### 2.4.3 **常用范例**

**例一：**打印当前目录下的文件目录列表，可以使用如下命令：

```sh
find  or  find . or find . -print
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find
.
./ROS5.txt
./r.log
./ROS3.log
./ROS4.log
./ROS1.log
./test1
./test1/ROS1.log
./test
./test/ROS1.log
./ROS2.log
./ROS.log
```

- **运行结果说明**：
  - .（点号）表示此目录本身，包含当前目录下所有隐藏目录和隐藏文件夹，一般可以不写，所以cd ~/. 和cd ~ 和cd ~/效果是一样的
  - .（点号）在文件名头部，代表一个隐藏文件

**例二：**打印当前目录下所有以.log结尾的文件名，可以使用如下命令：

```sh
find . -name "*.log" 
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . -name "*.log"
./r.log
./ROS3.log
./ROS4.log
./ROS1.log
./test1/ROS1.log
./test/ROS1.log
./ROS2.log
./ROS.log
```

**例三：**打印当前目录下所有以.txt 或.log 结尾的文件名，可以使用如下命令：

```sh
find . \( -name "*.log" -or -name "*.txt" \)
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . \( -name "*.log" -or -name "*.txt " \)
./r.log
./ROS3.log
./ROS4.log
./ROS1.log
./test1/ROS1.log
./test/ROS1.log
./ROS2.log
./ROS.log

```

- **补充说明**：find 命令可以通过逻辑操作符来创建复杂的逻辑关系，此例中使用了操作符 -or 。find 命令的逻辑操作符见下表：

![img](https://gitee.com/qielongfei/typora-image/raw/master/Image/userid3372labid348time1419485513603)

**例四：**打印当前目录下所有**不以**.txt 结尾的文件名，可以使用如下命令：

```sh
find . ! -name "*.txt"
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . ! -name "*.txt"
.
./r.log
./ROS3.log
./ROS4.log
./ROS1.log
./test1
./test1/ROS1.log
./test
./test/ROS1.log
./ROS2.log
./ROS.log
```

---

### 2.5 find 命令（二）

- 本节将介绍如何根据文件类型、权限、所有者及操作符来查找匹配文件
- 根据文件类型来查找文件，使用 -type 选项，常见 find 文件类型见下表：

![img](https://gitee.com/qielongfei/typora-image/raw/master/Image/userid3372labid348time1419485465186)

- 根据文件权限查找文件，使用 -perm 选项，所有者使用 -user 选项

#### 2.5.1 **常用范例**

**例一：**打印当前目录下所有以 .txt 结尾的符号链接，可以使用如下命令：

```sh
find . -type l -name "*.txt" -print
```

- **补充说明**：[Linux 软连接与硬连接](https://www.cnblogs.com/xiaoleiel/p/8340139.html)

  - 对于一个文件来说，有唯一的索引接点与之对应，而对于一个索引接点号，却可以有多个文件名与之对应
  - 因此，在磁盘上的同一个文件可以通过不同的路径去访问该文件，产生了软连接和硬链接
  - 通俗地讲， 硬链接可认为是一个文件拥有两个文件名，而软链接则是系统新建一个链接文件，此文件指向其所要指的文件。软链接可对文件和文件夹，硬链接仅针对文件
  - 软连接(symbolic link)又叫符号连接，符号连接相当于Windows下的快捷方式，  不可以对文件夹建立硬连接
  - 通过 ln [option] source_file dist_file可建立链接文件（source_file是待建立链接文件的文件，dist_file是新创建的链接文件，-s 建立软链接）

- **建立软连接**：

  建立a.txt 和 ROS.log 的软连接，可用如下代码：

  ```sh
   ln -s ROS.log a.txt 
  ```

  运行结果如下：

  ```sh
  ros@ros-course:~/ROS_Course$ ln -s ROS.log a.txt 
  ros@ros-course:~/ROS_Course$ ls -l a.txt
  lrwxrwxrwx 1 ros ros 7 8月  13 11:40 a.txt -> ROS.log
  ```

打印当前目录下所有以 .txt 结尾的符号链接，运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . -type l -name "*.txt" -print
./a.txt
```

**例二：**打印当前目录下所有权限为 777 的 log 文件，可以使用如下命令：

```sh
find . -type f -name "*.log" -perm 777
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ chmod 777 ROS.log
ros@ros-course:~/ROS_Course$ find . -type f -name "*.log" -perm 777
./ROS.log
```

**例三：**打印当前目录下 ros 用户拥有的符号文件，可以使用如下命令：

```sh
find . -type l -user ros
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . -type l -user ros
./r.log
./a.txt
```

**例四：**打印当前目录下权限不是 777 和 664 的所有文件，可以使用如下命令：

```sh
find . -type f \( ! -perm 777 -and ! -perm 644 \)
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . -type f \( ! -perm 777 -and ! -perm 644 \)
./ROS5.txt
./ROS1.txt
./ROS2.txt
./ROS3.log
./ROS3.txt
./ROS4.log
./ROS1.log
./test1/ROS1.log
./test/ROS1.log
./ROS2.log
```

---

### 2.6 find 命令（三）

- 本节介绍如何使用 find 命令的 -exec 选项来实现对查找到的文件执行指定的动作命令

#### 2.6.1 **常用范例**

**例一：**找到当前目录下所有 txt 文件，并显示其详细信息，可以使用如下命令：

```sh
find . -name "*.txt" -exec ls -l {} \;
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . -name "*.txt" -exec ls -l {} \;
-rw-rw-r-- 1 ros ros 13 8月  12 23:25 ./ROS5.txt
-rw-rw-rw- 1 ros ros 0 8月  13 16:33 ./ROS1.txt
--w--w---x 1 ros ros 0 8月  13 16:41 ./ROS2.txt
--w--w---x 1 ros ros 0 8月  13 16:41 ./ROS3.txt
lrwxrwxrwx 1 ros ros 7 8月  13 11:40 ./a.txt -> ROS.log
-rwxrwxrwx 1 ros ros 0 8月  13 16:54 ./ROS4.txt
```

- **运行结果说明：**
  - -exec 是 find 命令对找到的文件执行的动作，上面的命令是`ls -l {}`
  - 在这里说明一下`{}`和`\;`，`{}`是一个占位符，在 find 命令的执行过程中会不断地替换成当前找到的文件，相当于”ls -l 找到的文件”
  - `\;`是 -exec 命令结束的标记，因为规定 -exec 后面的命令必须以`;`结束，但`;`在 shell 中有特殊含义，必须要转义，所以写成`\;`

**例二：**在当前目录中有很多 log 文件，现在想要把所有 log 文件下载下来，如果一个一个的下载很麻烦，我们可以先查找到所有的 log 文件，然后将这些文件内容写入到一个文件中，下载这一个文件就可以了，可以使用如下命令：

```sh
find . -name "*.log" -exec cat {} \; > all.log
```

**例三：**默认下，-exec 后面只能使用单个命令，如果想要多个命令，可以将多个命令写入脚本文件中，然后在 -exec 中使用这个脚本，可以使用如下命令：

```sh
find . -name "*.log" -exec ./command.sh {} \;
```

脚本内容：

```sh
#!/bin/bash
ls -l $1       #$1表示第一个参数
cat $1
```

- 注意，直接运行上面的代码可能会提示你`find './command.sh' : 权限不够`，这是因为新建的`command.sh`没有执行权限，只需要使用`chmod +x command.sh`给予它可执行权限再执行即可

---

### 2.7 xargs 命令

- xargs命令是eXtended ARGuments的缩写
- xargs一般是和管道一起使用，是给命令传递参数的一个过滤器，也是组合多个命令的一个工具，它能够捕获一个命令的输出，然后传递给另外一个命令
- xargs可以将管道或标准输入（stdin）数据转换成命令行参数，也能够从文件的输出中读取数据
- xargs可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行

#### 2.7.1 **命令格式**

> command | xargs [选项] [command]
>
> 备注：xargs 命令应该紧跟在管道操作符之后，因为它以标准输入作为主要的源数据流

#### 2.7.2 **常用参数**

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| -n       | 指定每行最大的参数数量，默认为所有的                         |
| -d       | 指定分隔符                                                   |
| -i 或 -I | 将xargs的每项内容，一行一行赋值给 {}，后续使用时可以用 {} 代替 |

#### 2.7.3 **常用范例**

**例一：**将多行输入转换为单行输出，可以使用如下命令：

```sh
cat b.txt | xargs
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat b.txt
a v
b f h
d 
t h y j
ros@ros-course:~/ROS_Course$ cat b.txt | xargs
a v b f h d t h y j
```

**例二：**将单行输入转换为多行输出，可以使用如下命令：

```sh
echo "1 2 3 4 5 6 7" | xargs -n 3
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ echo "1 2 3 4 5 6 7" | xargs -n 3
1 2 3
4 5 6
7
```

**例三：**将单行输入转换为多行输出，指定分隔符为 h，可以使用如下命令：

```sh
cat b.txt | xargs -d h -n 3
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat c.txt
fdsahfdsjafkludisaohkfdsaj
ros@ros-course:~/ROS_Course$ cat c.txt | xargs -d h -n 3
fdsa fdsjafkludisao kfdsaj
```

**例四：**查找当前目录下所有 log文件并显示详细信息，可以使用如下命令：

```sh
find . -type f -name "*.log" | xargs ls -l
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ find . -type f -name "*.log" | xargs ls -l
-rw-rw-r-- 1 ros ros 7399 8月  13 17:21 ./all.log
-rw-rw-r-- 1 ros ros   44 8月  12 21:42 ./ROS1.log
-rw-rw-r-- 1 ros ros   78 8月  12 17:23 ./ROS2.log
-rw-rw-r-- 1 ros ros  271 8月  12 22:24 ./ROS3.log
-rw-rw-r-- 1 ros ros 6980 8月  12 22:30 ./ROS4.log
-rwxrwxrwx 1 ros ros    9 8月  12 18:15 ./ROS.log
-rw-rw-r-- 1 ros ros    4 8月  12 17:01 ./test1/ROS1.log
-rw-rw-rw- 1 ros ros    4 8月  12 17:03 ./test/ROS1.log
```

#### 2.7.4 **思考题**

下列代码表示什么作用？

`ls *.log | xargs -n1 -I {} cp {} /data/images`

`find . -type f -name "*.log" -print | xargs -0 rm -f`

**备注**：xargs -0 表示将 \0 作为定界符

