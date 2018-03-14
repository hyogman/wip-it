import React from "react";
import WIP from "../lib";

const App = () => (
  <div>
    <WIP version="test">
      {({ isWip }) => (isWip ? <h1>Hi</h1> : <h1>Bye</h1>)}
    </WIP>

    <WIP>{({ version }) => <h1>{version}</h1>}</WIP>
  </div>
);

export default App;
