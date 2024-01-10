import { useEffect } from "react";
import Head from "next/head";
import '../src/app/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function Test_Front({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>Front-end Test</title>
        <meta name="description" content="Front-end Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content="Front-end Test"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'/>
      </Head>

      <Component {...pageProps} />

    </>
  );
}

export default Test_Front;