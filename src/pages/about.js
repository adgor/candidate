import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Page3 = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "thirdPage" })} />
      <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {intl.formatMessage({ id: "biography" })}
      </h1>
    </Layout>
  );
};

export default Page3;
