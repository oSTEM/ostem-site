import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { Breakpoint, Color, Font, TextSize } from "@/theme";
import { UnstyledButton } from "../button";


export const Nav = () => {
  return (
    <nav
    
    >
      <ul className="flex flex-col text-center list-none w-full">
        <NavItem href={"/blm-resources"}>Black Lives Matter Resources</NavItem>
        <NavItem href={"/crisis-resources"}>Crisis Resources</NavItem>
        <NavItem href={"/covid-resources"}>COVID-19 Resources</NavItem>
        <NavItem href={"/member-resources"}>Member Resources</NavItem>
        <NavItem href={"/affinity-groups"}>Affinity Groups</NavItem>
        <NavItem href={"/grad-app-assistance"}>Grad App Assistance</NavItem>
      </ul>
    </nav>
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
