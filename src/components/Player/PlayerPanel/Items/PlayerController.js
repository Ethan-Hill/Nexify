import { useSession } from "next-auth/client";
import axios from "axios";
import React, { useState, useEffect } from "react";

import PlaybackNext from "./PlayerControllerItems/PlaybackNext";
import PlaybackPause from "./PlayerControllerItems/PlaybackPause";
import PlaybackPrevious from "./PlayerControllerItems/PlaybackPrevious";
import PlaybackResume from "./PlayerControllerItems/PlaybackResume";

export default function CurrentSong({ isPlaying }) {
  const [session] = useSession();

  const pausePlayback = () => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/pause",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resumePlayback = () => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/play",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextPlayback = () => {
    axios
      .post(
        "https://api.spotify.com/v1/me/player/next",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previousPlayback = () => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/previous",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isPlaying) {
    return (
      <div className="flex items-center justify-center flex-1">
        <sl-button-group>
          <PlaybackPrevious handleClick={previousPlayback} />
          <PlaybackPause handleClick={pausePlayback} />
          <PlaybackNext handleClick={nextPlayback} />
        </sl-button-group>
      </div>
    );
  }

  if (!isPlaying) {
    return (
      <div className="flex items-center justify-center flex-1">
        <sl-button-group>
          <PlaybackPrevious handleClick={previousPlayback} />
          <PlaybackResume handleClick={resumePlayback} />
          <PlaybackNext handleClick={nextPlayback} />
        </sl-button-group>
      </div>
    );
  }
}
