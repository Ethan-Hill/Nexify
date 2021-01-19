import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
