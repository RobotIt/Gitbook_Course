# 3 Linux命令基础：其他常用命令

### 3.1  wc命令

- wc 命令是 word count 的缩写
- wc 命令是一个统计的工具，主要用来显示文件所包含的行、字和字节数
- 如果没有指定文件，或者文件为"-"，则从标准输入读取数据

#### 3.1.1 **命令格式**

> wc [选项] [文件]

#### 3.1.2 **常用参数**

| 参数 | 描述                                                       |
| ---- | ---------------------------------------------------------- |
| -c   | 统计字节数                                                 |
| -l   | 统计行数                                                   |
| -m   | 统计字符数，这个标志不能与 -c 标志一起使用                 |
| -w   | 统计字数，一个字被定义为由空白、跳格或换行字符分隔的字符串 |
| -L   | 打印最长行的长度                                           |

#### 3.1.3 **常用范例**

**例一：**统计文件的字节数、行数和字符数，可以使用如下命令：

```sh
wc -c c.txt
wc -l c.txt
wc -m c.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat ROS5.txt
It is a test
ros@ros-course:~/ROS_Course$ wc -c ROS5.txt
13 ROS5.txt
ros@ros-course:~/ROS_Course$ wc -l ROS5.txt
1 ROS5.txt
ros@ros-course:~/ROS_Course$ wc -m ROS5.txt
13 ROS5.txt
```

- **注意**，每行结尾的换行符也算一个字符，空格也算一个字符。另外，若系统采用 UTF-8 编码，一个汉字为 3 字节

**例二：**统计文件的字节数、行数和字符数，只打印数字，不打印文件名，可以使用如下命令：

```sh
cat ROS5.txt | wc -c
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat ROS5.txt | wc -c
13
```

**例三：**统计`/bin`目录下的命令个数，可以使用如下命令：

```sh
ls /bin | wc -l
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ ls /bin | wc -l
162
```

#### 3.1.4 **思考题**

思考下列代码的作用是什么？

`find . -type f -name "*.log" | xargs wc -l`

---

### 3.2 grep命令

- grep 命令用于查找文件里符合条件的字符串
- grep 可接受正则表达式和通配符，可用多个 grep 命令选项来生成不同格式的输出
- grep 通过返回一个状态值来说明搜索的状态，如果字符串搜索成功，则返回 0，如果搜索不成功，则返回 1，如果搜索的文件不存在，则返回 2
- grep 会把含有所搜索字符串的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据

#### 3.2.1 **命令格式**

> grep [选项] 搜索字符串 [文件]

#### 3.2.2 **常用参数**

| 参数         | 描述                                     |
| ------------ | ---------------------------------------- |
| -c           | 计算找到‘搜寻字符串’（即 pattern）的次数 |
| -i           | 忽略大小写的不同                         |
| -n           | 输出行号                                 |
| -v           | 反向选择，打印不匹配的行                 |
| -r           | 递归搜索                                 |
| --color=auto | 将找到的关键词部分加上颜色显示           |

#### 3.2.3 **常用范例**

**例一：**将`/etc/passwd`文件中出现 root 的行取出来，关键词部分加上颜色显示，可以使用如下命令：

```sh
grep "root" /etc/passwd --color=auto
cat /etc/passwd | grep "root" --color=auto
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ grep "root" /etc/passwd --color=auto
root:x:0:0:root:/root:/bin/bash
ros@ros-course:~/ROS_Course$ cat /etc/passwd | grep "root" --color=auto
root:x:0:0:root:/root:/bin/bash
```

**例二：**将`/etc/passwd`文件中没有出现 root 和 nologin 的行取出来，可以使用如下命令：

