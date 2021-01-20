import React from "react";
import dynamic from "next/dynamic";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { useRouter } from "next/router";

const CurrentTrackImage = dynamic(() => import("./Items/CurrentTrackImage"));
const CurrentTrackName = dynamic(() => import("./Items/CurrentTrackName"));
const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function DrawerItem({ currentTrack }) {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push(link);
  };

  return (
    <div className="my-4 overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-2xl bg-backgroundBlue dark:bg-white hover:scale-105">
      <div className="flex flex-col w-64 h-full ">
        <CurrentTrackImage src={currentTrack.item.album.images[0].url} />
        <CurrentTrackName name={currentTrack.item.name} />
      </div>
    </div>
  );
}
