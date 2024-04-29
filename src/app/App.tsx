import type { Component } from "solid-js";
import { Router } from "@solidjs/router";
import type { RouteSectionProps } from "@solidjs/router";
import { routes } from "./routes/routes";
import { AppLayout } from "./AppLayout";

const Root: Component<RouteSectionProps> = (props) => (
  <AppLayout>{props.children}</AppLayout>
);

export const App: Component = () => <Router root={Root}>{routes}</Router>;