```sh
grep -v "root" /etc/passwd | grep -v "nologin"
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ grep -v "root" /etc/passwd | grep -v "nologin"
sync:x:4:65534:sync:/bin:/bin/sync
speech-dispatcher:x:111:29:Speech Dispatcher,,,:/var/run/speech-dispatcher:/bin/false
whoopsie:x:112:117::/nonexistent:/bin/false
hplip:x:118:7:HPLIP system user,,,:/var/run/hplip:/bin/false
gnome-initial-setup:x:120:65534::/run/gnome-initial-setup/:/bin/false
gdm:x:121:125:Gnome Display Manager:/var/lib/gdm3:/bin/false
ros:x:1000:1000:ROS,,,:/home/ros:/bin/bash
```

**例三：**查找/etc/acpi 及其子目录下所有文件中包含字符串"update"的文件，并打印出该字符串所在行，以及行的内容，可以使用如下命令：

```sh
grep -rn "update" /etc/acpi
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ grep -rn "update" /etc/acpi
/etc/acpi/events/thinkpad-cmos:7:action=/usr/sbin/thinkpad-keys --update
```

- **备注**：“update”的双引号，可以使用单引号，也可以省略

#### 3.2.4 **补充内容**：正则表达式

- 正则表达式是一种符号表示法，被用来识别文本模式
- 在某种程度上，它们与匹配文件和路径名的 shell 通配符比较相似，但其规模更大
- 许多命令行工具和大多数的编程语言都支持正则表达式，以此来帮助解决文本操作问题

1. **正则表达式元字符由以下字符组成：**

   `^` `$` `.` `[` `]` `{` `}` `-` `?` `*` `+` `(` `)` `|` `\`

![img](https://gitee.com/qielongfei/typora-image/raw/master/Image/userid3372labid353time1419920809160)

2. **常用范例**

**例一：**利用 Linux 系统自带的字典查找一个五个字母的单词，第三个字母为 j,最后一个字母为 r，`/usr/share/dict`目录下存放字典文件（若没有可手动建立），可以使用如下命令：

```sh
grep -E '^..j.r$' /usr/share/dict/words 
```

运行结果如下：

```sh
ros@ros-course:/etc/acpi/events$ grep '^..j.r$' /usr/share/dict/words 
Major
major
```

**例二：**验证固定电话，打印符合条件的电话，固定电话格式基本都是带有 0 的区号+连接符“-”+电话号码，另外还有可能有分机号，区号有 3 位、4 位，电话号码有 7 位和 8 位的，可以使用如下命令：

```sh
grep -E "^0[0-9]{2,3}-[0-9]{7,8}(-[0-9]{3,4})?$" telphone.txt
```

区号：前面一个 0，后面跟 2-3 位数字 0[0-9]{2,3}

电话号码：7-8 位数字 [0-9]{7,8}

分机号：一般都是 3-4 位数字 [0-9]{3,4}

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat telephone.txt 
010-3298643-0983
0953-3026840
0493-7392097-987
0726-38762-0973
ros@ros-course:~/ROS_Course$ grep -E "^0[0-9]{2,3}-[0-9]{7,8}(-[0-9]{3,4})?$" telephone.txt
010-3298643-0983
0953-3026840
0493-7392097-987
```

---

### 3.3 cut命令

- cut 命令是一个将文本按列进行切分的工具，它可以指定分隔每列的定界符
- 如果一行数据包含多个字段（多列），想要提取其中的一列或多列，可使用 cut 命令

#### 3.3.1 **命令格式**

> cut [选项] [文件名]

#### 3.3.2 **常用参数**

| 参数         | 描述                                               |
| ------------ | -------------------------------------------------- |
| -b           | 以字节为单位进行分割                               |
| -c           | 以字符为单位进行分割                               |
| -d           | 自定义分隔符，默认为制表符                         |
| -f           | 自定义字段                                         |
| --complement | 抽取整个文本行，除了那些由 -c 或 -f 选项指定的文本 |

#### 3.3.3 **常用范例**

**例一：**取出`student.txt`文件中的第一列和第三列，可以使用如下命令：

