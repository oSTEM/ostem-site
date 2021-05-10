import { PageLayout } from "@/layout/page";
import { MDXProviderComponents } from "@mdx-js/react";
import React from "react";

export interface MDXPageConfig {
  pageTitle?: string;
}

export const mdxComponents = (
  components: MDXProviderComponents,
): MDXProviderComponents => ({
  ...components,

  /**
   * Wrap MDX pages with a default layout.
   *
   * Without this, the MDX pages wouldn't include the navbar, etc.
   */
  wrapper: function MyMDXLayout({
    children,
    config = {},
  }: {
    children: any;
    config?: MDXPageConfig;
  }) {
    return (
      <PageLayout pageTitle={config.pageTitle || ""}>
        <div className="markdown w-full">{children}</div>
      </PageLayout>
    );
  },

  p: function MDXParagraph({ children, ...props }) {
    return (
      <p {...props}>
        {children}
        <style jsx>{`
          p {
            line-height: 1.5em;
            padding: 0.5em 0;
          }
        `}</style>
      </p>
    );
  },

  ul: function MDXUnorderedList({ children }) {
    return (
      <ul>
        {children}
        <style jsx>{`
          ul {
            list-style: disc outside;
            padding-left: 2rem;
          }

          ul :global(li) {
            padding: 0.25em 0;
          }
        `}</style>
      </ul>
    );
  },
});
