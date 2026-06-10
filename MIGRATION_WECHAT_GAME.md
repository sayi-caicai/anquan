# 迁移微信小游戏体验版评估

当前交付是微信内置浏览器 H5 Demo。迁移到微信小游戏体验版时，主要工作不是部署，而是重写运行层。

## 可复用

- `assets/levels/*.jpg`：5 张关卡图片可直接复用。
- `src/main.js` 里的 `levels` 数据：关卡标题、隐患点坐标、解析文案可复用。
- 玩法流程：开始、5 关、答案解析、结果页、再玩一次可复用为产品逻辑。

## 需要重写

- `index.html`：小游戏没有 DOM 页面，不能直接使用。
- `src/styles.css`：小游戏不能直接使用 CSS 布局。
- DOM 热区按钮：需要改为 Canvas 坐标命中检测。
- 弹窗 UI：需要用 Canvas 绘制或接入小游戏 UI 框架。
- WebAudio：替换为微信小游戏 `wx.createInnerAudioContext()`。

## 建议迁移结构

- `game.js`：小游戏入口。
- `js/levels.js`：从当前 `src/main.js` 拆出的关卡数据。
- `js/scene.js`：绘制关卡图片、命中点、错点反馈。
- `js/ui.js`：绘制首页、答案页、结果页按钮。
- `assets/levels/`：复用当前 JPG 图片。

## 预计工作量

- H5 WebView 小程序：1 天内可迁移，基本复用 `dist/`。
- 原生微信小游戏体验版：需要 2-4 天，主要是 Canvas 渲染、触摸坐标、按钮状态和音频适配。

如果目标只是“微信里发链接试玩”，继续使用当前 H5 Demo 成本最低。