```sh
cut -f 1,3 -d ' ' student.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat students.txt 
no name score
1 a 88
2 b 86
3 c 97
4 d 85
5 e 90
ros@ros-course:~/ROS_Course$ cut -f 1,3 -d ' ' students.txt
no score
1 88
2 86
3 97
4 85
5 90
```

**例二：**取出`student.txt`文件中的前三列，可以使用如下命令：

```sh
cut -f 1-3 -d ' ' student.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cut -f 1-3 -d ' ' students.txt
no name score
1 a 88
2 b 86
3 c 97
4 d 85
5 e 90
```

**例三：**取出`student.txt`文件中除第一列的其他列，可以使用如下命令：

```sh
cut -f 1 -d ' ' student.txt --complement
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cut -f 1 -d ' ' students.txt --complement 
name score
a 88
b 86
c 97
d 85
e 90
```

**例四：**给任意一字符串 str，取出其最后一个字符，可以使用如下命令：

```sh
num=$(echo -n $str | wc -c)
echo -n $str | cut -b $num
#或者可以使用下面这段代码
echo -n $str | cut -b `echo -n $str | wc -c`
```

---

### 3.4 paste命令

- paste 命令的功能与 cut 相反。它会添加一个或多个文本列到文件中
- paste 命令读取多个文件，然后把每个文件中的字段整合成单个文本流，输入到标准输出

#### 3.4.1 **命令格式**

> paste [选项] [文件名]

#### 3.4.2 **常用参数**

| 参数 | 描述                             |
| ---- | -------------------------------- |
| -s   | 将每个文件合并成行而不是按行粘贴 |
| -d   | 自定义分隔符，默认为制表符       |

#### 3.4.3 **常用范例**

**例一：**将`students.txt`和`telephone.txt`文件中的内容按列拼接，可以使用如下命令：

```sh
paste students.txt telephone.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ paste students.txt telephone.txt
no name score	010-3298643-0983
1 a 88	0953-3026840
2 b 86	0493-7392097-987
3 c 97	0726-38762-0973
4 d 85	
5 e 90	
```

**例二：**将`students.txt`和`telephone.txt`文件中的内容按列拼接，指定分隔符为`:`，可以使用如下命令：

```sh
paste students.txt telephone.txt -d ':'
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ paste students.txt telephone.txt -d ':'
no name score:010-3298643-0983
1 a 88:0953-3026840
2 b 86:0493-7392097-987
3 c 97:0726-38762-0973
4 d 85:
5 e 90:
```

**例三：**将`students.txt`和`telephone.txt`文件中的内容各自拼接成一行，可以使用如下命令：

```sh
paste -s students.txt telephone.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ paste -s students.txt telephone.txt
no name score	1 a 88	2 b 86	3 c 97	4 d 85	5 e 90
010-3298643-0983	0953-3026840	0493-7392097-987	0726-38762-0973
```

---

### 3.5 tr命令

- tr 是 translate 的缩写
- tr 命令被用来更改字符，可以看作是一种基于字符的查找和替换操作
- tr 只能通过 stdin（标准输入），而无法通过命令行参数来接受输入

#### 3.5.1 **命令格式**

> tr [选项] SET1 SET2
>
> 备注：将来自 stdin 的输入字符从 SET1 映射到 SET2，并将其输出写入 stdout（标准输出）。SET1 和 SET2  是字符类或字符集。如果两个字符集的长度不相等，那么 SET2 会不断重复其最后一个字符，直到长度与 SET1 相同。如果 SET2 的长度大于  SET1，那么在 SET2 中超出 SET1 的那部分字符则全部被忽略

#### 3.5.2 **常用参数**

| 参数 | 描述                             |
| ---- | -------------------------------- |
| -d   | 删除SET1中匹配的内容，并不作替换 |

#### 3.5.3 **常用范例**

**例一：**将输入的字符大写转换为小写，可以使用如下命令：

