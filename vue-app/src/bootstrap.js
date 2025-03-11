import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// 创建一个包装组件，用于在React中渲染Vue组件
class VueWrapper extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const app = createApp(App);
    app.mount(mountPoint);

    this.app = app;
  }

  disconnectedCallback() {
    this.app.unmount();
  }
}

// 挂载函数 - 用于在Container应用中挂载
const mount = (el) => {
  // 注册自定义元素
  if (!customElements.get("vue-element")) {
    customElements.define("vue-element", VueWrapper);
  }

  // 创建自定义元素并添加到容器中
  const vueElement = document.createElement("vue-element");
  el.appendChild(vueElement);

  return {
    unmount: () => {
      el.removeChild(vueElement);
    },
  };
};

// 如果在开发环境且单独运行，立即挂载应用
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("app");
  if (devRoot) {
    const app = createApp(App);
    app.mount(devRoot);
  }
}

// 导出挂载函数供容器应用使用
export default mount;
