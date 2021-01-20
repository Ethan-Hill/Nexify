import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const Protected = dynamic(() => import("../../components/Protected.js"));
const CurrentlyPlaying = dynamic(() =>
  import("../../components/Player/CurrentlyPlaying/CurrentlyPlaying")
);

const PlayerPanel = dynamic(() =>
  import("../../components/Player/PlayerPanel/PlayerPanel")
);
import { useSession, getSession } from "next-auth/client";
import { useEffect } from "react";

function Player({ currentTrack, currentDevice }) {
  const [session, loading] = useSession();
  const Router = useRouter();

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
  const session = await getSession(context);

  if (!session) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
    return {};
  }

  spotifyApi.setAccessToken(session.user.accessToken);

  const currentTrack = await spotifyApi.getMyCurrentPlayingTrack().then(
    function (data) {
      data.json();
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );

  const currentDevice = await spotifyApi.getMyDevices().then(
    function (data) {
      data.json();
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );

  return {
    session,
    playback: { currentTrack, currentDevice },
  };
}
