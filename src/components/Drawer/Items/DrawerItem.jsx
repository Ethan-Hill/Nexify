import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function DrawerItem({ title, link }) {
  return (
    <div className="flex items-center justify-center w-full h-24">
      <div className="flex items-center justify-center w-full h-full ">
        <ShoelaceButton
          type="default"
          size="large"
          href={link}
          style={{ width: "200px" }}
        >
          {title}
        </ShoelaceButton>
      </div>
    </div>
  );
}
