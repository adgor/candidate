import React from "react";
import { Accordion } from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

export default function ContentAccordion({ children }) {
  return (
    <Accordion className="mt-6" allowZeroExpanded>
      {children}
    </Accordion>
  );
}
