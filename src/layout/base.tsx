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
    <div className="min-h-screen flex flex-col">
      <div className="p-4 flex flex-col md:flex-row md:px-8 md:py-16">
        <Head>
          <title>
            {pageTitle && appendSiteTitle
              ? `${pageTitle} | ${site.title}`
              : pageTitle || site.title}
          </title>
        </Head>
        <div>
          <Nav />
        </div>
        <div className="w-full">{children}</div>
      </div>
      <div className="flex-1" />
      <footer className="flex p-8 bg-gray-50">
        <VercelBanner />
      </footer>
    </div>
  );
};

const VercelBanner = () => {
  return (
    <a
      className="text-current block ml-auto flex items-center"
      href="https://vercel.com/?utm_source=ostem&utm_campaign=oss"
    >
      Powered by
      <img
        src="/images/powered-by-vercel.svg"
        alt="Vercel"
        className="max-h-4 ml-1"
      />
    </a>
  );
};
