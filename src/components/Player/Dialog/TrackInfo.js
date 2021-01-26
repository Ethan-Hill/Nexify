import { useTheme } from "next-themes";

export default function TrackInfo({ track }) {
  const { theme } = useTheme();
  return (
    <sl-theme name={theme}>
      <sl-dialog label="Dialog" class="dialog-overview">
        <sl-tab-group>
          {track.item.artists.map((artist) => (
            <sl-tab slot="nav" panel={artist.id} key={artist.id}>
              {artist.name}
            </sl-tab>
          ))}

          {track.item.artists.map((artist) => (
            <sl-tab-panel name={artist.id}>
              <div className="flex flex-col">
                <h1>Artist</h1>
                {artist.name}
              </div>
            </sl-tab-panel>
          ))}
        </sl-tab-group>
      </sl-dialog>
    </sl-theme>
  );
}
