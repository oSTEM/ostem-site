import { Color } from "@/theme";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "styled-jsx/css";

export interface ButtonProps {
  icon?: IconDefinition;
  children: string;
  disabled?: boolean;
  onClick: string | ((event: React.MouseEvent) => void);
}

export const Button = ({ icon, children, disabled, onClick }: ButtonProps) => {
  const iconElt = icon ? (
    <FontAwesomeIcon icon={icon} fixedWidth className="icon" />
  ) : null;

  const button = (() => {
    if (typeof onClick === "string") {
      return (
        <a
          className={buttonStyle.className}
          href={disabled ? undefined : onClick}
          data-disabled={disabled}
        >
          {iconElt}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <button
        className={buttonStyle.className}
        onClick={onClick}
        disabled={disabled}
        data-disabled={disabled}
      >
        {iconElt}
        <span>{children}</span>
      </button>
    );
  })();

  return (
    <>
      {button}
      {buttonStyle.styles}
    </>
  );
};

const buttonStyle = css.resolve`
  --bg: ${Color.Frost};
  --bg-active: ${Color.FrostDark};
  --bg-disabled: ${Color.FrostDisabled};
  --text: white;
  --text-active: white;
  --text-disabled: white;
  --outline: var(--bg-active);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.25em;
  position: relative;
  padding: var(--padding, 0.75rem 1.5rem);
  color: var(--text);
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  background-color: var(--bg);
  border-radius: 0.75rem;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;
  outline: none;
  border: 2px solid;
  border-color: var(--border, attr(background-color));
  cursor: pointer;

  :not([data-disabled="true"]):hover,
  :focus {
    background-color: var(--bg-active);
  }

  :disabled,
  [data-disabled="true"] {
    background-color: var(--bg-disabled);
    cursor: not-allowed;
  }

  /* outer focus ring */
  :after {
    content: "";
    transition: box-shadow 0.15s;
    margin: -4px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 0.85rem;
  }
  :focus:after {
    box-shadow: 0 0 0 2px var(--bg-active);
  }

  & :global(.icon) {
    margin-right: 0.5em;
  }
`;
