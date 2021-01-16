import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { signIn } from "next-auth/client";
import { useTheme } from "next-themes";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function Logout() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-24 p-5 ">
      <ShoelaceButton
        type="default"
        size="large"
        onClick={() => signIn("spotify")}
      >
        <ShoelaceIcon
          name="person-fill"
          style={{ paddingRight: "10px" }}
        ></ShoelaceIcon>
        Login
      </ShoelaceButton>
    </div>
  );
}
