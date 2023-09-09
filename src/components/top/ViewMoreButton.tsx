import { Component, mergeProps } from "solid-js";
import { A } from "@solidjs/router";

const ViewMoreButton: Component<{
  href: string;
  text?: string;
  show?: string;
}> = (props) => {
  const merged = mergeProps({ text: "VIEW MORE", show: "lg" }, props);

  return (
    <A
      href={merged.href}
      class="h-fit w-fit border-2 border-onBackground bg-gradient-to-l from-background from-50% to-onBackground to-50% bg-[size:200%] bg-right px-16 py-4 transition-all duration-300 ease-in-out hover:bg-left hover:text-background"
      classList={{
        "hidden lg:block": merged.show === "lg",
        "hidden md:block": merged.show === "md",
        block: merged.show === "all",
      }}
    >
      {merged.text}
    </A>
  );
};

export default ViewMoreButton;
