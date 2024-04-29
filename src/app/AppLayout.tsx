import type { ParentComponent } from "solid-js";
import solidLogo from "/solid.svg";
import viteLogo from "/vite.svg";
import "./AppLayout.css";

export const AppLayout: ParentComponent = (props) => (
  <>
    <div>
      <a
        href="https://github.com/sylvaindethier/solid-form-validation#readme"
        target="_blank"
      >
        <img src={viteLogo} class="logo" alt="Vite logo" />
        <img src={solidLogo} class="logo solid" alt="Solid logo" />
      </a>
      <p class="read-the-docs">Click on the logos to learn more</p>
    </div>
    <h1>SolidJS Form Validation</h1>
    {props.children}
  </>
);
