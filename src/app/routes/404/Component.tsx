import type { Component } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";

const RouteSection: Component<RouteSectionProps> = (props) => (
  <div id="NotFound">
    <h2>Page not found</h2>
    <div>
      There's nothing here <code>{props.location.pathname}</code>
    </div>
  </div>
);
export default RouteSection;
