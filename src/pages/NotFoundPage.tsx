import { A } from "@solidjs/router";
import { Component } from "solid-js";

const NotFoundPage: Component = () => {
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
        <p class="my-6 text-4xl font-semibold tracking-wide md:my-10 md:text-7xl lg:text-8xl">
          404 Not Found
        </p>
        <p class="my-3 text-xl font-medium tracking-wider md:my-8 md:text-3xl lg:text-4xl">
          ご指定のページが見つかりません
        </p>
        <div class="mt-8">
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

export default NotFoundPage;
