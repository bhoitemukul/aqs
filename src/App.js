import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/index";
import Content from "./Components/Content/Content";
import ScrollTop from "./Components/ScrollTop/index";
import CallingButton from "./Components/CallingButton/index";

class App extends Component {
  render() {
    return (
      // <div className="app" onContextMenu={(e) => e.preventDefault()}>
      <div className="app">
        <Header></Header>
        <Content></Content>
        <ScrollTop></ScrollTop>
        <CallingButton></CallingButton>
      </div>
    );
  }
}

export default App;
