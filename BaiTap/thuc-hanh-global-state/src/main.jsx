import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import { RecoilRoot } from "recoil"; // recoil

import { Provider } from "react-redux"; // redux
import { store } from "./redux/store"; // redux


ReactDOM.createRoot(document.getElementById("root")).render(
  // <RecoilRoot>
  //   <App />
  // </RecoilRoot>

  <Provider store={store}>
    <App />
  </Provider>
);