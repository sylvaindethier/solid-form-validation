import type { Component } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";
import { createSignal } from "solid-js";
import "./index.css";

const RouteSection: Component<RouteSectionProps> = () => {
  const [getCount, setCount] = createSignal<number>(0);

  return (
    <div class="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {getCount()}
      </button>
    </div>
  );
};
export default RouteSection;
