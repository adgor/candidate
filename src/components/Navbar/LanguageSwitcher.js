import React from "react";
import { useLocalization, LocalizedLink } from "gatsby-theme-i18n";

export default function LanguageSwitcher() {
  const { locale, config } = useLocalization();

  // set original path
  let path = typeof window !== "undefined" ? window.location.pathname : "";
  config.forEach((item) => (path = path.replace(`${item.code}/`, "")));

  return (
    <div>
      {config.map((lang) => (
        <LocalizedLink to={path} key={lang.code} language={lang.code}>
          <span className="mr-2 text-sm text-brand-darkLight hover:text-secondary">
            {lang.code.toUpperCase()}
          </span>
        </LocalizedLink>
      ))}
    </div>
  );
}
