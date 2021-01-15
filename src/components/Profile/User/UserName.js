import React from "react";

export default function UserName({ name }) {
  return (
    <h1 className="my-6 text-lg sm:text-xl md:text-3xl">
      Display Name: <span className="text-spotifyGreen">{name}</span>
    </h1>
  );
}
