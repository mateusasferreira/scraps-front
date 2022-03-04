import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Scraper</title>
          <meta name="description" content="Old-school social network to engage with friends and family" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
};

export default Home;
