import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import DrawerItem from "./Items/DrawerItem.js";
const ShoelaceDrawer = wrapCustomElement("sl-drawer");
const ShoelaceMenuDivider = wrapCustomElement("sl-menu-divider");

export default function Drawer() {
  return (
    <div>
      <ShoelaceDrawer className="drawer-placement-left" placement="left">
        <div className="flex flex-col items-center w-full h-full ">
          <DrawerItem title="Home" link="/" />
          <DrawerItem title="Profile" link="/profile" />
        </div>
      </ShoelaceDrawer>
    </div>
  );
}
