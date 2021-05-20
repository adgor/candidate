import React from "react";
import { useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

export const Cta = () => {
  const intl = useIntl();
  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col text-center sm:mb-0">
          <div className="items-center justify-center w-16 mx-auto ">
            <StaticImage
              src="../../images/komuna.png"
              alt="28 nentori hall"
              className="mb-10"
              placeholder="tracedSVG"
            ></StaticImage>
          </div>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl ">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-wider text-brand sm:text-4xl md:mx-auto">
              {intl.formatMessage({ id: "ctaTitle" })}
            </h2>

            <p className="text-base font-normal text-brand md:text-xl">
              {intl.formatMessage({ id: "ctaVote" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
