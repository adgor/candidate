import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

export default function OneAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <AccordionItem className="border-t-2 border-brand">
      <AccordionItemHeading
        onClick={() => setIsActive(!isActive)}
        className="my-4"
      >
        <AccordionItemButton className="text-brand hover:text-brand-light">
          <div className="flex flex-row items-center justify-between">
            <h6 className="text-lg font-medium leading-6 ">{props.title}</h6>
            <div>{isActive ? <FaChevronDown /> : <FaChevronRight />}</div>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="my-2 text-base text-gray-500">{props.desc}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
