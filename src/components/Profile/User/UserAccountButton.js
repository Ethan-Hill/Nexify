import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { useTheme } from "next-themes";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function UserAccountButton({ url }) {
  const { theme, setTheme } = useTheme();
  return (
    <sl-theme name={theme === "light" ? "dark" : "light"}>
      <ShoelaceButton type="default" size="large" href={url}>
        <ShoelaceIcon
          name="person-fill"
          style={{ paddingRight: "10px" }}
        ></ShoelaceIcon>
        Account
      </ShoelaceButton>
    </sl-theme>
  );
}
