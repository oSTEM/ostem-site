import React from "react";

/**
 * A button that does not look like a button.
 *
 * Used to wrap things that are *semantically* buttons, but shouldn't be styled
 * like normal buttons (e.g., hamburger menu buttons).
 */
export const UnstyledButton = (
  props: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">,
) => {
  return (
    <button {...props} className={`unstyled-button`}>
      {props.children}
      <style jsx>{`
        .unstyled-button {
          display: block;
          font-size: inherit;
          background-color: transparent;
          border: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </button>
  );
};
