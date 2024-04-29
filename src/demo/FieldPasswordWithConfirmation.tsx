import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { ValidationMessage } from "./ValidationMessage";

// *** validation Directive *** //
import { validation } from "#lib/index";
validation; // prevent TypeScript's tree-shaking
import type { validator } from "#lib/index";

import "./validation.css";

/* eslint jsx-a11y/label-has-associated-control: "off"
  ------- SolidJS uses `for` instead of `htmlFor` React specific props */
export const FieldPasswordWithConfirmation: Component = () => {
  const [getPasswordMessage, setPasswordMessage] = createSignal("");
  const [getConfirmationMessage, setConfirmationMessage] = createSignal("");

  let passwordRef: HTMLInputElement;
  const equalPassword: validator = async (element) => {
    const confirm = (element as HTMLInputElement).value;
    const errored = !(confirm === passwordRef.value);
    return errored ? "Must be the same as the password" : "";
  };

  return (
    <>
      <div class="field">
        <div class="info">
          Password will not be valid if it's not at least 8 character.
        </div>
        <label for="user-password">Password</label>
        <input
          id="user-password"
          name="password"
          type="password"
          required
          minLength="8"
          use:validation={setPasswordMessage}
          ref={passwordRef!}
          placeholder="Password"
        />
        <ValidationMessage message={getPasswordMessage()} />
      </div>

      <div class="field">
        <div class="info">
          Password confirmation will not be valid if it's not the same as the
          password.
        </div>
        <label for="user_password_confirm">Confirm your password</label>
        <input
          id="user_password_confirm"
          name="password_confirm"
          type="password"
          required
          use:validation={[setConfirmationMessage, [equalPassword]]}
          placeholder="Password"
        />
        <ValidationMessage message={getConfirmationMessage()} />
      </div>
    </>
  );
};
