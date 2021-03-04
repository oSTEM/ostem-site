import Link from "next/link";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { Breakpoint, Color, Font, TextSize } from "@/theme";
import { UnstyledButton } from "../button";

export const Nav = () => {
  // When in mobile mode, control whether or not the menu is active
  const [open, setOpen] = React.useState(false);
  const toggleOpen = React.useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen((open) => !open);
  }, []);

  return (
    <nav>
      <div className="nav-header">
        <NavToggle toggleOpen={toggleOpen} />
        <img alt="oSTEM logo" src="/images/logo-banner.png" className="logo" />
      </div>
      <NavMenu open={open} />
      <style jsx>{`
        .nav-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }

        .logo {
          display: block;
          max-height: 5rem;
          max-width: 15rem;
          height: auto;
          width: auto;
          margin-left: auto;
        }

        @media (min-width: ${Breakpoint.MinMobile}) {
          .logo {
            margin-right: auto;
          }
        }
      `}</style>
    </nav>
  );
};

const NavToggle = ({
  toggleOpen,
}: {
  toggleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className={"root"}>
      <UnstyledButton onClick={toggleOpen} aria-label={"toggle navigation"}>
        <FontAwesomeIcon className={`icon`} icon={faBars} role={"button"} />
      </UnstyledButton>
      <style jsx>{`
        .root {
          font-size: 2rem;
          padding: 1rem;
        }

        @media only screen and (min-width: ${Breakpoint.MinMobile}) {
          .root {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const NavMenu = ({ open }: { open: boolean }) => {
  return (
    <div
      className="nav-list" // used to control open/closed for mobile nav
      data-nav-open={open}
    >
      <ul>
        <NavItem href={"/"}>Conference Home</NavItem>
        <NavItem href={"/cfp"}>Call for Proposals</NavItem>
        <NavItem href={"https://ostem.org/"}>About oSTEM</NavItem>
      </ul>
      <style jsx>{`
        .nav-list {
          display: none;
        }

        .nav-list[data-nav-open="true"] {
          display: block;
        }

        .nav-list ul {
          display: flex;
          flex-flow: column nowrap;
          text-align: center;
          list-style: none;
          width: 100%;
        }

        @media only screen and (min-width: ${Breakpoint.MinMobile}) {
          .nav-list {
            padding: 1rem;
            width: 12rem;
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

const NavItem = (p: { href: string; children: React.ReactNode }) => {
  const internal = !p.href.includes("://");
  return (
    <>
      <li>
        {internal ? (
          <Link href={p.href} passHref>
            <a>{p.children}</a>
          </Link>
        ) : (
          <a href={p.href}>{p.children}</a>
        )}
      </li>
      <style jsx>{`
        a {
          display: block;
          font-family: ${Font.Heading};
          font-size: ${TextSize.T100};
          padding: 0.75rem 0;
          transition: color 0.2s;
          line-height: 1.5em;
        }

        a:hover {
          color: ${Color.FrostDark};
        }
      `}</style>
    </>
  );
};
