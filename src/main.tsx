import * as React from "react";
import * as ReactDOM from "react-dom";

import * as styles from "./main.scss";

const App = () => <div>Hello World</div>;

const container = document.getElementById("main");
ReactDOM.render(<App />, container);
