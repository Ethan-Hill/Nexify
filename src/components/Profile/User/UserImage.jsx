import React from "react";

export default function UserImage({ src }) {
  return (
    <img
      className="w-32 h-32 my-12 rounded-full"
      src={src}
      width="384"
      height="512"
    />
  );
}
