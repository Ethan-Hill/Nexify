import Head from "next/head";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";

const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "https://localhost:3000/api/auth/callback/spotify",
});

const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const Protected = dynamic(() => import("../../components/Protected.js"));
const Error = dynamic(() => import("../../components/Error"));

const CurrentlyPlaying = dynamic(() =>
  import("../../components/Player/CurrentlyPlaying/CurrentlyPlaying")
);

const PlayerPanel = dynamic(() =>
  import("../../components/Player/PlayerPanel/PlayerPanel")
);

import { useSession, getSession } from "next-auth/client";
import { useEffect } from "react";

function PlayerLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
      <Head>
        <title>Player</title>
      </Head>
      {children}
    </div>
  );
}

function Player(props, { errorCode, errorMessage }) {
  const Router = useRouter();
  const [session, loading] = useSession();

  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

  const initialData = props.currentTrack;

  const { data: currentTrack, error } = useSWR(
    "https://api.spotify.com/v1/me/player",
    fetcher,
    { initialData, refreshInterval: 3000 }
  );

  if (error) {
    console.log(error);
  }

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
  }

  if (!currentTrack.item || !currentTrack.device) {
    return (
      <PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-3xl">Start playing something!</h1>
        </main>
      </PlayerLayout>
    );
  }

  if (loading) {
    return (
      <PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <Loading />
        </main>
      </PlayerLayout>
    );
  }
  if (session) {
    return (
      <PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 w-8/12">
          <CurrentlyPlaying track={currentTrack} />
          {
            //Check if message failed
            session.user.profile.product === "premium" ? (
              <PlayerPanel track={currentTrack} device={currentTrack.device} />
            ) : null
          }
          <Switch />
        </main>
      </PlayerLayout>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
  }

  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      })
      .then((res) => {
        return res.data;
      });

  const currentTrack = await fetcher("https://api.spotify.com/v1/me/player");

  return {
    props: { session, currentTrack },
  };
}

export default Player;
