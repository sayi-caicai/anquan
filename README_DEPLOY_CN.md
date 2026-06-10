# 国内微信 H5 试玩 Demo 部署说明

## 交付物

`dist/` 是纯前端静态版本，直接上传整个文件夹内容即可：

- `index.html`
- `src/main.js`
- `src/styles.css`
- `assets/levels/*.jpg`
- `assets/audio/README.md`
- `README_DEPLOY_CN.md`
- `WECHAT_TEST_CHECKLIST.md`
- `MIGRATION_WECHAT_GAME.md`
- `deploy-examples/`
- `scripts/check-dist.ps1`

当前 Netlify 版本仅保留作临时海外预览，不作为国内试玩发布方案。

不要上传工程根目录里的这些内容：

- `.netlify/`
- `output/`
- `netlify.toml`
- `huizhou-safety-h5-demo-dist.zip`

## 微信内打开要求

- 必须使用 `https://` 链接。
- 不需要后端、数据库、登录系统。
- 不依赖微信 JSSDK；普通微信群/好友转发链接即可打开试玩。
- 如需自定义微信分享标题、缩略图，后续才需要公众号/服务号域名配置和 JSSDK 签名接口。

## 推荐部署方式

### 方案 A：腾讯云 CloudBase 静态网站托管

1. 创建 CloudBase 环境。
2. 开启“静态网站托管”。
3. 上传 `dist/` 目录内的所有文件。
4. 入口文件设置为 `index.html`。
5. 使用 CloudBase 提供的 HTTPS 域名发到微信测试。

适合快速 Demo，国内访问稳定，不需要自己写后端。

补充文件：`deploy-examples/cloudbase-upload-notes.md`

### 方案 B：腾讯云 COS 静态网站 + CDN

1. 创建 COS 存储桶。
2. 开启静态网站功能，索引文档设置为 `index.html`。
3. 上传 `dist/` 目录内所有文件，保持目录结构不变。
4. 绑定 CDN 和 HTTPS 证书。
5. 将链接发到微信测试。

适合后续正式活动承载更多访问量。

补充文件：`deploy-examples/cos-oss-upload-notes.md`

### 方案 C：阿里云 OSS 静态网站 + CDN

1. 创建 OSS Bucket。
2. 开启静态网站托管，默认首页设置为 `index.html`。
3. 上传 `dist/` 目录内所有文件。
4. 配置 CDN、HTTPS 证书和缓存规则。
5. 使用 HTTPS 地址在微信内测试。

补充文件：`deploy-examples/cos-oss-upload-notes.md`

### 方案 D：自有国内服务器 + Nginx

1. 将 `dist/` 上传到服务器目录。
2. 配置 HTTPS 证书。
3. 参考 `deploy-examples/nginx-h5-demo.conf.example` 配置站点。
4. 使用 HTTPS 链接在微信内测试。

## 缓存建议

- `index.html`：不长期缓存，便于更新。
- `src/*.js`、`src/*.css`：短缓存或每次发布改文件名。
- `assets/levels/*.jpg`：可长缓存，当前总大小约 1.9MB。

## 微信兼容检查

当前版本已处理：

- 手机竖屏优先。
- 横屏时显示竖屏提示，不影响正常竖屏首页。
- 使用 CSS 变量替代 `100dvh`，减少旧版微信 WebView 高度问题。
- 使用 `touchstart/click` 解锁音频，符合微信自动播放限制。
- 不使用 `fetch`、ES Module、Service Worker、数据库、登录态。
- 图片已从 PNG 压缩为 JPG，提升微信加载速度。

注意：

- WebAudio 音效必须在用户首次点击后才能播放，这是微信浏览器限制。
- 如果用户手机开启省流量或弱网，首屏图片仍可能需要 1-2 秒加载。

## 上传前本地检查

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\dist\scripts\check-dist.ps1 -DistPath .\dist
```

脚本会检查必需文件、包大小和不适合微信旧 WebView 的明显依赖。

## 后续迁移为微信小游戏体验版

需要改动的主要文件和方向：

- `src/main.js`：拆出关卡配置 `levels`，迁移到小游戏项目的 JS 数据模块。
- `src/styles.css` / `index.html`：不能直接用于微信小游戏，需改为 Canvas 或小游戏 UI 层。
- `assets/levels/*.jpg`：可直接复用为小游戏资源，建议继续压缩或转 WebP。
- 音频逻辑：当前 WebAudio 需替换为微信小游戏 `InnerAudioContext`。
- 点击热区逻辑：当前 DOM button 热区需改为 Canvas 坐标命中检测。

如果迁移到“微信小程序 H5 WebView”，当前 `dist/` 基本可复用；如果迁移到“微信小游戏”，需要重写渲染层和输入层。

详细评估见：`MIGRATION_WECHAT_GAME.md`
