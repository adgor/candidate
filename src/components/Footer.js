import React from "react";
import { useIntl } from "react-intl";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  const intl = useIntl();
  return (
    <div className="px-4 pt-16 mx-auto text-white bg-brand sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <div className="flex flex-col text-center uppercase">
              <h2 className="text-5xl font-black leading-8 ">
                {intl.formatMessage({ id: "candidateName" })}
              </h2>
              <h2 className="text-5xl font-black ">
                {intl.formatMessage({ id: "candidateLastName" })}
              </h2>
              <div className="flex flex-row items-center content-center">
                <p className="flex-1 border-t"></p>
                <p className="px-1 text-sm font-normal flex-0">
                  {intl.formatMessage({ id: "forMayor" })}
                </p>
                <p className="flex-1 border-t"></p>
              </div>
            </div>
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">
            {intl.formatMessage({ id: "links" })}
          </p>
          <div className="flex flex-col ">
            <a
              href="/"
              className="text-gray-200 transition duration-300 hover:text-white"
            >
              {intl.formatMessage({ id: "home" })}
            </a>
            <a
              href="/"
              className="text-gray-200 transition duration-300 hover:text-white"
            >
              {intl.formatMessage({ id: "program" })}
            </a>
            <a
              href="/"
              className="text-gray-200 transition duration-300 hover:text-white"
            >
              {intl.formatMessage({ id: "biography" })}
            </a>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">
            {intl.formatMessage({ id: "contact" })}
          </p>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2" />

            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@lorem.mail
            </a>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide">
            {intl.formatMessage({ id: "followUs" })}
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="transition duration-300 hover:text-brand-light"
            >
              <FaTwitterSquare className="w-6 h-6 " />
            </a>
            <a
              href="/"
              className="transition duration-300 hover:text-brand-light"
            >
              <FaInstagramSquare className="w-6 h-6 " />
            </a>
            <a
              href="/"
              className="transition duration-300 hover:text-brand-light"
            >
              <FaFacebookSquare className="w-6 h-6 " />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10 border-t border-gray-600 ">
        <p className="text-sm text-gray-300">
          {intl.formatMessage({ id: "copyright" })}
        </p>
      </div>
    </div>
  );
};
