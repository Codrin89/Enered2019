import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="Petrisor" animal="cat" breed="european" />
      <Pet name="Dudu" animal="cat" breed="mixed" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
