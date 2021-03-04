import React from "react";
import { BaseLayout, BaseLayoutProps } from "./base";

export interface PageLayoutProps extends BaseLayoutProps {}

export const PageLayout = ({ children, ...rest }: PageLayoutProps) => {
  return (
    <BaseLayout {...rest}>
      <main>{children}</main>
      <style jsx>{`
        main {
          padding: 1rem;
          width: 100%;
          max-width: 1000px;
          margin: auto auto;
        }
      `}</style>
    </BaseLayout>
  );
};
