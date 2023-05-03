import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Pokedex() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar currentPage={"Pokedex"} />
    </div>
  );
}
