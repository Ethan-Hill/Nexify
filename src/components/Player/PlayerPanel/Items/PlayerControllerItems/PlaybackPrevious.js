import { useEffect } from "react";
export default function PlaybackPrevious({ handleClick }) {
  return (
    <div className="flex items-center sm:hidden">
      <div className="flex justify-center w-12 mr-2">
        <sl-button onClick={handleClick}>
          <sl-icon name="skip-start"></sl-icon>
        </sl-button>
      </div>
    </div>
  );
}
