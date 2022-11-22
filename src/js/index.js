//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import TodoListv2 from "./component/TodoListv2.jsx";
import TodoListv3 from "./component/TodoListv3.jsx";
//render your react application
ReactDOM.render(<TodoListv3 />, document.querySelector("#app"));
