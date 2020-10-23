---
id: mdx
title: MDX扩展支持
---

您可以在您的Markdown中编写JSX并使用React组件，这得益于[MDX](https://mdxjs.com/)，它是一种可创作的格式，可让您在Markdown文档中无缝编写JSX。

```js
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

以下两种颜色：<Highlight color="#25c2a0">绿色</Highlight> 和 
<Highlight color="#1877F2">蓝色</Highlight> 是非常耐看的颜色。
```
显示效果如下：

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

以下两种颜色：<Highlight color="#25c2a0"> 当前使用的绿 </Highlight> 和 <Highlight color="#1877F2"> Facebook蓝 </Highlight> 是非常耐看的颜色。

现在我们可以同时使用 **Markdown** 和 **JSX**了!

:::tip
想要使用JSX，您要学习一点JSX方面的知识，我想这也是一件好事，可以增加您的知识储备。