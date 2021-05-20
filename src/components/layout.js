import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MdxLink } from "gatsby-theme-i18n";
import { Footer } from "./Footer";
import { Nav } from "./sections/Nav";

const components = {
  a: MdxLink,
};

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
