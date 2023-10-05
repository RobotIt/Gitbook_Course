# Markdown 使用模板

Markdown官方教程： https://markdown.com.cn/

### 1 标题

语法：
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题  
```
执行效果：
![](images/Markdown_title.png) 


### 2 段落

语法：
```
使用空白行将一行或多行文本进行分隔:  
第一段I really like using Markdown.

第二段I think I'll use it to format all of my documents from now on.
```
执行效果：  
使用空白行将一行或多行文本进行分隔:  
第一段I really like using Markdown.

第二段I think I'll use it to format all of my documents from now on.


### 3 换行

语法1：  
```
在一行末尾加两个空格后回车进行换行:  
第一段I really like using Markdown.  
第二段I think I'll use it to format all of my documents from now on.
``` 
执行效果：  
在一行末尾加两个空格后回车进行换行:  
第一段I really like using Markdown.  
第二段I think I'll use it to format all of my documents from now on.

语法2：
```
使用<br>进行换行:  
第一段I really like using Markdown<br>.
第二段I think I'll use it to format all of my documents from now on.
```
执行效果：  
使用`<br>`进行换行:  
第一段I really like using Markdown.<br>
第二段I think I'll use it to format all of my documents from now on.


### 4 强调

语法：
```
1. 加粗
在单词或短语前后各加两个**星号**或下划线，__下划线__ 前后不能有字。

2. 斜体
在单词或短语前后各加一个*星号*或 _下划线_。

3. 斜体和加粗
在单词或短语的前后各添加三个 ***星号***或 ___ABC___。也可以进行组合，例如：**_A_**  或 __*B*__。
```
执行效果：  
1 加粗  
在单词或短语前后各加两个**星号**或下划线，__下划线__ 前后不能有字。

2 斜体  
在单词或短语前后各加一个*星号*或 _下划线_。

3 斜体和加粗  
在单词或短语的前后各添加三个 ***星号***或 ___ABC___。也可以进行组合，例如：**_A_**  或 __*B*__。



### 5 引用

语法：
```
1. 块引用
在段落前添加一个 > 号，例如  
>Dorothy followed her through many of the beautiful rooms in her castle.  

2. 多个段落块引用
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.  
  
3. 嵌套块引用
>一级嵌套第一段 
>
>一级嵌套第二段
>>二级嵌套第一段
>>
>>二级嵌套第二段
>>
>>二级嵌套第三段  
>>  
>>>三级嵌套第一段  
>>>三级嵌套第二段


4. 带有其他语法的块引用
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going according to **plan**.
```

执行效果：  
1 块引用  
在段落前添加一个 > 号，例如  
>Dorothy followed her through many of the beautiful rooms in her castle.  

2 多个段落块引用  
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.  
  
3 嵌套块引用  
>一级嵌套第一段 
>
>一级嵌套第二段
>>二级嵌套第一段
>>
>>二级嵌套第二段
>>
>>二级嵌套第三段  
>>  
>>>三级嵌套第一段  
>>>三级嵌套第二段

4 带有其他语法的块引用  
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

###  6 列表

语法：
```
1 有序列表  
在列表前添加数字和英文句点，数字必须以1开头，后续不必按照顺序排列。  
1. aaa
2. bbb
3. ccc
4. 789

2 无序列表  
在列表前添加破折号(-)、(*)或(+)，缩进一个或多个列表项可以创建嵌套列表。
- aaa  
- bbb
- ccc
    - ddd
    - eee
        - fff
    - ggg
- hhh

3 列表中嵌套其他元素  
3.1 嵌套段落
*   第一项
*   第二项  
    需要在第二项下加入其他项目
*   第三项
*   第四项

3.2 引用块
*   第一项
*   第二项
    >引用块在第二个项下方
    >
    >
*   第三项

3.3 代码块
1. 第一步骤
2. 第二步骤，代码相关操作：（采用两个制表符缩进）
        <html>
            <head>
            <title>Test<title>
            </head>
        </html>
3. 第三步骤
4. 第四步骤

3.4 图片
1. 第一步骤
2. 第二步骤，图片相关操作：
![图片不显示时显示](相对路径 "图片显示时鼠标悬停时显示名称")
举例：![test picture](images/a.png "Picture")
> 根据实操结果，markdown中的图片路径最好使用相对路径的方式，如果要引用其他文件夹的图片，需要使用相对路径表示法，表述出其他文件的路径信息，例如: "../../"这种方式
3. 第三步骤

3.5 列表
1. 第一项
2. 第二项
3. 第三项
    - 缩进项目
    - 缩进项目
