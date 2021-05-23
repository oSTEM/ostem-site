import clsx from "clsx";
import { useState } from "react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { UnstyledButton } from "../button";

export const NavBar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center">
      <img
        alt="oSTEM logo"
        src="/images/logo-banner.png"
        className="block w-48 p-2 mx-auto"
      />
      <nav className={"p-2 flex flex-row flex-wrap justify-center mx-auto"}>
        <NavItem href={"/"}>Home</NavItem>
        <NavItem href={"/about"}>About</NavItem>
        <NavItem href={"/membership"}>Membership</NavItem>
        <NavItem href={"/resources"}>Resources</NavItem>
        <NavItem href={"/sponsorship"}>Sponsorship</NavItem>
      </nav>
    </div>
  );
};

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a className="flex items-center p-4" href={href}>
      {children}
    </a>
  );
};
