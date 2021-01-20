import React from "react";
import dynamic from "next/dynamic";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { useRouter } from "next/router";

const CurrentSong = dynamic(() => import("./Items/CurrentSong"));
const PlayerController = dynamic(() => import("./Items/Playercontroller"));
const PlayerVolume = dynamic(() => import("./Items/PlayerVolume"));
const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function DrawerItem({ track, device }) {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push(link);
  };

  return (
    <div className="absolute bottom-0 w-screen h-24 bg-backgroundBlue dark:bg-white ">
      <div className="flex justify-between w-full h-full ">
        <CurrentSong
          src={track.item.album.images[0].url}
          name={track.item.name}
        />
        <PlayerController
          src={track.item.album.images[0].url}
          name={track.item.name}
        />
        <h1>{JSON.stringify(device)}</h1>
        {/* <PlayerVolume amount={device[0].volume_percent} /> */}
      </div>
    </div>
  );
}
