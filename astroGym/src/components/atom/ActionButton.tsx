import React from "react";
import { ActionButtonProps, SelectedPage } from "../types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className=" rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
