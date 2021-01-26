import { useEffect } from "react";

export default function CurrentTrackInfo() {
  useEffect(() => {
    const dialog = document.querySelector(".dialog-overview");
    const openButton = document.querySelector(".dialog-toggle");

    openButton.addEventListener("click", () => dialog.show());
  });

  return (
    <div>
      <div className="absolute text-3xl top-3 right-3">
        <sl-theme name="dark">
          <sl-icon-button
            name="info-circle-fill"
            label="Info"
            class="dialog-toggle"
          ></sl-icon-button>
        </sl-theme>
      </div>
    </div>
  );
}
