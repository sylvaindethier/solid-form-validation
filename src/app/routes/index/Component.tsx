import type { Component } from "solid-js";
import type { RouteSectionProps } from "@solidjs/router";
import "./index.css";

import { FormWithValidation } from "#demo/FormWithValidation";

const RouteSection: Component<RouteSectionProps> = () => <FormWithValidation />;
export default RouteSection;
