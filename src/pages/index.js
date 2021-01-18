import Head from "next/head";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("../components/Loading.js"));
const Normal = dynamic(() => import("../components/Home/Normal.js"));
const Success = dynamic(() => import("../components/Home/Success.js"));
const Error = dynamic(() => import("../components/Home/Error.js"));

export default function Home({ error, success }) {
  if (!error && !success) {
    return <Normal />;
  } else if (success) {
    return <Success message={success} />;
  } else {
    return <Error message={error} />;
  }
}

export async function getServerSideProps({ query }) {
  const { error, success } = query;
  if (error) {
    return { props: { error } };
  }
  if (success) {
    return { props: { success } };
  }
  return { props: { error: null, success: null } };
}
