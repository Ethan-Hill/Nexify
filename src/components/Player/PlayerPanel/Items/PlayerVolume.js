import { useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/client";

export default function CurrentSong({ amount }) {
  const [session] = useSession();

  useEffect(() => {
    const change = document.getElementById("range");
    change.addEventListener("sl-change", (e) => {
      axios
        .put("https://api.spotify.com/v1/me/player/volume", {}, {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          params: {
            volume_percent: e.target.value,
          },
        })
        .then((res) => {
          return res.data;
        });
    });
  }, []);

  return (
    <div className="flex items-center ">
      <div className="flex justify-center w-64 mr-2">
        <sl-range
          min="0"
          max="100"
          step="5"
          id="range"
          value={amount}
        ></sl-range>
      </div>
    </div>
  );
}
