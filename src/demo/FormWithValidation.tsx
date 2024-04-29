import type { Component } from "solid-js";
import { FieldEmail } from "./FieldEmail";
import { FieldPasswordWithConfirmation } from "./FieldPasswordWithConfirmation";
import { FieldUsername } from "./FieldUsername";
import "./form.css";

export const FormWithValidation: Component = () => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      const form = event.currentTarget;
      console.info("form submitted", form);
    }}
  >
    <div>
      Fields will reset its validation message on <code>change</code> event, and
      set it on <code>invalid</code> event.
    </div>
    <div>
      Fields will be validated on <code>change</code> event.
    </div>
    <div>Each field events are configurable.</div>

    <FieldEmail />
    <FieldPasswordWithConfirmation />
    <FieldUsername />

    <button type="submit">Submit</button>
  </form>
);
