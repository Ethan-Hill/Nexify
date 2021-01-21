import React from "react";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("./Drawer/Drawer.js"));
import DrawerToggle from "./Drawer/Items/DrawerToggle";

export default function SiteLayout({ session, children }) {
  return (
    <div>
      <DrawerToggle />
      <Drawer session={session} />
      {children}
    </div>
  );
}
