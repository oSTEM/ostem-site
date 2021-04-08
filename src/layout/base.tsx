import { Breakpoint } from "@/theme";
import Head from "next/head";
import React from "react";

import { Nav } from "@/components/nav";
import site from "@/config/site.json";

export interface BaseLayoutProps {
  children: React.ReactNode;
  pageTitle: string | null;
  appendSiteTitle?: boolean;
}

export const BaseLayout = ({
  children,
  pageTitle,
  appendSiteTitle = true,
}: BaseLayoutProps) => {
  return (
    <div className="outer">
      <div className={"root"}>
        <Head>
          <title>
            {pageTitle && appendSiteTitle
              ? `${pageTitle} | ${site.title}`
              : pageTitle || site.title}
          </title>
        </Head>
        <div className={"nav"}>
          <Nav />
        </div>
        <div>{children}</div>
      </div>
      <div className="spacer" />
      <footer>
        <VercelBanner />
      </footer>
      <style jsx>{`
        .outer {
          min-height: 100vh;
          height: 100%;
          display: flex;
          flex-flow: column;
        }
        .spacer {
          flex: 1;
        }
        .root {
          padding: 1rem;
          display: flex;
          flex-flow: column nowrap;
          overflow: auto;
        }

        footer {
          display: flex;
          padding: 2rem;
          background-color: #f8f8f8;
        }

        @media only screen and (min-width: ${Breakpoint.MinMobile}) {
          .root {
            flex-flow: row nowrap;
            padding: 4rem 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const VercelBanner = () => {
  return (
    <a
      className="vercel-banner"
      href="https://vercel.com/?utm_source=ostem&utm_campaign=oss"
    >
      Powered by{" "}
      <img src="/images/powered-by-vercel.svg" alt="Powered by Vercel" />
      <style jsx>{`
        .vercel-banner {
          color: inherit;
          display: block;
          margin-left: auto;
          display: flex;
          align-items: center;
        }
        img {
          display: inline-block;
          max-height: 1.25rem;
          margin-left: 0.25rem;
        }
      `}</style>
    </a>
  );
};
