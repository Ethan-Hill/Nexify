import React from "react";

export default function UserEmail({ email }) {
  return (
    <h1 className="my-6 text-lg sm:text-xl md:text-3xl">
      Email: <span className="text-spotifyGreen">{email}</span>
    </h1>
  );
}
