import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { ValidationMessage } from "./ValidationMessage";

// *** validation Directive *** //
import { validation } from "#lib/index";
validation; // prevent TypeScript's tree-shaking
import type { validator } from "#lib/index";

import "./validation.css";

async function fetchEmail(email: string) {
  const DB_EMAILS = ["email@example.com", "test@example.com"];
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(DB_EMAILS.includes(email)), 2000);
  });
}

const availableEmail: validator = async (element) => {
  const email = (element as HTMLInputElement).value;
  const errored = await fetchEmail(email);
  return errored ? "Email unavailable" : "";
};

/* eslint jsx-a11y/label-has-associated-control: "off"
  ------- SolidJS uses `for` instead of `htmlFor` React specific props */
export const FieldEmail: Component = () => {
  const [getMessage, setMessage] = createSignal("");

  return (
    <div class="field">
      <div class="info">
        Email will not be valid if it's not an email, or is either{" "}
        <code>email@example.com</code>, or <code>test@email.com</code>
      </div>
      <label for="user-email">Email</label>
      <input
        id="user-email"
        name="email"
        type="email"
        required
        use:validation={[setMessage, [availableEmail]]}
        placeholder="email@example.com"
      />
      <ValidationMessage message={getMessage()} />
    </div>
  );
};
