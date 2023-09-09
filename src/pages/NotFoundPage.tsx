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
        <p class="my-6 text-4xl md:my-10 md:text-7xl lg:text-8xl">
          404 Not Found
        </p>
        <p class="my-3 text-xl md:my-8 md:text-3xl lg:text-4xl">
          ご指定のページが見つかりません
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
