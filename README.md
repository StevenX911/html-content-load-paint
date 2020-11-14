# html-content-load-paint

网页首屏渲染触发时机及DOMContentLoaded事件触发时机测试

#### [网页首屏渲染触发时机测试](./first-paint/README.md)

#### [DOMContentLoaded事件触发时机测试](./content-load/README.md)

#### 测试条件
- Chrome浏览器
- 开启隐私模式，避免插件干扰
- 网速限制为Slow 3G，方便查看加载时序

#### 关键概念
- `script defer`
- `script async`
- `FP`、`FCP`、`FMP`、`LCP`
- `DCL`、`L`

#### 参考文档
- https://mp.weixin.qq.com/s/IqNHvND5Pm3aR4Utv_To-g
- https://mp.weixin.qq.com/s/KBRM26x-apyNryOAbYFzig
- https://zhuanlan.zhihu.com/p/25876048
- https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/
- https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
- https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event