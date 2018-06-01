---
title: 02-pandas数据结构介绍
date: 2017/5/19 15:59:57 
tags:
- pandas
- python
- 数据挖掘
categories:
- pandas学习
- pandas入门
- pandas数据结构介绍
keywords: pandas数据结构介绍
description:
toc: true
---
<meta name="google-site-verification" content="YFzUwcgRAuqzR4o_NcNxgctd-2K9Hq2nKwMb7tTQH_c" />
<meta name="baidu-site-verification" content="BEjCtLntqs" />

# 前言 #
pandas有两个重要的数据结构：**series** 和 **dataframe**
你使用pandas的第一步就是引入pandas（就和java要引入包一样）
```Python
    #引入pandas
    from pandas import Series,DataFrame
    import pandas as pd
    import numpy as np
```

# Series #
Series是一种类似于一维数组的对象，它由一组数据和与之相关的标签（索引）组成，接下来创建一个最简答的Series
## 创建Series ##
### 由一组数据简单创建 ###
* 没有指定索引，索引默认从0开始
```Python
    obj = Series([4,7,-5,3])#简单创建，没有指定索引，索引默认从0开始
    obj
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/5163447-file_1495200985477_14d32.png)
可以使用Series的values和index属性获取其数组表示形式和索引对象
```Python
    obj.values
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/57645177-file_1495205691947_1aab.png)
```Python
    obj.index
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/29531901-file_1495205881791_1264b.png)


* 指定索引创建

```Python
    #指定索引创建
    obj2 = Series([4,7,-5,3],index = ['d','b','a','c'])
    obj
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/92387201-file_1495206287370_b822.png)
通过索引的方式选取Series的单个或者一组值

