import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// in dev & isoliation mode => run mount immediately
if (process.env.NODE_ENV === "development") {
  let marketingRoot = document.querySelector("#marketing-dev-root");

  if (marketingRoot) {
    mount(marketingRoot);
  }
}

// running from container => export mount
export { mount };
