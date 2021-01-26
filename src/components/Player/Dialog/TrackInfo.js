import { useTheme } from "next-themes";

export default function TrackInfo({ track }) {
  const { theme } = useTheme();
  return (
    <sl-theme name={theme}>
      <sl-dialog label="Artist Infomation" class="dialog-overview">
        <sl-tab-group>
          {track.item.artists.map((artist) => (
            <sl-tab slot="nav" panel={artist.id} key={artist.id}>
              {artist.name}
            </sl-tab>
          ))}

          {track.item.artists.map((artist) => (
            <sl-tab-panel name={artist.id}>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">Artist</h1>
                <h1 className="mb-3">{artist.name}</h1>
                <h1 className="text-xl font-bold">ID</h1>
                <h1 className="mb-3">{artist.id}</h1>
                <h1 className="mb-3 text-xl font-bold">Link</h1>
                <sl-button href={artist.external_urls.spotify} target="_blank">
                  Profile
                </sl-button>
              </div>
            </sl-tab-panel>
          ))}
        </sl-tab-group>
      </sl-dialog>
    </sl-theme>
  );
}
