import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

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

function Player({ currentTrack, currentDevice, errorCode }) {
  const Router = useRouter();
  const [session, loading] = useSession();

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Profile</title>
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <Loading />
        </main>
      </div>
    );
  } else if (session) {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Player</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.25/dist/shoelace/shoelace.css"
          />
          <script
            type="module"
            src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.25/dist/shoelace/shoelace.esm.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.25/themes/dark.css"
          />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 w-8/12">
          <CurrentlyPlaying track={currentTrack} />
          <PlayerPanel track={currentTrack} device={currentDevice} />
          <Switch />
          <h1>Player</h1>
        </main>
      </div>
    );
  } else {
    return <Protected />;
  }
}

export default async function getServerSideProps(context) {
  const [session] = await getSession(context);
  if (!session) {
    return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
  }

  spotifyApi.setAccessToken(session.user.accessToken);

  const currentTrack = await spotifyApi.getMyCurrentPlayingTrack().then(
    function (data) {
      return data.json();
    },
    function (err) {
      console.log("Something went wrong!", err.data.error);
    }
  );

  const currentDevice = await spotifyApi.getMyDevices().then(
    function (data) {
      return data.json();
    },
    function (err) {
      console.log("Something went wrong!", err.data.error);
    }
  );
  return {
    session,
    playback: { currentTrack, currentDevice },
  };
}
