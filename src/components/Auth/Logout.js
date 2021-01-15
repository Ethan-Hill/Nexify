import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { signOut } from "next-auth/client";
import { useTheme } from "next-themes";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function Logout() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="absolute top-0 right-0 h-24 p-5">
      <sl-theme name={theme === "light" ? "dark" : "light"}>
        <ShoelaceButton type="default" size="large" onClick={() => signOut()}>
          <ShoelaceIcon
            name="door-open-fill"
            style={{ paddingRight: "10px" }}
          ></ShoelaceIcon>
          Logout
        </ShoelaceButton>
      </sl-theme>
    </div>
  );
}
