import type { ParentComponent, Component } from "solid-js";
import solidLogo from "/solid.svg";
import viteLogo from "/vite.svg";
import "./AppLayout.css";

import { A } from "@solidjs/router";

const AppHeader: Component = () => (
  <>
    <div>
      <a
        href="https://github.com/sylvaindethier/solid-form-validation#readme"
        target="_blank"
      >
        <img src={viteLogo} class="logo" alt="Vite logo" />
        <img src={solidLogo} class="logo solid" alt="Solid logo" />
      </a>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
    <h1>SolidJS Form Validation</h1>
  </>
);

const AppNav: Component = () => (
  <nav>
    <A href="/">Home</A>
  </nav>
);

export const AppLayout: ParentComponent = (props) => (
  <>
    <AppHeader />
    <AppNav />
    {props.children}
  </>
);
