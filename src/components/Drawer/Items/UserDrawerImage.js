import React from "react";
import { Head } from "next/head";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { useRouter } from "next/router";

const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function DrawerItem({ user }) {
  const Router = useRouter();

  return (
    <div className="flex items-center justify-center w-full h-16 mb-6">
      <img
        src={user.image}
        alt="USerImage"
        className="h-16 mr-2 rounded-full"
      />
      <h1 className="ml-2 text-lg font-semibold">{user.name}</h1>
    </div>
  );
}
