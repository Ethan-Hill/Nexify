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
	  { //Check if message failed
        (user.image)
          ? <img
		  src={user.image}
		  alt="UserImage"
		  className="h-16 mr-2 rounded-full"
		/>
          : null
      }
      <h1 className="ml-2 text-lg font-semibold">Welcome {user.name}</h1>
    </div>
  );
}
