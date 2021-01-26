import React from "react";
import CurrentTrackInfo from "../../CurrentlyPlaying/Items/CurrentTrackInfo";

export default function CurrentSong({ src, name, artists }) {
  const artist_names = artists.map((artist) => artist.name).join(", ");

  return (
    <div className="flex items-center flex-1 md:hidden">
      <img className="object-cover object-center h-16 ml-5" src={src} />;
      <div className="flex flex-col justify-start ml-2">
        <h1 className="text-2xl font-semibold text-white dark:text-gray-700 ">
          {name}
        </h1>
        <div className="flex">
          <h1 className="text-lg text-white dark:text-gray-700 ">
            {artist_names}
          </h1>
          <CurrentTrackInfo />
        </div>
      </div>
    </div>
  );
}
