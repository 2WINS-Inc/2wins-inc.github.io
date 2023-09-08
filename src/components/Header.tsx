import { Component, createSignal } from "solid-js";
import { A } from "@solidjs/router";

const Header: Component = () => {
  const [open, setOpen] = createSignal<boolean>(false);

  return (
    <header class="fixed left-0 top-0 w-screen">
      <div class="flex flex-row items-center justify-between px-6 py-6 md:px-10">
        <A
          href="/"
          class="z-20 p-2 text-2xl font-extralight transition-all duration-500 md:text-3xl"
          classList={{
            "text-background": open(),
            "text-onBackground": !open(),
          }}
        >
          2WINS, Inc.
        </A>
        <div class="menu-toggle group" onClick={() => setOpen((open) => !open)}>
          <p
            class="menu-button"
            classList={{
              "bg-transparent before:top-0 before:rotate-45 before:bg-background after:bottom-0 after:-rotate-45 after:bg-background":
                open(),
              "bg-onBackground group-hover:before:bg-onBackground group-hover:after:bg-onBackground":
                !open(),
            }}
          ></p>
        </div>
      </div>
      <nav
        class="fixed left-0 top-0 h-screen transition-all duration-1000 ease-in-out"
        classList={{
          "opacity-0 w-0": !open(),
          "opacity-100 w-screen": open(),
        }}
      >
        <div class="h-full w-full bg-onBackground text-background">
          <ul class="hide-scrollbar flex h-full w-full flex-col justify-center space-y-16 overflow-y-auto py-32">
            <li class="px-12 md:px-32">
              <A
                href="/"
                class="block whitespace-nowrap text-6xl transition-all duration-700 hover:ml-8 md:text-8xl"
                classList={{
                  "opacity-0": !open(),
                  "opacity-100": open(),
                }}
              >
                About Us
              </A>
            </li>
            <li class="px-12 md:px-32">
              <A
                href="/"
                class="block whitespace-nowrap text-6xl transition-all duration-700 hover:ml-8 md:text-8xl"
                classList={{
                  "opacity-0": !open(),
                  "opacity-100": open(),
                }}
              >
                Services
              </A>
            </li>
            <li class="px-12 md:px-32">
              <A
                href="/"
                class="block whitespace-nowrap text-6xl transition-all duration-700 hover:ml-8 md:text-8xl"
                classList={{
                  "opacity-0": !open(),
                  "opacity-100": open(),
                }}
              >
                Contact
              </A>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
