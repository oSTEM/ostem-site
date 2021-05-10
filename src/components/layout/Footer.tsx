import * as React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialRow } from "./Socials";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 p-6 text-xs text-gray-600 flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-center">
          <img
            alt="oSTEM logo"
            src="/images/logo-banner.png"
            className="block max-h-16 mx-auto"
          />
          <a
            className="text-base p-2 inline-flex items-center"
            href="mailto:info@ostem.org"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            info@ostem.org
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <SocialRow />
        </div>
      </div>
      <div className="text-center">
        &copy; {new Date().getFullYear()} Out in Science, Technology,
        Engineering, and Mathematics Incorporated
      </div>
      <VercelBanner />
    </footer>
  );
};

const VercelBanner = () => {
  return (
    <a
      className="text-current block mx-auto flex items-center"
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
