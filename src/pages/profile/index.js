import Head from "next/head";
import dynamic from "next/dynamic";
import { useSession, getSession } from "next-auth/client";

const UserInfo = dynamic(() => import("../../components/Profile/UserInfo.js"));
const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const Error = dynamic(() => import("../../components/Error"));

function ProfileLayout({children}) {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Profile</title>
        </Head>
		{children}
      </div>
	)
}

function Profile({ errorCode, errorMessage }) {
  const [session, loading] = useSession();

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
  }  
  
  if (loading) {
    return (
        <ProfileLayout>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <Loading />
        </main>
      </ProfileLayout>
    );
  }  
  
  if (session) {
    return (
     <ProfileLayout>
        <main className="flex flex-col items-center justify-center flex-1 w-8/12 text-center">
          <UserInfo user={session.user} />
          <Switch />
        </main>
	 </ProfileLayout>
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
