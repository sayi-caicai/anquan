# GitHub Pages 手动发布步骤

## 当前发布产物

使用目录：

`dist/`

或使用压缩包：

`huizhou-safety-h5-demo-dist.zip`

注意：zip 解压后第一层必须直接看到 `index.html`，不能再套一层 `dist/`。

## 上传到仓库

仓库名：`安全小游戏`

推荐做法：

1. 打开 GitHub 仓库 `安全小游戏`。
2. 进入 `Code` 页面。
3. 如果仓库是空的，点击 `uploading an existing file`。
4. 如果仓库已有文件，点击 `Add file` → `Upload files`。
5. 上传 `dist/` 目录里面的全部内容。
6. 上传后仓库根目录第一层必须直接看到：
   - `index.html`
   - `.nojekyll`
   - `assets/`
   - `src/`
7. 提交 Commit。

不要上传外层 `dist` 文件夹本身。正确结构是：

```text
安全小游戏/
  index.html
  .nojekyll
  assets/
  src/
```

## 开启 GitHub Pages

进入：

`Settings` → `Pages`

选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

点击 `Save`。

## HTTPS 试玩链接在哪里看

保存后，仍在：

`Settings` → `Pages`

页面上方会显示：

`Your site is live at https://...`

复制这个 HTTPS 链接，发到微信聊天里即可试玩。

如果仓库所有者是 `sayi-caicai`，仓库名确实是 `安全小游戏`，链接通常类似：

```text
https://sayi-caicai.github.io/%E5%AE%89%E5%85%A8%E5%B0%8F%E6%B8%B8%E6%88%8F/
```

以 GitHub Pages 页面实际显示的链接为准。

## 说明

这是临时试玩版链接。GitHub Pages 在国内访问可能不稳定；如果后续要给更多人稳定试玩，应迁移到腾讯云 CloudBase、COS 或阿里云 OSS。
