import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-64 h-64 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
      <style jsx>
        {`
          .loader {
            border-top-color: #3498db;
            -webkit-animation: spinner 1.5s linear infinite;
            animation: spinner 1.5s linear infinite;
          }

          @-webkit-keyframes spinner {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }

          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
