import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Table from "./components/table";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

console.log(library.constructor.name); // "Library"

console.log(library); // {definitions: {fas: {trash-alt: [448, 512, [], "f2ed", "M0 84V56c0...""]}}}

library.add(faTrashAlt);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
