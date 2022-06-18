import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import "./index.css";

const App = () => (
  <div className='container'>
    <div>Name: footer_ui</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
