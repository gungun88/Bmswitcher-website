# 1Panel + Docker 部署文档

本文档用于把当前项目部署到 `1Panel`，并通过 `Docker` 运行。部署方案默认采用：

- 容器内部提供 `80` 端口服务
- 宿主机仅监听 `127.0.0.1:38127`
- 对外访问统一走 `1Panel` 站点反向代理
- 不直接暴露 Docker 常见端口到公网

这不是绝对安全方案，但比直接把容器端口暴露到公网更稳妥。真正防爆破仍然要配合：

- 只开放 `80/443`
- 关闭服务器上无用公网端口
- 开启防火墙
- 站点启用 HTTPS
- SSH 改密钥登录，禁用弱口令

## 项目信息

- 正式域名：`https://bmswitcher.com/`
- GitHub 仓库：`https://github.com/gungun88/Bmswitcher-website`

## 文件说明

本仓库已经加入以下部署文件：

- `Dockerfile`
- `docker-compose.yml`
- `docker/nginx/default.conf`
- `.dockerignore`

## 部署结构

访问链路如下：

`用户 -> 1Panel 网站反向代理 -> 127.0.0.1:38127 -> Docker 容器 80`

重点是 `38127` 只绑定在本机回环地址，不对公网直接开放。

## 第一步：准备服务器

要求：

- 已安装 `1Panel`
- 服务器已安装 `Docker` 与 `Docker Compose`
- 域名已解析到服务器公网 IP
- 安全组 / 防火墙仅放行 `80` 和 `443`

建议先检查：

```bash
docker -v
docker compose version
```

## 第二步：获取项目代码

推荐直接在服务器拉取 GitHub 仓库代码。

```bash
/opt/1panel/apps/bmswitcher-website
```

执行：

```bash
mkdir -p /opt/1panel/apps
cd /opt/1panel/apps
git clone https://github.com/gungun88/Bmswitcher-website.git bmswitcher-website
```

进入项目目录：

```bash
cd /opt/1panel/apps/bmswitcher-website
```

如果你不是通过 Git 拉取，而是手动上传项目文件，也可以，只要最终目录保持一致即可。

## 第三步：构建并启动容器

执行：

```bash
docker compose up -d --build
```

查看状态：

```bash
docker compose ps
```

查看日志：

```bash
docker compose logs -f
```

如果部署成功，本机可以访问：

```bash
curl http://127.0.0.1:38127
```

注意：

- 不要把 `38127` 加入防火墙放行
- 不要在安全组额外开放这个端口
- 这个端口只给 `1Panel` 本机反向代理使用

## 第四步：在 1Panel 创建站点反向代理

推荐做法是让 1Panel 只代理到本机回环地址。

1. 进入 `1Panel`
2. 打开 `网站`
3. 新建站点或反向代理站点
4. 域名填写正式域名：`bmswitcher.com`
5. 反向代理目标填写：

```text
http://127.0.0.1:38127
```

6. 开启 HTTPS
7. 申请或上传 SSL 证书
8. 保存并重载配置

## 第五步：验证部署

浏览器访问：

```text
https://bmswitcher.com/
```

建议同时检查：

```bash
curl -I http://127.0.0.1:38127
curl -I https://bmswitcher.com/
```

## 更新网站

以后更新代码时：

```bash
cd /opt/1panel/apps/bmswitcher-website
docker compose up -d --build
```

如果只是重启：

```bash
docker compose restart
```

## 停止与删除

停止服务：

```bash
docker compose stop
```

删除容器：

```bash
docker compose down
```

## 端口与安全说明

当前 `docker-compose.yml` 使用的是：

- 宿主机端口：`38127`
- 容器端口：`80`
- 绑定方式：`127.0.0.1:38127:80`

这个配置的意义：

- 端口不是常见的 `80`、`8080`、`3000`、`5000`
- 只监听本机，不直接暴露到公网
- 公网入口统一收口到 1Panel 的站点代理

需要更换端口时，只改 `docker-compose.yml` 这一行：

```yaml
ports:
  - "127.0.0.1:38127:80"
```

改完后重新部署：

```bash
docker compose up -d --build
```

同时别忘了把 1Panel 的反向代理地址同步改掉。

## 常见问题

### 1. 访问域名显示 502

先检查容器是否启动：

```bash
docker compose ps
```

再检查本地端口：

```bash
curl http://127.0.0.1:38127
```

如果这里都不通，说明容器本身没起来，先看日志：

```bash
docker compose logs -f
```

### 2. 页面打开但资源 404

本项目是 Vite 构建的静态站点，已经在 `vite.config.ts` 里使用相对路径 `base: './'`，正常情况下不会有这个问题。

### 3. 是否能完全防止黑客爆破

不能。

只能说：

- 不直接暴露容器端口
- 降低被扫到业务端口的概率
- 缩小攻击面

真正有效的是最小暴露面、补丁更新、HTTPS、防火墙和强认证。
