import React from "react";
import { useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

function AboutCandidate() {
  const intl = useIntl();
  return (
    <>
      <div className="px-4 py-20 mx-auto border-t shadow xl:px-0">
        <div>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-2/5 ">
              <StaticImage
                src="../../images/artin2.jpg"
                alt="28 nentori hall"
                className="w-full rounded shadow"
                placeholder="tracedSVG"
              ></StaticImage>
            </div>
            <div className="w-full mt-6 md:mt-0 lg:w-3/5">
              <div className="lg:pl-8 text-color">
                <h2 className="text-2xl font-bold text-brand dark:text-white md:text-6xl">
                  {intl.formatMessage({ id: "aboutCandidateTitle" })}
                </h2>

                <h4 className="mt-2 text-xl font-medium text-brand dark:text-white md:text-2xl">
                  {intl.formatMessage({ id: "aboutCandidateSubTitle" })}{" "}
                </h4>
                <p className="mt-8 text-base leading-relaxed text-brand dark:text-gray-400">
                  {intl.formatMessage({ id: "aboutCandidateDesc" })}
                </p>
                <div className="flex mt-8">
                  <a
                    href="#"
                    className="block px-3 py-2 font-semibold transition-colors duration-200 transform bg-gray-200 rounded-md text-brand hover:bg-gray-300"
                  >
                    {intl.formatMessage({ id: "learnMore" })}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCandidate;
