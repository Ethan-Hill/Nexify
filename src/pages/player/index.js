import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const UserInfo = dynamic(() => import("../../components/Profile/UserInfo.js"));
const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const Protected = dynamic(() => import("../../components/Protected.js"));
import { useSession, getSession } from "next-auth/client";
import { useEffect } from "react";

function Player() {
  const [session, loading] = useSession();

  const Router = useRouter();

  useEffect(() => {
    if (!session) {
      Router.push({ pathname: "/", query: { error: "Not Logged In" } });
    }
  }, []);

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
          <title>Profile</title>
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
        <main className="flex flex-col items-center justify-center flex-1 w-8/12 text-center">
          <UserInfo user={session.user} />
          <Switch />
        </main>
      </div>
    );
  } else {
    return <Protected />;
  }
}

Player.getInitialProps = async (context) => {
  const session = await getSession(context);

  return {
    session,
  };
};

export default Player;
