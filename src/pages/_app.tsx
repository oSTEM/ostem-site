import "./_app.css";
import { mdxComponents } from "@/components/markdown/mdx";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  console.log(Component, pageProps);
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
