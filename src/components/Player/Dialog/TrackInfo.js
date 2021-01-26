import { useTheme } from "next-themes";

export default function TrackInfo({ track }) {
  const { theme } = useTheme();
  return (
    <sl-theme name={theme}>
      <sl-dialog label="Dialog" class="dialog-overview">
        <sl-tab-group>
          {track.item.album.artists.map((artist) => (
            <sl-tab slot="nav" panel="general">
              {artist.name}
            </sl-tab>
          ))}

          <sl-tab-panel name="general">
            This is the general tab panel.
          </sl-tab-panel>
          <sl-tab-panel name="custom">
            This is the custom tab panel.
          </sl-tab-panel>
        </sl-tab-group>
      </sl-dialog>
    </sl-theme>
  );
}
