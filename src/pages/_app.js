import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Drawer from "../components/Drawer/Drawer.js";
import { Provider } from "next-auth/client";

require("typeface-work-sans");

function MyApp({ Component, pageProps }) {
  const toggleDrawer = () => {
    const drawer = document.querySelector(".drawer-placement-left");
    drawer.show();
  };
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <div
          onClick={toggleDrawer}
          className="absolute top-0 left-0 p-3 text-3xl cursor-pointer dark:text-white"
          name="list"
        >
          &#9776;
        </div>
        <Drawer session={pageProps.session} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
