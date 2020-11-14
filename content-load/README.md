# DOMContentLoaded事件触发时机测试

本文旨在测试不同脚本加载方式对`DCL和L`事件触发的影响，共分如下12种情况：

> `DCL` = DOMContentLoaded

> `L` = Load

- [页面内嵌js脚本，脚本执行后触发DCL](a11.html)
- [页面外链js脚本,同步加载，置于header中](a12.html)
- [页面外链js脚本,同步加载，置于body头部](a13.html)
- [页面外链js脚本,同步加载，置于body中间](a15.html)
- [页面外链js脚本,同步加载，置于body尾部，其它所有内容之后](a16.html)
- [页面外链js脚本,defer异步加载，置于body中部](a17.html)
- [页面外链js脚本,defer异步加载，置于body尾部](a18.html)
- [页面外链js脚本,async异步加载, 置于head标签中](a19.html)
- [页面外链js脚本,async异步加载, 置于body标签头部](a20.html)
- [页面外链js脚本,async异步加载, 置于body标签中部](a21.html)
- [页面外链js脚本,async异步加载, 置于body标签尾部](a22.html)