```sh
echo 'THIS IS ROS!' | tr 'A-Z' 'a-z'
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ echo 'THIS IS ROS!' | tr 'A-Z' 'a-z'
this is ros!
```

**例二：**将输入的字符中的数字删除，可以使用如下命令：

```sh
echo 'THIS 123 IS ROS!' | tr -d '0-9'
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ echo 'THIS 123 IS ROS!' | tr -d '0-9'
THIS  IS ROS!
```

**例三：**tr 命令的一个有趣的用法是执行 ROT13 文本编码。ROT13  是一款微不足道的基于一种简易的替换暗码的加密类型。把 ROT13  称为“加密”是不严格的，“文本模糊处理”更准确些。有时候它被用来隐藏文本中潜在的攻击内容。这个方法就是简单地把每个字符在字母表中向前移动 13  位。因为移动的位数是所有 26 个字母的一半，所以对文本再次执行这个算法，就恢复到了它最初的形式。可以使用如下命令：

```sh
#加密
echo 'ROS Course' | tr 'a-zA-Z' 'n-za-mN-ZA-M'
```

得到结果：EBF Pbhefr

```sh
#解密
echo 'EBF Pbhefr' | tr 'a-zA-Z' 'n-za-mN-ZA-M'
```

得到结果 ROS Course

---

### 3.6 sort命令

- sort 命令能够帮助我们对文本文件和 stdin 进行排序操作
- 通常，sort会结合其他命令来生成所需要的输出

#### 3.6.1 **命令格式**

> sort [选项] [文件名]

#### 3.6.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -n   | 基于字符串的长度来排序，使用此选项允许根据数字值排序，而不是字母值 |
| -k   | 指定排序关键字                                               |
| -b   | 默认情况下，对整行进行排序，从每行的第一个字符开始。这个选项使得sort 程序忽略每行开头的空格，从第一个非空白字符开始排序 |
| -m   | 只合并多个输入文件                                           |
| -r   | 按相反顺序排序，结果按照降序排列                             |
| -t   | 自定义分隔符，默认为制表符                                   |

#### 3.6.3 **常用范例**

**例一：**列出`/usr/share/`目录下使用空间最多的前 10 个目录文件，可以使用如下命令：

```sh
du -s /usr/share/* | sort -nr | head -10
```

