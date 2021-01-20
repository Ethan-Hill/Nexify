import React from "react";
import dynamic from "next/dynamic";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { useRouter } from "next/router";

const CurrentSong = dynamic(() => import("./Items/CurrentSong"));
const PlayerController = dynamic(() => import("./Items/Playercontroller"));
const PlayerVolume = dynamic(() => import("./Items/PlayerVolume"));
const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function DrawerItem({ currentTrack, currentDevice }) {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push(link);
  };

  return (
    <div className="absolute bottom-0 w-screen h-24 bg-backgroundBlue dark:bg-white ">
      <div className="flex justify-between w-full h-full ">
        <CurrentSong
          src={currentTrack.item.album.images[0].url}
          name={currentTrack.item.name}
        />
        <PlayerController
          src={currentTrack.item.album.images[0].url}
          name={currentTrack.item.name}
        />
        <h1>{JSON.stringify(currentDevice)}</h1>
        {/* <PlayerVolume amount={device[0].volume_percent} /> */}
      </div>
    </div>
  );
}
