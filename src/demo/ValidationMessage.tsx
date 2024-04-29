import type { Component } from "solid-js";

export const ValidationMessage: Component<{ message: string }> = (props) => (
  <span class="validation-message">{props.message}</span>
);
