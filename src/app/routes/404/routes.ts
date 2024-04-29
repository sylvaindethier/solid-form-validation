import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

const path = "*404" as const;
const component = lazy(() => import("./Component"));
const routeDefinition: RouteDefinition<typeof path> = { path, component };
export default routeDefinition;
