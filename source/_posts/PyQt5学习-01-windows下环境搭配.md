title: (PyQt5学习)01-windows下环境搭配
date: 2017-05-25 22:22:04
tags: 
	- PyQt5
	- Python图形界面
categories:
	- PyQt5
keywords: 
	- pyqt5在windows环境搭配
	- Eric安装
description: 
---
# 前言 #
Qt是一个开源的跨平台的GUI框架，为很多计算机语言提供了应用程序开发接口，另外还提供了集成开发环境QtCreator、UI制作工具QtDesigner，使用起来既简单方便，又可以提升开发的速度。本文完成Qt5基于Python3.5.1的开发环境的搭建

# 安装开发环境 #
1. 安装Python 3.5.x 环境（这个我之前已经安装好了，你可以去网上搜搜别人的教程）

2. Sip 4.17安装
打开CMD,输入 `pip install sip`，回车即可

3. 安装PyQt5
下载地址：[http://pan.baidu.com/s/1mimKAKw](http://pan.baidu.com/s/1mimKAKw)，一直next直到Finish

4. 安装Eric
下载地址：[http://pan.baidu.com/s/1nu6Le0h](http://pan.baidu.com/s/1nu6Le0h)

下载好之后，解压，打开CMD,进入 install.py 所在的目录，具体的安装大家可以参考我下面的图片，具体的目录看你自己把压缩包解压到哪里了

![](http://oojl6chve.bkt.clouddn.com//17-5-26/89303689.jpg)

--------------问题开始分割线---------------------------
本以为这样就结束了，因为很多人到这一步其实就已经安装好了，但是，但是，突然出现了一个bug，无图无真相，请看下面的图。
![](http://oojl6chve.bkt.clouddn.com//17-5-26/58902850.jpg)
原来是乱码问题，大家之前不管是在编程还是配置一些环境的时候，肯定是遇到过乱码问题，这个时候我就按照他的提示，找到了*eric6config.py*这个文件，文件一打开我就发现问题了（我是用notebook打开的），我就发现这个文件的编码是ANSI,但是很不巧，里面出现了中文，大家请看下图
![](http://oojl6chve.bkt.clouddn.com//17-5-26/6719646.jpg)
这个时候也怪我，在我装系统，设置用户名的时候，设置了一个中文。那这个时候我们怎么办？？别急，既然我提出了这个问题，肯定就找到了解决的方法。我们已经找到了问题的源头所在，那我们就很容易想到解决方法。
*解决方法：*用notebook打开文件，先将文档格式转为*以UTF-8格式编码*，然后你就发现，出现乱码了，如下图所示

![](http://oojl6chve.bkt.clouddn.com//17-5-26/72251308.jpg)
既然这样，那我们就自己改！将乱码改成原来的*阿苏*，然后保存即可
--------------问题结束分割线---------------------------

接下来，大家可能还会疑虑怎么打开Eric，我这个版本的打开方式如下：
进入到*python\lib\site-packages\eric6*（这个时候就看你自己把你的python安装在哪了），点击*eric6.pyw*，即可。
ps:千万不要一个人，关着灯打开eric，为什么了，你看下面图片就知道了。
![](http://oojl6chve.bkt.clouddn.com//17-5-26/97666825.jpg)
开玩笑的，也没啥可怕的。

ok!pyqt5在windows下环境搭配到此结束



