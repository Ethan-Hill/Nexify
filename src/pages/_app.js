import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("../components/Drawer/Drawer.js"));
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import routes from "../routes";
import {
  setOptions,
  getSession,
  Provider as AuthProvider,
} from "next-auth/client";
import Head from "next/head";

setOptions({ site: "http://localhost:3000" });

require("typeface-work-sans");

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps, session }) {
  const newRoutes = routes.map((route) => {
    return route.path;
  });

  const toggleDrawer = () => {
    const drawer = document.querySelector(".drawer-placement-left");
    drawer.show();
  };
  const Router = useRouter();

  if (newRoutes.includes(Router.pathname)) {
    return (
      <AuthProvider
        session={session}
        options={{ site: "http://localhost:3000" }}
      >
        <ThemeProvider attribute="class">
          <div
            onClick={toggleDrawer}
            className="absolute top-0 left-0 p-3 text-3xl cursor-pointer dark:text-white"
            name="list"
          >
            &#9776;
          </div>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#151c3c" />
            <meta name="description" content="Spotify All In One." />
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
          <Drawer session={session} />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    );
  } else {
    return (
      <ThemeProvider attribute="class">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#151c3c" />
          <meta name="description" content="Spotify All In One." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

App.getInitialProps = async (context) => {
  const session = await getSession(context);

  return {
    session,
  };
};

export default App;
