---
title: Linux学习-文件管理
date: 2018-05-17 12:23:48
tags:
	- Linux
	- 文件管理
categories:
	- Linux
keywords:
description:
---
<meta name="google-site-verification" content="YFzUwcgRAuqzR4o_NcNxgctd-2K9Hq2nKwMb7tTQH_c" />
<meta name="baidu-site-verification" content="BEjCtLntqs" />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [文件管理](#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86)
  - [查看文件信息:`ls`](#%E6%9F%A5%E7%9C%8B%E6%96%87%E4%BB%B6%E4%BF%A1%E6%81%AFls)
  - [输出重定向命令:`>`](#%E8%BE%93%E5%87%BA%E9%87%8D%E5%AE%9A%E5%90%91%E5%91%BD%E4%BB%A4)
  - [分屏显示:`more`](#%E5%88%86%E5%B1%8F%E6%98%BE%E7%A4%BAmore)
  - [管道:`|`](#%E7%AE%A1%E9%81%93)
  - [清屏:`clear`](#%E6%B8%85%E5%B1%8Fclear)
  - [切换工作目录:`cd`](#%E5%88%87%E6%8D%A2%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95cd)
  - [显示当前路径:`pwd`](#%E6%98%BE%E7%A4%BA%E5%BD%93%E5%89%8D%E8%B7%AF%E5%BE%84pwd)
  - [创建目录：`mkdir`](#%E5%88%9B%E5%BB%BA%E7%9B%AE%E5%BD%95mkdir)
  - [删除目录:`rmdir`](#%E5%88%A0%E9%99%A4%E7%9B%AE%E5%BD%95rmdir)
  - [删除文件:`rm`](#%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6rm)
  - [建立链接文件:`ln`](#%E5%BB%BA%E7%AB%8B%E9%93%BE%E6%8E%A5%E6%96%87%E4%BB%B6ln)
  - [查看或者合并文件内容：cat](#%E6%9F%A5%E7%9C%8B%E6%88%96%E8%80%85%E5%90%88%E5%B9%B6%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9cat)
  - [拷贝文件：`cp`](#%E6%8B%B7%E8%B4%9D%E6%96%87%E4%BB%B6cp)
  - [移动文件：`mv`](#%E7%A7%BB%E5%8A%A8%E6%96%87%E4%BB%B6mv)
  - [归档管理：`tar`](#%E5%BD%92%E6%A1%A3%E7%AE%A1%E7%90%86tar)
  - [文件压缩解压：`gzip`](#%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8Bgzip)
  - [文件压缩解压：bzip2](#%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8Bbzip2)
  - [文件压缩解压：zip、unzip](#%E6%96%87%E4%BB%B6%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8Bzipunzip)
  - [查看命令位置：which](#%E6%9F%A5%E7%9C%8B%E5%91%BD%E4%BB%A4%E4%BD%8D%E7%BD%AEwhich)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# 文件管理

## 查看文件信息:`ls`

ls单词list缩写，功能就是列出目录的内容
`Linux文件或者目录名称最长可以有265个字符，“.”代表当前目录，“..”代表上一级目录，以“.”开头的文件为隐藏文件，需要用 -a 参数才能显示。`


**ls常用参数**

|参数 |参数含义 |
|:-------|:--------|	
|-a |列出目录下的所有的文件和子目录，包括隐含文件|
|-l |以列表方式显示文件的详细信息|
|-h |配合 -l 以人性化的方式显示文件大小|


![1](http://oojl6chve.bkt.clouddn.com//18-5-15/73854249.jpg)
![2](http://oojl6chve.bkt.clouddn.com//18-5-15/62332904.jpg)
![3](http://oojl6chve.bkt.clouddn.com//18-5-15/84604572.jpg)
![4](http://oojl6chve.bkt.clouddn.com//18-5-15/90066911.jpg)

图中列出的信息含义如下图所示：
![5](http://oojl6chve.bkt.clouddn.com//18-5-15/53920332.jpg)
与DOS下的文件操作类似，在Unix/Linux系统中，也同样允许使用特殊字符来同时引用多个文件名，这些特殊字符被称为通配符。 	

| 通配符  | 含义 |
|:-----   |:-----   |
|*|文件代表文件名中所有字符|
|ls te*|查找以te开头的文件|
|ls *html|查找结尾为html的文件|
| ？ | 代表文件名中任意一个字符 |
| ls ?.c | 只找第一个字符任意，后缀为.c的文件 |
| ls a.? | 只找只有3个字符，前2字符为a.，最后一个字符任意的文件 |
| [] | [”和“]”将字符组括起来，表示可以匹配字符组中的任意一个。“-”用于表示字符范围。 |
| [abc] | 匹配a、b、c中的任意一个 |
| [a-f] | 匹配从a到f范围内的的任意一个字符 |
| ls [a-f]* | 找到从a到f范围内的的任意一个字符开头的文件 |
| ls a-f | 查找文件名为a-f的文件,当“-”处于方括号之外失去通配符的作用 |
| \ | 如果要使通配符作为普通字符使用，可以在其前面加上转义字符。“?”和“*”处于方括号内时不用使用转义字符就失去通配符的作用。 |
| ls \*a | 查找文件名为*a的文件 |

## 输出重定向命令:`>`

Linux允许将命令执行结果重定向到一个文件，本应显示在终端上的内容保存到指定文件中。

如：ls > test.txt' ( test.txt 如果不存在，则创建，存在则覆盖其内容 )

![6](http://oojl6chve.bkt.clouddn.com//18-5-16/91543317.jpg)
![7](http://oojl6chve.bkt.clouddn.com//18-5-16/84542794.jpg)

注意： `>输出重定向会覆盖原来的内容，>>输出重定向则会追加到文件的尾部。`


## 分屏显示:`more`
查看内容时，在信息过长无法在一屏上显示时，会出现快速滚屏，使得用户无法看清文件的内容，此时可以使用`more`命令，每次只显示一页，按下空格键可以显示下一页，按下q键退出显示，按下h键可以获取帮助。
`more 1.txt`

## 管道:`|`
管道：一个命令的输出可以通过管道做为另一个命令的输入。

管道我们可以理解现实生活中的管子，管子的一头塞东西进去，另一头取出来，这里“ | ”的左右分为两端，左端塞东西(写)，右端取东西(读)。

![8](http://oojl6chve.bkt.clouddn.com//18-5-16/47949090.jpg)

## 清屏:`clear`
clear作用为清除终端上的显示(类似于DOS的cls清屏功能)，也可使用快捷键：`Ctrl + l` ( “l” 为字母 )。

## 切换工作目录:`cd`
在使用Unix/Linux的时候，经常需要更换工作目录。cd命令可以帮助用户切换工作目录。`Linux所有的目录和文件名大小写敏感`

cd后面可跟绝对路径，也可以跟相对路径。如果省略目录，则默认切换到当前用户的主目录。

|命令|含义| 	
| -------|:---------|
|cd  |  切换到当前用户的主目录(/home/用户目录)，用户登陆的时候，默认的目录就是用户的主目录。|
| cd ~   | 切换到当前用户的主目录(/home/用户目录)|
| cd . | 切换到当前目录 |
| cd ..  | 切换到上级目录 |
| cd -  | 可进入上次所在的目录 |

**注意**：如果路径是从根路径开始的，则路径的前面需要加上 “ / ”，如 “ /mnt ”，通常进入某个目录里的文件夹，前面不用加 “ / ”。

## 显示当前路径:`pwd`

## 创建目录：`mkdir`
通过mkdir命令可以创建一个新的目录。**参数-p可递归创建目录。**
需要注意的是新建目录的名称不能与当前目录中已有的目录或文件同名，并且目录创建者必须对当前目录具有写权限。

![9](http://oojl6chve.bkt.clouddn.com//18-5-16/38371374.jpg)

## 删除目录:`rmdir`
可使用`rmdir`命令删除一个目录。必须离开目录，并且目录必须为空目录，不然提示删除失败。

## 删除文件:`rm`
可通过rm**删除文件或目录**。使用rm命令要小心，因为文件删除后不能恢复。为了防止文件误删，可以在rm后使用-i参数以逐个确认要删除的文件。

常用参数及含义如下表所示：
| 参数 | 含义 |
| --- | --- |
| -i | 以进行交互式方式执行 |
| -f | 强制删除，忽略不存在的文件，无需提示 |
| -r | 递归地删除目录下的内容，删除文件夹时必须加此参数 |

![10](http://oojl6chve.bkt.clouddn.com//18-5-16/33364652.jpg)

![11](http://oojl6chve.bkt.clouddn.com//18-5-16/6562895.jpg)

## 建立链接文件:`ln`
Linux链接文件类似于Windows下的快捷方式。
链接文件分为软链接和硬链接。
**软链接**：软链接不占用磁盘空间，源文件删除则软链接失效。
**硬链接**：硬链接只能链接普通文件，不能链接目录。
使用格式：
```
ln 源文件 链接文件 //硬连接
ln -s 源文件 链接文件 //软连接
```

如果`没有-s`选项代表建立一个硬链接文件，两个文件占用相同大小的硬盘空间，即使删除了源文件，链接文件还是存在，所以-s选项是更常见的形式。

注意：如果软链接文件和源文件不在同一个目录，源文件要使用绝对路径，不能使用相对路径。
![12](http://oojl6chve.bkt.clouddn.com//18-5-16/29874463.jpg)
![13](http://oojl6chve.bkt.clouddn.com//18-5-16/97408663.jpg)
![14](http://oojl6chve.bkt.clouddn.com//18-5-16/28793414.jpg)
![15](http://oojl6chve.bkt.clouddn.com//18-5-16/13131417.jpg)
![16](http://oojl6chve.bkt.clouddn.com//18-5-16/52249750.jpg)
![17](http://oojl6chve.bkt.clouddn.com//18-5-16/70918319.jpg)
![18](http://oojl6chve.bkt.clouddn.com//18-5-16/71275885.jpg)
![19](http://oojl6chve.bkt.clouddn.com//18-5-16/93593644.jpg)
![20](http://oojl6chve.bkt.clouddn.com//18-5-16/2326048.jpg)
![21](http://oojl6chve.bkt.clouddn.com//18-5-16/76519684.jpg)
![22](http://oojl6chve.bkt.clouddn.com//18-5-16/77300121.jpg)
![23](http://oojl6chve.bkt.clouddn.com//18-5-16/67335797.jpg)
![24](http://oojl6chve.bkt.clouddn.com//18-5-16/16708516.jpg)
![25](http://oojl6chve.bkt.clouddn.com//18-5-16/27310098.jpg)

## 查看或者合并文件内容：cat
![26](http://oojl6chve.bkt.clouddn.com//18-5-16/78101332.jpg)
![27](http://oojl6chve.bkt.clouddn.com//18-5-16/23584393.jpg)

## 拷贝文件：`cp`
cp命令的功能是将给出的文件或目录复制到另一个文件或目录中，相当于DOS下的copy命令。

**语法**：
`cp [options] source dest`
`cp [options] source... directory`

常用选项说明：
| 选项  | 含义  |
| :------ | :------ |
| -a | 该选项通常在复制目录时使用，它保留链接、文件属性，并递归地复制目录，简单而言，保持文件原有属性。 |
| -f | 覆盖已经存在的目标文件而不给出提示。 |
| -i | 交互式复制，在覆盖目标文件之前将给出提示要求用户确认 |
| -r | 若给出的源文件是目录文件，则cp将递归复制该目录下的所有子目录和文件，目标文件必须为一个目录名。 |
| -v | 显示拷贝进度 |

![28](http://oojl6chve.bkt.clouddn.com//18-5-16/42351953.jpg)
![29](http://oojl6chve.bkt.clouddn.com//18-5-16/46589235.jpg)
![30](http://oojl6chve.bkt.clouddn.com//18-5-16/47616183.jpg)

## 移动文件：`mv`
用户可以使用mv命令来移动文件或目录，也可以给文件或目录重命名。

**语法**


`mv [options] source dest`
`mv [options] source... directory`

常用选项说明：

| 选项 | 含义 |
| --- | --- |
| -f | 禁止交互式操作，如有覆盖也不会给出提示 |
| -i | 确认交互方式操作，如果mv操作将导致对已存在的目标文件的覆盖，系统会询问是否重写，要求用户回答以避免误覆盖文件 |
| -v | 显示移动进度 |

![31](http://oojl6chve.bkt.clouddn.com//18-5-16/58882910.jpg)
![32](http://oojl6chve.bkt.clouddn.com//18-5-16/43552754.jpg)

## 归档管理：`tar`
计算机中的数据经常需要备份，tar是Unix/Linux中最常用的备份工具，此命令可以把一系列文件归档到一个大文件中，也可以把档案文件解开以恢复数据。

语法：
`tar [参数] 打包文件名 文件`
tar命令很特殊，其参数前面可以使用“-”，也可以不使用。

**常用参数：**
| 参数 | 含义 |
| --- | --- |
| -c | 生成档案文件，创建打包文件 |
| -v | 列出归档解档的详细过程，显示进度 |
| -f | 指定档案文件名称，f后面一定是.tar文件，所以必须放选项最后 |
| -t | 列出档案中包含的文件 |
| -x | 解开档案文件 |

`注意：除了f需要放在参数的最后，其它参数的顺序任意。`


**打包文件：**

![33](http://oojl6chve.bkt.clouddn.com//18-5-16/6147055.jpg)

**解开文件：**
![34](http://oojl6chve.bkt.clouddn.com//18-5-16/82591848.jpg)
![35](http://oojl6chve.bkt.clouddn.com//18-5-16/2316222.jpg)

## 文件压缩解压：`gzip`

tar与gzip命令结合使用实现文件打包、压缩。 tar只负责打包文件，但不压缩，用gzip压缩tar打包后的文件，其扩展名一般用xxxx.tar.gz。
gzip使用格式如下：

`gzip  [选项]  被压缩文件`

**常用选项**
|选项|含义|
|:-----|:-----|
|-d|解压|
|-r|压缩所有子目录|

![36](http://oojl6chve.bkt.clouddn.com//18-5-16/99944191.jpg)
![37](http://oojl6chve.bkt.clouddn.com//18-5-16/59137041.jpg)
![38](http://oojl6chve.bkt.clouddn.com//18-5-16/57538965.jpg)

`tar这个命令并没有压缩的功能，它只是一个打包的命令，但是在tar命令中增加一个选项(-z)可以调用gzip实现了一个压缩的功能，实行一个先打包后压缩的过程。`

**压缩用法**：`tar cvzf 压缩包包名 文件1 文件2 ...`

`-z ：指定压缩包的格式为：file.tar.gz`
![39](http://oojl6chve.bkt.clouddn.com//18-5-16/32139939.jpg)
**解压用法**: `tar zxvf 压缩包包名`

`-z:指定压缩包的格式为：file.tar.gz`
![40](http://oojl6chve.bkt.clouddn.com//18-5-16/43286815.jpg)

**解压到指定目录：-C （大写字母“C”）**
![41](http://oojl6chve.bkt.clouddn.com//18-5-16/24550794.jpg)

## 文件压缩解压：bzip2

tar与bzip2命令结合使用实现文件打包、压缩(用法和gzip一样)。

tar只负责打包文件，但不压缩，用bzip2压缩tar打包后的文件，其扩展名一般用xxxx.tar.gz2。

在tar命令中增加一个选项(-j)可以调用bzip2实现了一个压缩的功能，实行一个先打包后压缩的过程。

**压缩用法**：`tar -jcvf 压缩包包名 文件...(tar jcvf bk.tar.bz2 *.c)`

**解压用法**：`tar -jxvf 压缩包包名 (tar jxvf bk.tar.bz2)`


## 文件压缩解压：zip、unzip
通过zip压缩文件的目标文件不需要指定扩展名，默认扩展名为zip。

**压缩文件**：`zip [-r] 目标文件(没有扩展名) 源文件`

**解压文件**：`unzip -d 解压后目录文件 压缩文件`

![42](http://oojl6chve.bkt.clouddn.com//18-5-16/37197624.jpg)
![43](http://oojl6chve.bkt.clouddn.com//18-5-16/80527350.jpg)


## 查看命令位置：which
![44](http://oojl6chve.bkt.clouddn.com//18-5-16/49469059.jpg)
