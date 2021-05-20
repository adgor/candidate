import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

export default function NavLink(props) {
  return (
    <LocalizedLink
      to={props.slug}
      className="px-3 py-2 text-base font-medium rounded-md text-brand-darkLight hover:bg-secondary hover:text-brand"
    >
      {props.title}
    </LocalizedLink>
  );
}
