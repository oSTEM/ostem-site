import React from "react";

import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export interface BaseLayoutProps {
  children: React.ReactNode;
}

/**
 * The base layout for the site.
 *
 * This renders the top navbar and the bottom footer. Consumers should
 * ultimately render a `<main />` element.
 */
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
      <div className="flex-1 min-h-[2rem]" />
      <Footer />
    </div>
  );
};
