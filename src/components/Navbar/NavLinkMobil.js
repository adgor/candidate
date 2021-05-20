import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

export default function NavLinkMobil(props) {
  return (
    <li>
      <LocalizedLink
        to={props.slug}
        class="font-medium tracking-wide text-brand-darkLight transition-colors duration-200 hover:text-brand"
      >
        {props.title}
      </LocalizedLink>
    </li>
  );
}
