import * as React from "react";
import * as ReactDOM from "react-dom";

import Example from "./Example";

const App: React.FC = () => <Example />;

const container = document.getElementById("main");
ReactDOM.render(<App />, container);
