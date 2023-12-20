import Taro, { useLaunch, usePageNotFound } from "@tarojs/taro";

// import "./tracking";

function App({ children }) {
  useLaunch(() => {
    console.log("App Launch");
  });

  usePageNotFound((res) => {
    console.log("App PageNotFound", res);
  });
  // children 是将要会渲染的页面

  return children;
}

export default App;
