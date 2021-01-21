import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import SiteLayout from "../components/SiteLayout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setOptions, getSession, Provider } from "next-auth/client";
import Head from "next/head";

setOptions({ site: "http://localhost:3000" });

require("typeface-work-sans");

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps, session }) {
  return (
    <Provider session={session}>
      <ThemeProvider attribute="class">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#151c3c" />
          <meta name="description" content="Spotify All In One." />
          <link rel="icon" href="/favicon.ico" />
          <meta name="twitter:card" content="Spotify All In One" />
          <meta name="twitter:url" content="https://nexify.vercel.app" />
          <meta name="twitter:title" content="Nexify" />
          <meta name="twitter:description" content="Spotify All In One" />
          <meta name="twitter:creator" content="@Hilly_Jay" />
          <meta property="og:type" content="https://nexify.vercel.app" />
          <meta property="og:title" content="Nexify" />
          <meta property="og:description" content="Spotify All In One" />
          <meta property="og:site_name" content="Nexify" />
          <meta property="og:url" content="https://nexify.vercel.app" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
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
        <SiteLayout session={session}>
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </Provider>
  );
}

App.getInitialProps = async (context) => {
  const session = await getSession(context);

  return {
    session,
  };
};

export default App;
