import { Component } from "solid-js";

const ErrorPage: Component = () => {
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
          Error!
        </p>
        <p class="my-3 text-xl font-medium tracking-wider md:my-8 md:text-3xl lg:text-4xl">
          ページの読み込みに失敗しました。
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
