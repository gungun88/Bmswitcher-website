# Bmswitcher Website

官方落地页项目，基于 React + Vite + TypeScript 构建。

## 技术栈

- React 18
- Vite 8
- TypeScript
- Tailwind CSS
- Lucide React

## 本地开发

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

## 项目结构

```text
components/   可复用组件
contexts/     全局上下文
pages/        页面组件
public/       静态资源
App.tsx       应用入口
index.html    HTML 模板
vite.config.ts
```

## 多语言

翻译内容集中在：

- `contexts/LanguageContext.tsx`

新增文案时，需要同时补齐：

- `en`
- `zh`

## 部署

仓库已切换为 `1Panel + Docker` 部署方案，旧的通用静态托管说明已移除。

请直接查看：

- `1panel+docker部署文档.md`

相关部署文件：

- `Dockerfile`
- `docker-compose.yml`
- `docker/nginx/default.conf`
- `.dockerignore`
