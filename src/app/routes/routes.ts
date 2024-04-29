import type { RouteDefinition } from "@solidjs/router";

import route404 from "./404/routes";
import routeIndex from "./index/routes";

export const routes: RouteDefinition[] = [
  // 404 NotFound
  route404,

  // index
  routeIndex,
];
