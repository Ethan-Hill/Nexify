import Head from "next/head";
import UserInfo from "../../components/profile/UserInfo";
import Switch from "../../components/Switch";
import Loading from "../../components/Loading";
import Logout from "../../components/Auth/Logout";
import Protected from "../../components/Protected";
import { useSession } from "next-auth/client";

export default function Profile() {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
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
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <Loading />
        </main>
      </div>
    );
  } else if (session) {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
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
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <UserInfo user={session.user} />
          <Logout />
          <Switch />
        </main>
      </div>
    );
  } else {
    return <Protected />;
  }
}
