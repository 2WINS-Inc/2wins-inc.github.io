import { Component } from "solid-js";
import { ViewMoreButton } from "../components";
import { A } from "@solidjs/router";

const ThanksPage: Component = () => {
  return (
    <>
      <div class="fixed left-0 top-0 -z-20">
        <video
          src="/media/hero.mp4"
          muted
          autoplay
          playsinline
          loop
          class="min-w-screen min-h-screen object-cover opacity-40"
        />
      </div>
      <div class="flex min-h-screen flex-col items-center justify-center">
        <p class="my-6 text-center text-2xl font-semibold leading-[4rem] tracking-wide md:my-10 md:text-5xl md:leading-[6rem] lg:text-6xl lg:leading-[6rem]">
          お問い合わせいただき
          <br />
          ありがとうございます
        </p>
        <div class="mt-4">
          <A
            href="/"
            class="
        block h-fit w-fit transform-gpu
        border-2 border-onBackground bg-gradient-to-l from-background from-50% to-onBackground to-50% bg-[size:200%] bg-right 
        px-8 py-4 text-sm font-medium tracking-[0.25rem] transition-all duration-500 ease-in-out hover:bg-left hover:text-background md:px-16 md:text-lg
      "
          >
            ホームに戻る
          </A>
        </div>
      </div>
    </>
  );
};

export default ThanksPage;
