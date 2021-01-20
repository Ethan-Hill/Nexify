import React from "react";

export default function CurrentSong({ src, name }) {
  return (
    <div className="flex items-center ">
      <img className="object-cover object-center h-16 ml-5" src={src} />;
      <div className="flex flex-col justify-start ml-2">
        <h1 className="text-2xl font-semibold text-white dark:text-gray-700 ">
          {name}
        </h1>
        <h1 className="text-lg text-white dark:text-gray-700 ">{name}</h1>
      </div>
    </div>
  );
}
