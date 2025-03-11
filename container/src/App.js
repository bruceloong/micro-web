import React, { lazy, Suspense, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// 懒加载React子应用
const ReactApp = lazy(() => import("reactApp/App"));

// Vue应用需要特殊处理
const VueAppWrapper = () => {
  const vueRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (vueRef.current && !mountedRef.current) {
      // 动态导入Vue应用的挂载函数
      import("vueApp/App")
        .then((module) => {
          const mount = module.default;
          const unmount = mount(vueRef.current);
          mountedRef.current = true;

          // 组件卸载时清理
          return () => {
            if (unmount) {
              unmount();
              mountedRef.current = false;
            }
          };
        })
        .catch((err) => console.error("Failed to load Vue app:", err));
    }

    // 清理函数
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return <div ref={vueRef} style={{ width: "100%", height: "100%" }}></div>;
};

// 加载中组件
const Loading = () => <div className="loading">加载中，请稍候...</div>;

// 首页组件
const Home = () => (
  <div className="app-section">
    <h2>微前端示例项目</h2>
    <p>这是一个使用Webpack 5 Module Federation实现的微前端示例项目。</p>
    <p>本项目包含两个不同框架的子应用：</p>
    <ul>
      <li>React 应用</li>
      <li>Vue 应用</li>
    </ul>
    <p>请点击上方导航栏查看各个子应用。</p>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header className="nav-container">
          <nav>
            <h1>微前端示例</h1>
            <div className="nav-links">
              <NavLink to="/" end>
                首页
              </NavLink>
              <NavLink to="/react">React应用</NavLink>
              <NavLink to="/vue">Vue应用</NavLink>
            </div>
          </nav>
        </header>

        <div className="app-container">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/react/*" element={<ReactApp />} />
              <Route path="/vue/*" element={<VueAppWrapper />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