4. 第四项
5. 第五项
```

执行效果：  
1 有序列表  
在列表前添加数字和英文句点，数字必须以1开头，后续不必按照顺序排列。  
1. aaa
2. bbb
3. ccc
4. 789

2 无序列表  
在列表前添加破折号(-)、(*)或(+)，缩进一个或多个列表项可以创建嵌套列表。
- aaa  
- bbb
- ccc
    - ddd
    - eee
        - fff
    - ggg
- hhh

3 列表中嵌套其他元素  
3.1 嵌套段落
*   第一项
*   第二项  
    需要在第二项下加入其他项目
*   第三项
*   第四项

3.2 引用块
*   第一项
*   第二项
    >引用块在第二个项下方
    >
    >
*   第三项

3.3 代码块
1. 第一步骤
2. 第二步骤，代码相关操作：（采用两个制表符缩进）
        <html>
            <head>
            <title>Test<title>
            </head>
        </html>
3. 第三步骤
4. 第四步骤

3.4 图片
1. 第一步骤
2. 第二步骤，图片相关操作：
![图片不显示时显示](相对路径 "图片显示时鼠标悬停时显示名称")
举例：![test picture](images/a.png "Picture")
> 根据实操结果，markdown中的图片路径最好使用相对路径的方式，如果要引用其他文件夹的图片，需要使用相对路径表示法，表述出其他文件的路径信息，例如: "../../"这种方式
3. 第三步骤

3.5 列表
1. 第一项
2. 第二项
3. 第三项
    - 缩进项目
    - 缩进项目
4. 第四项
5. 第五项


### 7 代码

语法：
```
1. 反引号包裹代码
命令提示，`nano`类型

2. 转义反引号
代码的单词或短语中包含多个反引号时使用  
``Use `code` in Markdown file.``

3. 代码块
3个反引号(```将以下代码填入此处```)
<html>
    <head>
    <title>Test<title>
    </head>
    <bash>
        <jg>
    </bash>
</html>
```

执行效果：  

1 反引号包裹代码  
命令提示，`nano`类型

2 转义反引号  
代码的单词或短语中包含多个反引号时使用  
``Use `code` in Markdown file.``

3 代码块
```
<html>
    <head>
    <title>Test<title>
    </head>
    <bash>
        <jg>
    </bash>
</html>
```

### 8 分割线

语法：
```
使用三个或多个星号(*)、破折号(-)或下划线(_)可创建分割线
***
---
___
```
执行效果：  
使用三个或多个星号(*)、破折号(-)或下划线(_)可创建分割线

***

---

___


### 9 链接

语法：
```
1. 语法代码
[超链接显示名](超链接地址 "超链接title")
超链接：[Markdown语法教学](https://markdown.com.cn "Markdown语法教学链接")

2. 网址和Email地址
使用尖括号将网址括起
<https://markdown.com.cn>
<fake@example.com>

3. 带格式化的链接
在链接语法前后加星号(*)，可以对链接进行加粗  
在方括号中加反引号，可将链接表示为代码
Markdown指引网站 **[Markdown Guide](https://www.markdownguide.org)**。
代码链接[`code`](https://eff.org)
```

执行效果：  
1 语法代码  
[超链接显示名](超链接地址 "超链接title")  
超链接：[Markdown语法教学](https://markdown.com.cn "Markdown语法教学链接")

2 网址和Email地址
使用尖括号将网址括起  
<https://markdown.com.cn>  
<fake@example.com>

3 带格式化的链接  
在链接语法前后加星号(`**`)，可以对链接进行加粗  
Markdown指引网站 **[Markdown Guide](https://www.markdownguide.org)**。  
在方括号中加反引号，可将链接表示为代码  
代码链接[`code`](https://eff.org)


### 10 图片

语法：
```
1. 本地图片连接
![替代文本](图片相对路径 "图片title")
![picture](images/a.png "1")

2. 网络图片链接
![picture2](https://img0.baidu.com/it/u=2767790527,3674585198&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"Shiprock")
```

执行效果：  
1 本地图片连接
![替代文本](图片相对路径 "图片title")
![picture](images/a.png "1")

2 网络图片链接
![picture2](https://img0.baidu.com/it/u=2767790527,3674585198&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"Shiprock")

### 11 表格

语法：
```
|  表头1  | 表头2 |
|  -  | -  |
| 1行1列   |  1行2列  |
| 2行1列   |  2行2列  |
表格行和列还可以扩展，格式相同
```

执行效果：  

|  表头1  | 表头2 |
|  -  | -  |
| 1行1列   |  1行2列  |
| 2行1列   |  2行2列  |


