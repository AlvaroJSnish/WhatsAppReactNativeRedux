import React, { Component } from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers/";

export default class Main extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}
