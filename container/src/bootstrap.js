import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 初始化函数
const mount = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
};

// 立即挂载应用
mount();
