import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import DrawerItem from "./Items/DrawerItem.js";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";
const ShoelaceDrawer = wrapCustomElement("sl-drawer");
const ShoelaceMenuDivider = wrapCustomElement("sl-menu-divider");

export default function Drawer({ session }) {
  if (session) {
    return (
      <div>
        <ShoelaceDrawer className="drawer-placement-left" placement="left">
          <div className="flex flex-col items-center w-full h-full ">
            <Logout />
            <ShoelaceMenuDivider
              style={{ width: "200px", marginTop: "24px" }}
            />
            <DrawerItem title="Home" link="/" />
            <DrawerItem title="Profile" link="/profile" />
          </div>
        </ShoelaceDrawer>
      </div>
    );
  } else {
    return (
      <div>
        <ShoelaceDrawer className="drawer-placement-left" placement="left">
          <div className="flex flex-col items-center w-full h-full ">
            <Login />
            <DrawerItem title="Home" link="/" />
            <DrawerItem title="Profile" link="/profile" />
          </div>
        </ShoelaceDrawer>
      </div>
    );
  }
}
