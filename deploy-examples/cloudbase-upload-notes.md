# 腾讯云 CloudBase 静态托管上传要点

1. 上传 `dist/` 目录内的所有文件，不要上传外层工程目录。
2. 静态网站入口设置为 `index.html`。
3. 使用 CloudBase 分配的 HTTPS 域名在微信里打开测试。
4. 如绑定自定义域名，需要完成备案、HTTPS 证书和微信访问测试。

建议缓存：

- `index.html`：不缓存或短缓存。
- `src/*.js`、`src/*.css`：短缓存，便于更新。
- `assets/levels/*.jpg`：长缓存。

更新版本时：

- 如果只改 JS/CSS，建议清 CDN 缓存。
- 如果换图片但文件名不变，必须清 `assets/levels/*.jpg` 缓存。
