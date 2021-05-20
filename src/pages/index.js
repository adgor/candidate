import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Content } from "../components/sections/Content";
import { Cta } from "../components/sections/Cta";
import AboutCandidate from "../components/sections/AboutCandidate";
import { Hero } from "../components/Hero";

const Index = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "home" })} />

      {/* Hero Content */}
      <Hero />

      {/* Plan Content */}
      <Content />

      {/* CTE vote */}
      <Cta />

      {/* About Candidate */}
      <AboutCandidate />
    </Layout>
  );
};

export default Index;
