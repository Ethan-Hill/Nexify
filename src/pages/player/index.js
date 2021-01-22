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

function PlayerLayout({children}) {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Player</title>
        </Head>
		{children}
      </div>
	)
}

function Player({ currentTrack, currentDevice, errorCode }) {
  const Router = useRouter();
  const [session, loading] = useSession();

  useEffect(() =>{
	console.log(currentDevice);
  },[currentDevice])

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
  }

  if(!currentTrack || !currentDevice) {
	 return <h1>No device or track</h1>
  }

  if (loading) {
    return (
		<PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <Loading />
        </main>
		</PlayerLayout>
    );
  } else if (session) {
    return (
		<PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 w-8/12">
          <CurrentlyPlaying track={currentTrack} />
          <PlayerPanel track={currentTrack} device={currentDevice.devices} />
          <Switch />
        </main>
      </PlayerLayout>
    );
  } else {
    return <Protected />;
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
  }

  spotifyApi.setAccessToken(session.user.accessToken);

  const currentTrack = await spotifyApi.getMyCurrentPlayingTrack().then(
    function (data) {
      return data.body;
    },
    function (err) {
      console.log("Something went wrong!", err.data.error);
    }
  );

  const currentDevice = await spotifyApi.getMyDevices().then(
    function (data) {
      return data.body;
    },
    function (err) {
      console.log("Something went wrong!", err.data.error);
    }
  );

  return {
    props: { session, currentTrack, currentDevice },
  };
}

export default Player;
