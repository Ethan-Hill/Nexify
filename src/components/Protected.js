import React from "react";

export default function Protected() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-center">
      <h1 className="text-3xl">Please Sign in before visiting here</h1>
      <a className="text-xl font-bold text-blue-600" href="/">
        Home
      </a>
    </div>
  );
}
