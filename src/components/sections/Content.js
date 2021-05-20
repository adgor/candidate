import React from "react";
import { useIntl } from "react-intl";
import Accordion from "./ContentAccordion";
import AccItem from "./AccItem";

export const Content = () => {
  const intl = useIntl();
  return (
    <div className="px-4 py-16 mx-auto bg-gray-50 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
          <h5 className="mb-4 text-xl font-bold leading-none text-brand sm:text-3xl">
            {intl.formatMessage({ id: "economy" })}
          </h5>
          <Accordion>
            <AccItem
              title={intl.formatMessage({ id: "employment" })}
              desc={intl.formatMessage({ id: "employmentDesc" })}
            />
            <AccItem
              title={intl.formatMessage({ id: "reform" })}
              desc={intl.formatMessage({ id: "reformDesc" })}
            />
            <AccItem
              title={intl.formatMessage({ id: "mandatePlan" })}
              desc={intl.formatMessage({ id: "mandatePlanDesc" })}
            />
          </Accordion>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <h5 className="mb-4 text-xl font-bold leading-none text-brand sm:text-3xl">
            {intl.formatMessage({ id: "development" })}
          </h5>
          <Accordion>
            <AccItem
              title={intl.formatMessage({ id: "industrialRevolution" })}
              desc={intl.formatMessage({ id: "industrialRevolutionDesc" })}
            />
            <AccItem
              title={intl.formatMessage({ id: "newInfrastructure" })}
              desc={intl.formatMessage({ id: "newInfrastructureDesc" })}
            />
            <AccItem
              title={intl.formatMessage({ id: "mandatePlan" })}
              desc={intl.formatMessage({ id: "mandatePlanDesc" })}
            />
          </Accordion>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <h5 className="mb-4 text-xl font-bold leading-none text-brand sm:text-3xl">
            {intl.formatMessage({ id: "environment" })}
          </h5>
          <Accordion>
            <AccItem
              title={intl.formatMessage({ id: "employment" })}
              desc={intl.formatMessage({ id: "employmentDesc" })}
            />
            <AccItem
              title={intl.formatMessage({ id: "reform" })}
              desc={intl.formatMessage({ id: "reformDesc" })}
            />
            <AccItem
              title={intl.formatMessage({ id: "mandatePlan" })}
              desc={intl.formatMessage({ id: "mandatePlanDesc" })}
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};
