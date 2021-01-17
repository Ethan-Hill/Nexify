import Head from "next/head";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("../components/Loading.js"));
const HeroTitle = dynamic(() => import("../components/Index/HeroTitle.js"));
const Switch = dynamic(() => import("../components/Switch.js"));

export default function Home({ error }) {
  if (!error) {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Home</title>
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
          <HeroTitle />
          <Switch />
        </main>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Home</title>
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
        <div className="absolute top-0 right-0 p-3">
          <sl-alert
            type="danger"
            closable
            open
            duration="5000"
            className="w-full alert-closable"
          >
            <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
            <strong>A Error Occured!</strong>
            <br />
            {error}
          </sl-alert>
        </div>

        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <HeroTitle />
          <Switch />
        </main>
      </div>
    );
  }
}

export async function getServerSideProps({ query }) {
  const error = query.error;
  if (error) {
    return { props: { error } };
  }
  return { props: { error: null } };
}
