import React from "react";
import Menu from "./Views/main_menu/main_menu";
import SubCategory from "../src/Views/sub_category/Index";

//import css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#7D141E" }} className="App">
      <div className="app-nested">
        <SubCategory />
      </div>
      <div className="null-box">mughees</div>
    </div>
  );
}

export default App;
