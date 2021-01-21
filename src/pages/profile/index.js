import Head from "next/head";
import dynamic from "next/dynamic";
import { useSession, getSession } from "next-auth/client";

const UserInfo = dynamic(() => import("../../components/Profile/UserInfo.js"));
const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const Error = dynamic(() => import("../../components/Error"));

function Profile({ errorCode, errorMessage }) {
  const [session, loading] = useSession();

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
  } else if (loading) {
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
  }
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
  }

  return { props: {} };
}

export default Profile;
