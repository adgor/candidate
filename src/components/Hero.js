import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "react-intl";

export const Hero = () => {
  const intl = useIntl();
  return (
    <div className="flex flex-col justify-between px-4 mx-auto text-center bg-gri lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="py-4 text-brand-darkLight ">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex "
        >
          <div className="flex flex-col uppercase">
            <h2 className="inline font-black tracking-wide text-left text-7xl md:text-8xl lg:text-9xl ">
              {intl.formatMessage({ id: "candidateName" })} <br />
              {intl.formatMessage({ id: "candidateLastName" })}
            </h2>

            <div className="flex flex-row items-center text-left">
              <p className="pr-1 text-xl font-bold lg:text-2xl ">
                {intl.formatMessage({ id: "forMayor" })}
              </p>
              <span className="flex-auto border-b-4 border-brand-darkLight"></span>
            </div>
          </div>
        </a>
      </div>
      <div className="items-baseline -mb-1 lg:max-w-lg lg:w-full">
        <StaticImage
          src="../images/artin1.jpg"
          alt="28 nentori hall"
          className="relative rounded"
          placeholder="tracedSVG"
        ></StaticImage>
      </div>
    </div>
  );
};
