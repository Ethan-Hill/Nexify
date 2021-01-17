import React from "react";

import dynamic from "next/dynamic";
const DrawerItem = dynamic(() => import("./Items/DrawerItem.js"));
const Login = dynamic(() => import("../Auth/Login"));
const Logout = dynamic(() => import("../Auth/Logout"));

import wrapCustomElement from "@shoelace-style/react-wrapper";
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
            <DrawerItem title="Player" link="/player" />
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
            <DrawerItem title="Home" link="/?error=Not+Logged+In" />
            <DrawerItem title="Profile" link="/?error=Not+Logged+In" />
            <DrawerItem title="Player" link="/?error=Not+Logged+In" />
          </div>
        </ShoelaceDrawer>
      </div>
    );
  }
}
