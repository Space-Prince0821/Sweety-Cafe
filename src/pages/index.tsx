import Head from "next/head";
import { type NextPage } from "next";
import { About } from "~/components/About";
// import Link from "next/link";
// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Sweety Cafe</title>
        <meta name="description" content="Sweety Cafe Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen relative">
        <About />
      </main>
    </>
  );
}

export default Home;