```Python
	#通过索引的方式选取Series中的单个或者一组值
	obj2['a']
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/90435687-file_1495207846141_164cd.png)

选取值大于0的数据
![](http://oojl6chve.bkt.clouddn.com//17-5-19/99905312-file_1495208343583_7852.png)

值都乘以2
![](http://oojl6chve.bkt.clouddn.com//17-5-19/83271110-file_1495208395520_bc46.png)

取以e为底的指数
![](http://oojl6chve.bkt.clouddn.com//17-5-19/14030208-file_1495208547709_7700.png)

可以把Series看成是一个定长的有序字典，因为它是索引值到数据值得一个映射。于是它就可以使用许多需要字典参数的函数中：
![](http://oojl6chve.bkt.clouddn.com//17-5-19/22429762-file_1495208699362_79bf.png)

### 字典创建Series ###
如果只是传入字典，不指定索引，那么Series的索引就是字典的键（有序排列）

```Python
	sdata = {'ohio':3500,'Texas':71000,'Oregon':1111}
	obj3 = Series(sdata)
	obj3
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/6437775-file_1495209001547_28fa.png)
```Python
	states = ['California','ohio','Oregon',Texas']
	obj4 = Series(sdata,index = states)
	obj4
```
![](http://oojl6chve.bkt.clouddn.com//17-5-19/77140986-file_1495209345784_15b8d.png)
在上面的例子中stata的索引会和传入的states索引相匹配的三个值找出来并发到相应的位置上，但是由于'California'对应在sdata的值找不到，所以结果就是NAN（"非数字"not a number,在pandas表示缺失值）。
pandas的isnull和notnull函数可以用于检测缺失值
![](http://oojl6chve.bkt.clouddn.com//17-5-20/74662486-file_1495209744874_26e3.png)

Series也有类似的实例方法：
![](http://oojl6chve.bkt.clouddn.com//17-5-20/11125285-file_1495209880677_1fa8.png)
## name属性  ##
Series对象本身和索引都有一个name属性
![](http://oojl6chve.bkt.clouddn.com//17-5-20/99612568-file_1495210091928_d4e3.png)

Series的索引可以赋值修改
![](http://oojl6chve.bkt.clouddn.com//17-5-20/18846926-file_1495210211589_41ae.png)

# DataFrame #
DataFrame是一个表格型的数据结构，含有一组有序的列，每列可以是不同的数值。DataFrame有行索引也有列索引
## 创建DataFrame ##
### 直接传入由等长列表或者Numpy数组组成的字典 ###
```Python
	data = {'state':['Ohio','Ohio','Ohio','Neveda','Neveda'],
	       'year':[2000,2001,2002,2003,2004],
	        'pop':[1.5,1.7,3.6,2.4,2.9] }
	frame = DataFrame(data)
	frame
```
![](http://oojl6chve.bkt.clouddn.com//17-5-20/73677451-file_1495210824159_14e46.png)
从上面可以找到，DataFrame自动加上了行索引，且全部有序排列

指定列序列，DataFrame的列就会按照指定的顺序排列

```Python
#指定了列序列，就会列就会按照指定的顺序排列
DataFrame(data,columns = ['year','state','pop'])
```
![](http://oojl6chve.bkt.clouddn.com//17-5-20/79644377-file_1495211043044_c6.png)

和Series一样，如果传入的列在数据中找不到，就会产生NA值
```Python
	#传入的列在数据中找不到，就会产生NA值
	frame2 = DataFrame(data,columns = ['year','state','pop','debt'],index = ['one','two','three','four','five'])
	frame2
```
![](http://oojl6chve.bkt.clouddn.com//17-5-20/47902305-file_1495211241874_db3f.png)

通过columns属性返回列索引
![](http://oojl6chve.bkt.clouddn.com//17-5-20/35920530-file_1495211366161_10355.png)

通过类似字典标记或者属性的方式，可以将DataFrame的列获取为一个Series:
![](http://oojl6chve.bkt.clouddn.com//17-5-20/36811679-file_1495211473217_d7cb.png)

赋值方法修改列
![](http://oojl6chve.bkt.clouddn.com//17-5-20/89991712-file_1495211592569_3bec.png)

列表或者数组赋值给DataFrame某个列时，长度必须和DataFrame列的长度长度匹配。如果赋值的是一个Series,Series的索引就会精确匹配DataFrame的索引,所有的空位都将被填上缺失值

```Python
	val= Series([-1.2,-1.5,-1.7],index = ['two','four','five'])
	frame2['dept'] = val
	frame2
```
![](http://oojl6chve.bkt.clouddn.com//17-5-20/7744993-file_1495241284895_dda.png)

如果为不存在的列赋值，就会创建出一个新列。

```Python
	frame2['eastern'] = frame2.state=='Ohio'
	frame2
```
![](http://oojl6chve.bkt.clouddn.com//17-5-20/83883438-file_1495241560364_15914.png)

关键字del用于删除列
![](http://oojl6chve.bkt.clouddn.com//17-5-20/90830152-file_1495241894247_48a9.png)

**【注意:】**通过*索引方式*返回列的是相应数据的试图，不是副本。所以，对返回的Series所做的任何就地的修改全都反应在源DataFrame上。通过Series的copy方法可以显示的复制列

### 嵌套字典（字典中的字典） ###

外层字典的键作为列索引，内层字典的键作为行索引
![](http://oojl6chve.bkt.clouddn.com//17-5-20/21418830-file_1495242308296_49b5.png)

结果转置
![](http://oojl6chve.bkt.clouddn.com//17-5-20/17253947-file_1495242368911_13ffa.png)

如果不显示的指定索引，那么内层字典的键会被合并，排序形成最终的索引，如果显示指定了索引，就会按照指定索引的顺序排列，所有的空位会被缺失值填补
![](http://oojl6chve.bkt.clouddn.com//17-5-20/5302756-file_1495242658686_1ccd.png)

Series组成的字典也差不多
![](http://oojl6chve.bkt.clouddn.com//17-5-20/34239204-file_1495243388726_1599f.png)

下图列出了DataFrame构造函数能接受的各种数据
![](http://oojl6chve.bkt.clouddn.com//17-5-20/77974529-file_1495243224995_dd84.png)

## DataFrame的name和columns属性 ##
![](http://oojl6chve.bkt.clouddn.com//17-5-20/52468774-file_1495243731360_12bee.png)

## values属性 ##
和Series一样，会以二维ndarray的形式返回DataFrame数据
![](http://oojl6chve.bkt.clouddn.com//17-5-20/34507349-file_1495243823714_eb15.png)