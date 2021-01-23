import React from "react";
import dynamic from "next/dynamic";
import wrapCustomElement from "@shoelace-style/react-wrapper";
import { useRouter } from "next/router";

const CurrentSong = dynamic(() => import("./Items/CurrentSong"));
const PlayerController = dynamic(() => import("./Items/PlayerController"));
const PlayerVolume = dynamic(() => import("./Items/PlayerVolume"));
const ShoelaceButton = wrapCustomElement("sl-button");
const ShoelaceIcon = wrapCustomElement("sl-icon");

export default function PlayerPanel({ track, device }) {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push(link);
  };

  return (
    <div className="absolute bottom-0 w-screen h-24 bg-backgroundBlue dark:bg-white ">
      <div className="flex w-full h-full sm:justify-center">
        <CurrentSong
          src={track.item.album.images[0].url}
          name={track.item.name}
          artists={track.item.artists}
        />
        <PlayerController isPlaying={track.is_playing} />

        <PlayerVolume amount={device.volume_percent} />
      </div>
    </div>
  );
}
