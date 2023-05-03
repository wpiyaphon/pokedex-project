import Head from "next/head";
import Navbar from "@/components/Navbar";
import pokedexImage from "@/assets/pokedex_image.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar currentPage={"Home"} />
      <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
        <div className="grid space-y-5 sm:grid-cols-2 sm:gap-6">
          <div className="col-span-1">
            <div className="text-center text-4xl font-bold leading-snug text-white sm:text-left sm:text-6xl">
              PokeDex
              <br />
              For Beginners
            </div>
            <div className="mt-4 text-center text-xl font-light leading-relaxed text-white sm:mt-10 sm:block sm:text-left">
              This Pokedex is a simplified recorder containing pokemon, items,
              and berries information that can be accessed on the website
            </div>
            <div className="sm:hidden">
              <img
                className="mx-auto mb-2 mt-8 w-5/6"
                src={pokedexImage.src}
                alt="Pokedex image"
              />
            </div>
            <div className="mt-12 flex justify-center sm:justify-start">
              <button
                type="button"
                className="bg-gradient-to-r from-[#FF3D00] to-[#721701] px-16 py-6 text-lg font-semibold sm:px-12 sm:py-4 text-white hover:opacity-80"
              >
                <span className="text-2xl sm:text-xl">Get Started</span>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative -mt-8 pl-3">
              <img
                className="absolute hidden md:block"
                src={pokedexImage.src}
                alt="Pokedex image"
              />
            </div>
          </div>
          <div className="col-span-1 hidden space-x-24 pt-6 text-white md:flex">
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
    </div>
  );
}
