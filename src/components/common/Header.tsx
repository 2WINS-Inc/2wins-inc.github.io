import { Accessor, Component, createSignal } from "solid-js";
import { A } from "@solidjs/router";

const Header: Component = () => {
  const [open, setOpen] = createSignal<boolean>(false);
  const toggle = () => setOpen((open) => !open);
  const close = () => setOpen((_) => false);

  const props = {
    show: open,
    onclick: close,
  };

  return (
    <header class="fixed left-0 top-0 z-50 w-screen">
      <div class="flex flex-row items-center justify-between px-6 py-6 md:px-10">
        <A
          href="/"
          class="z-20 p-2 text-2xl font-extralight transition-all duration-500 md:text-3xl"
          classList={{
            "text-onBackground delay-700": !open(),
            "text-background": open(),
          }}
          onclick={close}
        >
          2WINS, Inc.
        </A>
        <div class="menu-toggle group" onClick={toggle}>
          <p
            class="menu-button"
            classList={{
              "bg-onBackground group-hover:before:bg-onBackground group-hover:after:bg-onBackground":
                !open(),
              "bg-transparent before:top-0 before:rotate-45 before:bg-background after:bottom-0 after:-rotate-45 after:bg-background":
                open(),
            }}
          ></p>
        </div>
      </div>
      <nav
        class="fixed left-0 top-0 h-screen w-screen transition-all duration-1000 ease-in-out"
        classList={{
          "opacity-0 -translate-x-full delay-700": !open(),
          "opacity-100 translate-x-0": open(),
        }}
      >
        <div class="h-full w-full bg-onBackground text-background">
          <ul
            class="hide-scrollbar grid h-full w-full grid-rows-6 px-12 pb-32 pt-48 md:px-32 lg:grid-flow-col lg:grid-rows-3 lg:gap-16 lg:pt-36"
            classList={{
              "delay-1000 invisible": !open(),
            }}
          >
            <HeaderLink href="/about" text="About Us" {...props} />
            <HeaderLink href="/services/dx" text="DX Solutions" {...props} />
            <HeaderLink href="/services/ai" text="AI Solutions" {...props} />
            <HeaderLink href="/strengths" text="Strengths" {...props} />
            <HeaderLink href="/news" text="News" {...props} />
            <HeaderLink href="/#contact" text="Contact" {...props} />
          </ul>
        </div>
      </nav>
    </header>
  );
};

const HeaderLink: Component<{
  href: string;
  text: string;
  show: Accessor<boolean>;
  onclick: () => void;
}> = (props) => {
  return (
    <li>
      <A
        href={props.href}
        class="block whitespace-nowrap text-5xl hover:translate-x-8 md:text-[80px]"
        classList={{
          "opacity-0 normal-transition cursor-default": !props.show(),
          "opacity-100 delayed-opacity-transition": props.show(),
        }}
        onclick={props.show() ? props.onclick : (e) => e.preventDefault()}
      >
        {props.text}
      </A>
    </li>
  );
};

export default Header;
