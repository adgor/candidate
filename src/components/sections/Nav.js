import React, { useState } from "react";
import { useIntl } from "react-intl";
import LanguageSwitcher from "../Navbar/LanguageSwitcher";
import NavLinkMobil from "../Navbar/NavLinkMobil";
import NavLink from "../Navbar/NavLink";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const intl = useIntl();

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
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
                  <p className="px-1 text-xs font-normal leading-6 flex-0">
                    {intl.formatMessage({ id: "forMayor" })}
                  </p>
                  <p className="flex-1 border-t"></p>
                </div>
              </div>
            </a>
          </div>
          <ul className="flex items-center hidden ml-10 space-x-1 lg:flex">
            <NavLink slug="/" title={intl.formatMessage({ id: "home" })} />
            <NavLink
              slug="/program"
              title={intl.formatMessage({ id: "program" })}
            />
            <NavLink
              slug="/projects"
              title={intl.formatMessage({ id: "projects" })}
            />
            <NavLink
              slug="/about"
              title={intl.formatMessage({ id: "biography" })}
            />
            <NavLink
              slug="/staff"
              title={intl.formatMessage({ id: "teachingStaff" })}
              aaa
            />
            <NavLink
              slug="/contact"
              title={intl.formatMessage({ id: "contact" })}
            />
          </ul>
        </div>
        <ul className="flex items-center hidden px-4 pr-10 space-x-8 lg:flex">
          <LanguageSwitcher />
        </ul>
        <div className="px-4 lg:hidden ">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 z-50 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-10 py-4 -mx-10 text-white rounded bg-brand">
                    <a
                      href="/"
                      aria-label="Go home"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <div className="flex flex-col text-center uppercase">
                        <h2 className="inline text-xl font-black leading-4 tracking-widest">
                          {intl.formatMessage({ id: "candidateName" })} <br />
                          {intl.formatMessage({ id: "candidateLastName" })}
                        </h2>

                        <div className="flex flex-row items-center content-center">
                          <p className="flex-1 border-t"></p>
                          <p className="px-1 text-xs font-normal leading-6 flex-0">
                            {intl.formatMessage({ id: "forMayor" })}
                          </p>
                          <p className="flex-1 border-t"></p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <NavLinkMobil
                      slug="/"
                      title={intl.formatMessage({ id: "home" })}
                    />
                    <NavLinkMobil
                      slug="/program"
                      title={intl.formatMessage({ id: "program" })}
                    />
                    <NavLinkMobil
                      slug="/projects"
                      title={intl.formatMessage({ id: "projects" })}
                    />
                    <NavLinkMobil
                      slug="/about"
                      title={intl.formatMessage({ id: "aboutUs" })}
                    />
                    <NavLinkMobil
                      slug="/staff"
                      title={intl.formatMessage({ id: "teachingStaff" })}
                    />
                    <NavLinkMobil
                      slug="/contact"
                      title={intl.formatMessage({ id: "contact" })}
                    />
                  </ul>
                  <div className="mt-4 border-t">
                    <LanguageSwitcher />
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
