# 微前端示例项目 (Micro Frontend Demo)

这是一个使用 Module Federation 实现的微前端示例项目，包含以下应用：

- **Container**: 主应用，用于集成其他子应用
- **React App**: 使用 React 框架的子应用
- **Vue App**: 使用 Vue 框架的子应用

## 项目结构

```
micro-frontend-demo/
├── container/      # 主应用
├── react-app/      # React子应用
├── vue-app/        # Vue子应用
├── package.json    # 根目录配置文件
└── README.md       # 项目说明
```

## 技术栈

- **Module Federation**: Webpack 5 提供的模块联邦功能，用于实现微前端
- **React**: React 子应用
- **Vue**: Vue 子应用
- **Webpack 5**: 模块打包工具

## 安装与运行

### 安装依赖

```bash
# 安装根目录依赖
npm install

# 安装所有子项目依赖
npm run install:all
```

### 启动项目

```bash
# 启动所有应用
npm start

# 或者单独启动各个应用
npm run start:container
npm run start:react
npm run start:vue
```

## 访问地址

- **Container**: http://localhost:8080
- **React App**: http://localhost:8081
- **Vue App**: http://localhost:8082

## 微前端实现原理

本项目使用 Webpack 5 的 Module Federation 功能实现微前端架构。每个子应用都是独立的，可以单独开发、测试和部署，同时也可以被主应用集成和消费。

主要实现方式：

1. 每个子应用暴露特定的模块（如组件、路由等）
2. 主应用在运行时动态加载这些模块
3. 各应用之间共享特定的依赖，避免重复加载
