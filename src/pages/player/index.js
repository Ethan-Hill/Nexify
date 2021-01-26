import axios from "axios";
import dynamic from "next/dynamic";
import useSWR, { SWRConfig } from "swr";

import PlayerLayout from "../../components/Layouts/PlayerLayout";

const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const TrackInfo = dynamic(() =>
  import("../../components/Player/Dialog/TrackInfo")
);
const Protected = dynamic(() => import("../../components/Protected.js"));
const Error = dynamic(() => import("../../components/Error"));

const CurrentlyPlaying = dynamic(() =>
  import("../../components/Player/CurrentlyPlaying/CurrentlyPlaying")
);

const PlayerPanel = dynamic(() =>
  import("../../components/Player/PlayerPanel/PlayerPanel")
);

import { useSession, getSession } from "next-auth/client";

function Player(props, { errorCode, errorMessage }) {
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
      });

  const initialData = props.currentTrack;

  const { data: currentTrack, error } = useSWR(
    "https://api.spotify.com/v1/me/player",
    fetcher,
    {
      initialData,
      refreshInterval: 2500,
    }
  );

  if (error) {
    return <Error statusCode="401" errorMessage="Not Authorized" />;
  }

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
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
    if (!currentTrack.item || !currentTrack.device) {
      return (
        <PlayerLayout>
          <main className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-3xl">Start playing something!</h1>
          </main>
        </PlayerLayout>
      );
    }
    return (
      <PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 w-8/12">
          <TrackInfo track={currentTrack} />
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
      })
      .catch(() => {
        return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
      });

  const currentTrack = await fetcher("https://api.spotify.com/v1/me/player");

  return {
    props: { session, currentTrack },
  };
}

export default Player;
