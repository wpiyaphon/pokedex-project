import Head from "next/head";
import Navbar from "@/components/Navbar";
import pokedexImage from "@/assets/pokedex_image.png";
import gitHubImage from "@/assets/gitHub_image.png";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-screen bg-gradient-to-br from-[#474747] to-[#222222]">
      <Head>
        <title>Pokedex Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar currentPage={"Home"} />
      <div className="mx-auto max-w-7xl px-2 pt-10 sm:px-6 lg:px-8">
        <div className="grid space-y-5 sm:grid-cols-2 sm:gap-4">
          <div className="col-span-1">
            <div className="text-center text-5xl font-bold leading-snug text-white sm:text-left sm:text-6xl">
              PokeDex
              <br />
              For Beginners
            </div>
            <div className="mt-10 text-center text-xl font-light leading-relaxed text-white sm:text-left">
              This Pokedex is a simplified recorder containing pokemon, items,
              and berries information that can be accessed on the website
            </div>
            <div className="mt-12 flex justify-center sm:justify-start">
              <button
                type="button"
                className="bg-gradient-to-r from-[#FF3D00] to-[#721701] px-12 py-4 text-lg font-semibold text-white hover:opacity-80"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <img
              className="mx-auto -mt-7 w-5/6 max-w-md"
              src={pokedexImage.src}
              alt="Pokedex image"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-4">
          <div className="col-span-1 flex justify-start space-x-24 text-white">
            <div className="text-4xl">
              <span className="font-bold">1k</span>
              <span className="text-red-main">+</span>
              <br />
              <div className="mt-2 text-base leading-5">
                Available
                <br />
                Pokemon
              </div>
            </div>
            <div className="text-4xl">
              <span className="font-bold">2k</span>
              <span className="text-red-main">+</span>
              <br />
              <div className="mt-2 text-base leading-5">
                Accessible
                <br />
                Items
              </div>
            </div>
            <div className="text-4xl">
              <span className="font-bold">50</span>
              <span className="text-red-main">+</span>
              <br />
              <div className="mt-2 text-base leading-5">
                Obtainable
                <br />
                Berries
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-1/5 w-1/2 bg-red-main px-6 py-4 sm:right-0 sm:bottom-0 sm:block">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <img
              className="mx-auto my-auto w-11/12"
              src={gitHubImage.src}
              alt="GitHub image"
            />
          </div>
          <div className="col-span-1">GitHub</div>
        </div>
      </div>
    </div>
  );
}
