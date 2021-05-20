import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuIcon } from "@heroicons/react/solid";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const intl = useIntl();
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <div className="px-10 py-4 text-white bg-brand">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <div className="flex flex-col text-center uppercase">
            <h2 className="inline text-xl font-black leading-4 tracking-widest sm:text-2xl sm:leading-5">
              {intl.formatMessage({ id: "candidateName" })} <br />
              {intl.formatMessage({ id: "candidateLastName" })}
            </h2>

            <div className="flex flex-row items-center content-center">
              <p className="flex-1 border-t"></p>
              <p className="px-1 text-xs font-normal flex-0">
                {intl.formatMessage({ id: "forMayor" })}
              </p>
              <p className="flex-1 border-t"></p>
            </div>
          </div>
        </a>
      </div>

      <div className="block mx-4 lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="inline-flex items-center justify-center p-2 rounded-md text-brand-darkLight focus:outline-none focus:ring-2 focus:ring-brand-darkLight"
        >
          <MenuIcon className="block w-6 h-6 text-brand-darkLight" />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex-col items-baseline ml-10 space-x-2 lg:flex-grow">
          <LocalizedLink
            to="/"
            className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
          >
            {intl.formatMessage({ id: "home" })}
          </LocalizedLink>
          <LocalizedLink
            to="/about"
            className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
          >
            {intl.formatMessage({ id: "aboutUs" })}
          </LocalizedLink>
          <LocalizedLink
            to="/projects"
            className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
          >
            {intl.formatMessage({ id: "projects" })}
          </LocalizedLink>
          <LocalizedLink
            to="/staff"
            className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
          >
            {intl.formatMessage({ id: "teachingStaff" })}
          </LocalizedLink>
          <LocalizedLink
            to="/program"
            className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
          >
            {intl.formatMessage({ id: "program" })}
          </LocalizedLink>
          <LocalizedLink
            to="/contact"
            className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
          >
            {intl.formatMessage({ id: "contact" })}
          </LocalizedLink>
        </div>
        <div className="flex items-center mt-6 lg:mt-0">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Header;
