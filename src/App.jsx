import React from "react";
import { Provider } from "react-redux";
import Root from "./components/Root";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}

export default App;
