import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

interface NavbarProps {
  currentPage: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const navigation = [
    { name: "Home", href: "#", current: currentPage === "Home" },
    { name: "Pokedex", href: "#", current: currentPage === "Pokedex" },
    { name: "Repository", href: "https://github.com/wpiyaphon/pokedex-project", current: false },
  ];

  function classNames(...classes: string[]) {
    // Use filter(Boolean) to prevent null or undefined values in the array.
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto pt-4 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logo.src}
                    alt="Pokedex logo"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={logo.src}
                    alt="Pokedex logo"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-regular leading-none mt-1 text-white">
                      Pokedex
                    </div>
                    <div className="text-2xl font-bold text-red-main">
                      Project
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block sm:justify-end">
                  <div className="flex space-x-4 mt-1.5">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-secondary text-white"
                            : "text-gray-300 hover:bg-gray-main hover:text-white",
                          "rounded-md px-3 py-3 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        target={item.name === "Repository" ? "_blank" : "_self"}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-secondary text-white"
                      : "text-gray-300 hover:bg-gray-main hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  target={item.name === "Repository" ? "_blank" : "_self"}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
