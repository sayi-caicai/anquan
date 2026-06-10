# 腾讯云 COS / 阿里云 OSS 上传要点

1. 创建 Bucket。
2. 开启静态网站托管。
3. 默认首页设置为 `index.html`。
4. 上传 `dist/` 目录内所有文件，保持目录结构。
5. 开启 CDN 和 HTTPS。
6. 用 HTTPS 链接在微信里测试。

推荐 MIME 类型：

- `.html`: `text/html; charset=utf-8`
- `.css`: `text/css; charset=utf-8`
- `.js`: `application/javascript; charset=utf-8`
- `.jpg`: `image/jpeg`

推荐缓存：

- `index.html`: `no-cache`
- `src/*`: `max-age=300`
- `assets/*`: `max-age=31536000`