- **备注：**`du -s /usr/share/*`命令显示`/usr/share/`目录下所有文件和目录的磁盘使用空间，目录包含目录下的子目录和文件

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ du -s /usr/share/* | sort -nr | head -10
423928	/usr/share/fonts
224600	/usr/share/typora
175716	/usr/share/doc
80744	/usr/share/icons
76292	/usr/share/gazebo-9
59544	/usr/share/locale
40940	/usr/share/ibus
38700	/usr/share/man
37360	/usr/share/backgrounds
35460	/usr/share/help
```

**例二：**对 ls 命令输出信息中的空间使用大小字段进行排序，可以使用如下命令：

```sh
ls -l /usr/bin/ | sort -nr -k 5 | head -10
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ ls -l /usr/bin/ | sort -nr -k 5 | head -10
-rwxr-xr-x 1 root root    51859776 1月  26  2018 pandoc
-rwxr-xr-x 1 root root    19610632 3月  26 23:49 snap
-rwxr-xr-x 1 root root     8612088 5月  28  2018 gzclient-9.0.0
-rwxr-xr-x 1 root root     7619056 10月 30  2020 gdb
-rwxr-xr-x 1 root root     6518192 4月   4 22:10 ctest
-rwxr-xr-x 1 root root     5893648 6月  24  2019 ubuntu-report
-rwxr-xr-x 1 root root     5566864 4月   4 22:10 cpack
-rwxr-xr-x 1 root root     5325648 4月   4 22:10 cmake
-rwxr-xr-x 1 root root     4992936 4月  30  2020 shotwell
-rwxr-xr-x 1 root root     4551912 1月  13  2020 gnome-control-center
```

---

### 3.7 uniq 命令    

- uniq 命令是 unique 的缩写
- uniq 命令经常和 sort 命令结合在一起使用。uniq 从标准输入或单个文件名参数接受数据有序列表，默认情况下，从数据列表中删除重复出现的行列
- uniq 只能用于排过序的数据输入，因此，uniq 要么使用管道，要么将排过序的文件作为输入，总是以这种方式与 sort 命令结合起来使用

#### 3.7.1 **命令格式**

> uniq [选项] [文件名]

#### 3.7.2 **常用参数**

| 参数 | 描述                                       |
| ---- | ------------------------------------------ |
| -c   | 在每行前加上表示相应行目出现次数的前缀编号 |
| -d   | 只输出重复的行                             |
| -u   | 只显示唯一的行                             |
| -D   | 显示所有重复的行                           |
| -f   | 比较时跳过前 n 列                          |
| -i   | 在比较的时候不区分大小写                   |
| -s   | 比较时跳过前 n 个字符                      |
| -w   | 对每行第 n 个字符以后的内容不作对照        |

#### 3.7.3 **常用范例**

**例一：**找出`/bin`目录和`/usr/bin`目录下所有相同的命令，可以使用如下命令：

```sh
ls /bin /usr/bin | sort | uniq -d
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ ls /bin /usr/bin | sort | uniq -d
chacl
dumpkeys
getfacl
less
lessecho
lessfile
lesskey
lesspipe
loadkeys
setfacl
touch
which
```

**例二：**现有student1.txt文件内容如下，其中第四列第一个字符表示区号，现在要统计出各个区号的总人数

```sh
ros@ros-course:~/ROS_Course$ cat student1.txt
li 100 89 1-34-56
sun 200 90 2-34-56
wan 321 88 2-34-51
qun 234 92 1-34-56
zhao 452 93 1-23-89
```

实现思路：首先按区号对每行信息排序，然后使用 uniq 命令对区号进行重复行统计。使用命令如下：

```sh
sort -k 4.1n student1.txt | uniq -c -f 3 -w 2
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ sort -k 4.1n student1.txt | uniq -c -f 3 -w 2
      3 li 100 89 1-34-56
      2 sun 200 90 2-34-56
```

- **运行结果说明**：
  - `sort -k 4.1n`表示对第四个字段的第一个字符按数值排序
  - `uniq -c -f 3 -w 2`中 -f 3 表示跳过前三列的比较，那么现在只剩下最后一列，-w 2 表示第 2 个字符后的内容不做比较，为什么是 2 呢，因为跳过前三列时并没有跳过最后一列前面的空格分隔符，区号前都还有一个空格

---

### 3.8 join命令

- join 命令类似于 paste，它会往文件中添加列
- join 命令跟 uniq 命令一样，只能用于排过序的数据
- join 命令将两个文件中指定栏位相同的行连接起来

#### 3.8.1 **命令格式**

> join [选项] 文件 1 文件 2

#### 3.8.2 **常用参数**

| 参数     | 描述                                                |
| -------- | --------------------------------------------------- |
| -j FIELD | 等同于 -1 FIELD -2 FIELD，-j 指定一个域作为匹配字段 |
| -1 FIELD | 以 file1 中 FIELD 字段进行匹配                      |
| -2 FIELD | 以 file2 中 FIELD 字段进行匹配                      |
| -t       | 自定义分隔符，默认为制表符                          |

#### 3.8.3 **常用范例**

**例一**：指定两个文件的第三个字段为匹配字段，连接两个文件，可以使用如下命令：

```sh
join -1 3 -2 3 student1.txt student2.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat student1.txt 
wan 321 89 2-34-51
li 100 90 1-34-56
sun 200 91 2-34-56
qun 234 92 1-34-56
zhao 452 93 1-23-89
ros@ros-course:~/ROS_Course$ cat student2.txt 
zhao 252 89 2-73-69
qun 278 90 3-33-46
wan 322 91 7-31-91
ros@ros-course:~/ROS_Course$ join -1 3 -2 3 student1.txt student2.txt
89 wan 321 2-34-51 zhao 252 2-73-69
90 li 100 1-34-56 qun 278 3-33-46
91 sun 200 2-34-56 wan 322 7-31-91
```

- **备注：**应用join前要对student1.txt 和 student2.txt 进行排序

---

### 3.9 comm命令

- comm 命令用于逐行比较已经排序的两个文件
- 显示结果包括 3 列：第 1 列为只在第一个文件中找到的行，第 2 列为只在第二个文件中找到的行，第 3 列为两个文件的共有行
- comm 命令和 join、uniq 命令一样，只能用于已经排过序的数据。

#### 3.9.1 **命令格式**

> comm [选项] 文件 1 文件 2

#### 3.9.2 **常用参数**

| 参数 | 描述                   |
| ---- | ---------------------- |
| -1   | 不输出文件 1 特有的行  |
| -2   | 不输出文件 2 特有的行  |
| -3   | 不输出两个文件共有的行 |

#### 3.9.4 **常用范例**

**例一：**比较`student3.txt`和`student4.txt`两个文件的内容，可以使用如下命令：

```sh
comm student3.txt student4.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat student3.txt 
li 100 90 1-34-56
qun 234 92 1-34-56
sun 200 91 2-34-56
zhao 252 89 2-73-69
zhao 452 93 1-23-89
ros@ros-course:~/ROS_Course$ sort student4.txt
qun 234 92 1-34-56
qun 278 90 3-33-46
zhao 252 89 2-73-69
ros@ros-course:~/ROS_Course$ comm student3.txt student4.txt
li 100 90 1-34-56
		qun 234 92 1-34-56
	qun 278 90 3-33-46
sun 200 91 2-34-56
		zhao 252 89 2-73-69
zhao 452 93 1-23-89
```

**例二：**比较`student3.txt`和`student4.txt`两个文件的内容，只显示两个文件共有的内容，可以使用如下命令：

```sh
comm -12 student3.txt student4.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ comm -12 student3.txt student4.txt
qun 234 92 1-34-56
zhao 252 89 2-73-69
```

---

### 3.10 diff命令

- diff 命令是 differential 的缩写
- 类似 comm 命令，diff 命令被用来检测文件之间的差异
- diff命令一次能处理许多文本文件。软件开发员经常使用 diff  程序来检查不同程序源码版本之间的更改，diff 能够递归地检查源码目录，通常称之为源码树
- diff 在命令行中打印每一行的改动，并且 diff 是 svn、cvs、git 等版本控制工具不可或缺的一部分

#### 3.10.1 **命令格式**

> diff [选项] 文件

#### 3.10.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -c   | 上下文模式，显示全部内文，并标出不同之处                     |
| -u   | 统一模式，以合并的方式来显示文件内容的不同                   |
| -a   | 只会逐行比较文本文件                                         |
| -N   | 在比较目录时，若文件 A 仅出现在某个目录中，预设会显示：Only in 目录。若使用 -N 参数，则 diff 会将文件 A 与一个空白的文件比较 |
| -r   | 递归比较目录下的文件                                         |

#### 3.10.3 **常用范例**

**例一**：显示`student3.txt`和`student4.txt`两个文件的差异，可以使用如下命令：

```sh
diff file1.txt file2.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ cat student3.txt 
li 100 90 1-34-56
qun 234 92 1-34-56
sun 200 91 2-34-56
zhao 252 89 2-73-69
zhao 452 93 1-23-89
ros@ros-course:~/ROS_Course$ cat student4.txt 
qun 234 92 1-34-56
qun 278 90 3-33-46
zhao 252 89 2-73-69
ros@ros-course:~/ROS_Course$ diff student3.txt student4.txt
1d0
< li 100 90 1-34-56
3c2
< sun 200 91 2-34-56
---
> qun 278 90 3-33-46
5d3
< zhao 452 93 1-23-89
```

- **运行结果说明**：
  - 上面结果显示中的“1d0”表示`student3.txt`文件比`studengt4.txt`文件多了第一行
  - “3c2”表示`student3.txt`文件的第三行和`student4.txt`文件的第二行不同

**例二：**从上面例一的显示结果可以知道，`student3.txt`和`student4.txt`两个文件的差异不易直观看出，这时可以使用上下文模式显示，可以使用如下命令：

```sh
diff -c student3.txt student4.txt
```

运行结果如下：

```sh
*** student3.txt	2021-08-14 15:12:11.352661281 +0800
--- student4.txt	2021-08-14 15:12:25.683063156 +0800
***************
*** 1,5 ****
- li 100 90 1-34-56
  qun 234 92 1-34-56
! sun 200 91 2-34-56
  zhao 252 89 2-73-69
- zhao 452 93 1-23-89
--- 1,3 ----
  qun 234 92 1-34-56
! qun 278 90 3-33-46
  zhao 252 89 2-73-69
```

- **运行结果说明**：
  - 这个输出结果以两个文件名和它们的时间戳开头
  - 第一个文件用星号做标记，第二个文件用短横线做标记
  - `*** 1,5 *** 表示第一个文件中第一行到第五行的文本行`
  - `--- 1,3 --- 表示第二个文件中第一行到第三行的文本行`
  - 三种特殊字符：
    - `+` 添加行，这一行将会出现在第二个文件内，而不是第一个文件内
    - `-` 删除行，这一行将会出现在第一个文件中，而不是第二个文件内
    - `!` 更改行，将会显示某个文本行的两个版本，每个版本会出现在更改组的各自部分
    - 这些特殊字符很容易混淆，实际上记住一点就：**所有操作目的是将第一个文件变成第二个文件**

---

### 3.11 patch命令

- patch 命令被用来把更改应用到文本文件中。它接受从 diff  程序的输出，并且通常被用来把较老的文件版本转变为较新的文件版本
- 使用 diff/patch 组合提供了两个重大优点：

1. 与整个源码树的大小相比较而言，一个 diff 文件非常小
2. 一个 diff 文件简洁地显示所做的修改，从而允许程序补丁的审阅者能快速地评估它

- GNU 文档建议这样使用 diff/patch 命令：

```
diff -Naur old_file new_file > diff_file
```

old file 和 new file 部分不是单个文件就是包含文件的目录， r 选项支持递归目录树

#### 3.11.1 **命令格式**

> patch [选项] 补丁文件

#### 3.11.2 **常用参数**

| 参数   | 描述                       |
| ------ | -------------------------- |
| -p num | 忽略几层文件夹             |
| -E     | 如果发现了空文件，就删除它 |
| -R     | 取消打过的补丁             |

#### 3.11.3 **常用范例**

**例一：**生成`student3.txt`和`student4.txt`的 diff 文件，然后应用 patch 命令更新`file1.txt`文件，可以使用如下命令：

```sh
diff  -Naur file1.txt  file2.txt > patchdiff.txt
patch < patchdiff.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ diff -Naur student3.txt  student4.txt > patchdiff.txt
ros@ros-course:~/ROS_Course$ cat patchdiff.txt 
--- student3.txt	2021-08-14 15:12:11.352661281 +0800
+++ student4.txt	2021-08-14 15:12:25.683063156 +0800
@@ -1,5 +1,3 @@
-li 100 90 1-34-56
 qun 234 92 1-34-56
-sun 200 91 2-34-56
+qun 278 90 3-33-46
 zhao 252 89 2-73-69
-zhao 452 93 1-23-89
```

---

### 3.12 df命令

- df 命令是 disk free 的缩写
- df 命令用来检查 linux 服务器的文件系统的磁盘空间占用情况。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息

#### 3.12.1 **命令格式**

> df [选项] 文件

3.12.2 **常用参数**

| 参数             | 描述                         |
| ---------------- | ---------------------------- |
| -a               | 全部文件系统列表             |
| -h               | 方便阅读方式显示             |
| -i               | 显示 inode 信息              |
| -T               | 文件系统类型                 |
| -t<文件系统类型> | 只显示选定文件系统的磁盘信息 |
| -x<文件系统类型> | 不显示选定文件系统的磁盘信息 |

#### 3.12.3 **常用范例**

**例一：**显示磁盘使用情况，可以使用如下命令：

```sh
df
```

**例二：**以 inode 模式来显示磁盘使用情况，可以使用如下命令：

```sh
df -i
```

**例三：**列出文件系统的类型，可以使用如下命令：

```sh
df -T
```

**例四：**显示指定类型磁盘，可以使用如下命令：

```sh
df -t ext4
```

---

### 3.13 du命令

- du 命令是 disk usage 的缩写
- du 命令也是查看使用空间的，但是与 df 命令不同的是 du 命令是对文件和目录磁盘使用的空间的查看

#### 3.13.1 **命令格式**

> du [选项] 文件

#### 3.13.2 **常用参数**

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| -a   | 显示目录中所有文件的大小。                                   |
| -b   | 显示目录或文件大小时，以 byte 为单位。                       |
| -c   | 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。 |
| -k   | 以 KB(1024bytes)为单位输出。                                 |
| -m   | 以 MB 为单位输出。                                           |
| -s   | 仅显示总计，只列出最后加总的值。                             |
| -h   | 以 K，M，G 为单位，提高信息的可读性。                        |

#### 3.13.3 **常用范例**

**例一：**显示指定文件所占空间，以方便阅读的格式显示，可以使用如下命令：

```sh
du -h file1.txt
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ du -h student3.txt
4.0K	student3.txt
```

**例二：**显示指定目录所占空间，以方便阅读的格式显示，可以使用如下命令：

```sh
du -h ~/ROS_Course
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ du -h ~/ROS_Course
8.0K	/home/ros/ROS_Course/test1
8.0K	/home/ros/ROS_Course/test
104K	/home/ros/ROS_Course
```

**例三：**按照空间大小逆序排序显示，使用如下命令：

```sh
du -h | sort -nr | head -10
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ du -h | sort -nr | head -10
104K	.
8.0K	./test1
8.0K	./test
```

---

### 3.14 time命令

- time 命令常用于测量一个命令的运行时间，包括实际使用时间（real time）、用户态使用时间（the process spent in user mode）、内核态使用时间（the process spent in kernel mode）
  - 实际时间: 从 command 命令行开始执行到运行终止的时间
  - 用户态使用时间：命令执行完成花费的用户 CPU 时间，即命令在用户态中执行时间总和
  - 内核态使用时间：命令执行完成花费的系统 CPU 时间，即命令在核心态中执行时间总和

#### 3.14.1 **命令格式**

> time 命令

#### 3.14.2 **常用范例**

**例一：**测量 date 命令运行的时间，可以使用如下命令：

```sh
time date
```

运行结果如下：

```sh
ros@ros-course:~/ROS_Course$ time date
2021年 08月 14日 星期六 16:08:08 CST

real	0m0.002s
user	0m0.000s
sys      0m0.001s
```

- 从上面的结果可以到：实际运行时间为 0.002s，用户 cpu 时间为 0.000s，系统 cpu 时间为 0.001s
- 其中，用户 CPU 时间和系统 CPU 时间之和为 CPU 时间，即命令占用 CPU 执行的时间总和
- 实际时间要大于 CPU 时间，因为 Linux 是多任务操作系统，往往在执行一条命令时，系统还要处理其它任务