import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { ValidationMessage } from "./ValidationMessage";

// *** validation Directive *** //
import { validation } from "#lib/index";
validation; // prevent TypeScript's tree-shaking
import type { validator } from "#lib/index";

import "./validation.css";

function fetchUsername(username: string) {
  const DB_USERNAMES = ["admin", "user"];
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(DB_USERNAMES.includes(username)), 2000);
  });
}

const availableUsername: validator = async (element) => {
  const username = (element as HTMLInputElement).value;
  const errored = await fetchUsername(username);
  return errored ? "Username unavailable" : "";
};

/* eslint jsx-a11y/label-has-associated-control: "off"
  ------- SolidJS uses `for` instead of `htmlFor` React specific props */
export const FieldUsername: Component = () => {
  const [getMessage, setMessage] = createSignal("");

  return (
    <div class="field">
      <div class="info">
        If provided Username will not be valid if it's not at least 3 word
        character (a to z, 0 to 9) and 16 maximum, or is either{" "}
        <code>admin</code>, or <code>user</code>
      </div>
      <label for="user-username">Username</label>
      <input
        id="user-username"
        name="username"
        type="text"
        pattern="\w{3,16}"
        use:validation={[setMessage, [availableUsername]]}
        placeholder="Username"
      />
      <ValidationMessage message={getMessage()} />
    </div>
  );
};
