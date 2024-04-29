import type { RouteDefinition } from "@solidjs/router";

import route404 from "#src/404/routes";
import routeIndex from "#src/index/routes";

export const routes: RouteDefinition[] = [
  // 404 NotFound
  route404,

  // index
  routeIndex,
];
