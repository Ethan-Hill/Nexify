import Head from "next/head";
import dynamic from "next/dynamic";
const HeroTitle = dynamic(() => import("../Index/HeroTitle.js"));
const Switch = dynamic(() => import("../Switch.js"));

export default function Normal() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
        <Head>
          <title>Home</title>
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <HeroTitle />
          <Switch />
        </main>
      </div>
    </div>
  );
}
