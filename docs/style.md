---
id: style
title: 样式指南
sidebar_label:  样式指南
---

您现在可以使用**Markdown**写作文档了。

Markdown是一种轻量级标记语言。它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。

## Markdown 语法

下面为一个示例页面。

## 标题

使用用 `#空格 内容` 表示，可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。

```
# H1 - 这是一个标题

## H2 - 这是一个标题

### H3 - 这是一个标题

#### H4 - 这是一个标题

##### H5 - 这是一个标题

###### H6 - 这是一个标题
```
显示效果如下：
# H1 - 这是一个标题

## H2 - 这是一个标题

### H3 - 这是一个标题

#### H4 - 这是一个标题

##### H5 - 这是一个标题

###### H6 - 这是一个标题

---

## 强调

```
斜体，带有*星号* 或 _下划线_。

粗体, 使用 **双星号** or __双下划线__.

组合使用粗体和斜体， **粗体 和 _粗斜体_**.

删除线使用了两个波浪线. ~~這段話不要.~~
```
显示效果如下：

斜体，带有*星号* 或 _下划线_。

粗体, 使用 **双星号** or __双下划线__.

组合使用粗体和斜体， **粗体 和 _粗斜体_**.

删除线使用了两个波浪线. ~~這段話不要.~~

---

## 列表

有序列表使用数字+`.`表示，`1. 内容`，四个前导空格代表向后一级。
无序列表用`*或+或- 内容`表示。

```

1. 第一個列表项
1. 另外一個
   - 无序列表
   * 梦想成真
   + 另一个子项
1. 一级列表，实际的数字不重要，只要它是一个数字
   1. 顺序子列表，第二级 
      1. 第三级列表 
   1. 第二个子列表，第二级
1. 其它項目
无序列表可以使用
* 星号`*`
- 减号`-`
+ 加号`+`
```
1. 第一個列表项
1. 另外一個
   - 无序列表
   * 梦想成真
   + 另一个子项
1. 一级列表，实际的数字不重要，只要它是一个数字
   1. 顺序子列表，第二级 
      1. 第三级列表 
   1. 第二个子列表，第二级
1. 其它項目
无序列表可以使用
* 星号`*`
- 减号`-`
+ 加号`+`

---

## 链接
使用`[链接名称](链接地址) 或 <链接地址>` 或 `[链接名称][链接变量]` 或 `[链接名称]`表示,后两种方法，要在随后赋值。
```
[点我打开Github](https://www.github.com/)

[把鼠标移到我上面](https://www.github.com/ "我是一个链接提示")

[我是一个参考风格的链接][linktext]

[链接名称]

尖括号中的URLs和URLs会自动转换为链接。例如：http://www.example.com/ or <http://www.example.com/> 

参考链接变量可以随后赋值。
[linktext]: https://www.microsoft.com/
[1]: http://www.asp.net/
[链接名称]: http://www.myselft.com/
```
[点我打开Github](https://www.github.com/)

[把鼠标移到我上面](https://www.github.com/ "我是一个链接提示")

[我是一个参考风格的链接][linktext]

[链接名称]

尖括号中的URLs和URLs会自动转换为链接。例如：http://www.example.com/ or <http://www.example.com/> 

参考链接变量可以随后赋值。
[linktext]: https://www.microsoft.com/
[1]: http://www.asp.net/
[链接名称]: http://www.myselft.com/

---

## 图片

使用`![替代文本](图片地址 可选标题)`表示，其中替代文本及可选标题都可以省略，其它等同于[链接](/docs/style#链接)语法，区别是变量赋值要紧随其后。
```
我的blog: ![blog](../static/img/logo.svg 'logo')

参考变量方式: ![alt text][logo]
[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'
```
我的blog: ![blog](../static/img/logo.svg 'logo')

参考变量方式: ![alt text][logo]
[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

---

## 代码

用` ``` `将一段文字或代码包起来，可选地指定语言。例如：` ```javascript 或 ```python`,同时可以在语言标记的后面加入`{n}`,（n代表行号）来给指定的行加背景选择。
例如：最后示例中用` ```js {2}`给第二行语法加了着重显示。

``` 
如何不指定语言，就没有语法突出显示.例如：
alter(s)
```

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python 
s = "Python syntax highlighting"
print(s)
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```
 
---

## 表格

使用 `|` 来分隔不同的单元格，使用 `-` 来分隔表头和其他行。
每个标题单元格之间必须至少有3个破折号。外部管道(|)是可选的，冒号`:`可用于列对齐。

```
| 列1           |      列2      |   列3 |
| ------------- | :-----------: | -----: |
| 列3 是右对齐的  | :在左，左对齐   | $1600 |
| 列2 is对中的   | :在右，右对齐    |   $12 |
| 隔行斑马线更清晰| :在两侧，对中    |    $1 |

您不需要使原始的Markdown线漂亮地对齐。您还可以在表格上使用内联的Markdown标记。

| Markdown | Less      | Pretty
| -------- | --------- | ----------
| _斜体_  | `renders` | **粗体**
| 1        | 2         | 3
```

| 列1           |      列2      |   列3 |
| ------------- | :-----------: | -----: |
| 列3 是右对齐的  | :在左，左对齐   | $1600 |
| 列2 is对中的   | :在右，右对齐    |   $12 |
| 隔行斑马线更清晰| :在两侧，对中    |    $1 |

您不需要使原始的Markdown线漂亮地对齐。您还可以在表格上使用内联的Markdown标记。

| Markdown | Less      | Pretty
| -------- | --------- | ----------
| _斜体_  | `renders` | **粗体**
| 1        | 2         | 3

---

## 块引用

区块引用是在段落开头使用 `>` 符号 ，然后后面紧跟一个空格符号。支持嵌套引用。

```
> 块引用在电子邮件中非常方便，可以模拟回复文本。这句话也是引用的一部分。

回车换行后，引用结束.

> 这是一个很长的行，在它封装时仍然会正确地引用。哦，伙计，让我们继续写下去，确保这足够长，能把每个人都包装好。哦，你可以在`块引用`使用**Markdown**语法。
> > 当然也可以继续引用
```

> 块引用在电子邮件中非常方便，可以模拟回复文本。这句话也是引用的一部分。

回车换行后，引用结束.

> 这是一个很长的行，在它封装时仍然会正确地引用。哦，伙计，让我们继续写下去，确保这足够长，能把每个人都包装好。哦，你可以在`块引用`使用**Markdown**语法。
> > 当然也可以继续引用

---

## 分隔线
在一个行中使用`---`表示一条分隔线，不能有其它文字。
```
我们先从这条线开始。

---
这一行与上面的一行之间，有一条分隔线。
```
我们先从这条线开始。

---
这一行与上面的一行之间，有一条分隔线。

## 提示

使用`:::`包括提示信息，在起始`:::`行后紧跟"命令"，其中的"命令"有`note tip important caution warning`等五个。

```
:::note
这是一张便条
:::
:::tip
这是一个小建议
:::
:::important
这是很重要的
:::
:::caution
这是一个告诫
:::
:::warning
这是一个警告
:::
```
:::note
这是一张便条
:::
:::tip
这是一个小建议
:::
:::important
这是很重要的
:::
:::caution
这是一个告诫
:::
:::warning
这是一个警告
:::
