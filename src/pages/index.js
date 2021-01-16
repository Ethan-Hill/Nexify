import Head from "next/head";
import dynamic from "next/dynamic";
const HeroTitle = dynamic(() => import("../components/Index/HeroTitle.js"));
const Switch = dynamic(() => import("../components/Switch.js"));

export default function Home() {
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
}
