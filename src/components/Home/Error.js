import Head from "next/head";
import dynamic from "next/dynamic";
const HeroTitle = dynamic(() => import("../Index/HeroTitle.js"));
const Switch = dynamic(() => import("../Switch.js"));

export default function Error({ message }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen dark:bg-backgroundBlue bg-backgroundWhite dark:text-white">
      <Head>
        <title>Home</title>
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
          {message}
        </sl-alert>
      </div>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <HeroTitle />
        <Switch />
      </main>
    </div>
  );
}
