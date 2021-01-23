import { useEffect } from "react";
export default function PlaybackNext({ handleClick }) {
  return (
    <div className="flex items-center sm:hidden">
      <div className="flex justify-center w-12 mr-2">
        <sl-button onClick={handleClick}>
          <sl-icon name="skip-end"></sl-icon>
        </sl-button>
      </div>
    </div>
  );
}
