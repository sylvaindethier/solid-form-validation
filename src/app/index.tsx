/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { App } from "./App";

const app = document.getElementById("app");
render(() => <App />, app!);
