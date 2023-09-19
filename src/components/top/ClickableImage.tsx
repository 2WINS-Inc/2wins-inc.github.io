import { Component } from "solid-js";
import { A } from "@solidjs/router";

const ClickableImage: Component<{ href: string; src: string; alt: string }> = (
  props,
) => {
  return (
    <div class="flex flex-row justify-center overflow-hidden py-6 md:px-4 lg:px-24">
      <div class="group aspect-[4/3] w-full overflow-hidden rounded-sm">
        <A href={props.href}>
          <img
            src={props.src}
            alt={props.alt}
            class="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:cursor-pointer"
          />
        </A>
      </div>
    </div>
  );
};

export default ClickableImage;
