import React from "react";

export default function CurrentSong({ amount }) {
  return (
    <div className="flex items-center ">
      <div className="flex justify-start w-12 mr-2">
        <sl-range min="0" max="100" step="1" value={amount}></sl-range>
      </div>
    </div>
  );
}
