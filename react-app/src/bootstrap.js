import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 挂载函数
const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};

// 如果在开发环境且单独运行，立即挂载应用
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("root");
  if (devRoot) {
    mount(devRoot);
  }
}

// 导出挂载函数供容器应用使用
export { mount };
