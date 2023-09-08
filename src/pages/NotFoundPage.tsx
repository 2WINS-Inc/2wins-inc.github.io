import { Component } from "solid-js";

const NotFoundPage: Component = () => {
  return (
    <>
      <div class="fixed left-0 top-0 -z-10">
        <video
          src="./assets/media/hero.mp4"
          muted
          autoplay
          playsinline
          loop
          class="min-w-screen min-h-screen object-cover opacity-40"
        />
      </div>
      <div class="flex min-h-screen flex-col items-center justify-center">
        <p class="my-10 text-8xl">404 Not Found</p>
        <p class="my-8 text-4xl">ご指定のページが見つかりません</p>
      </div>
    </>
  );
};

export default NotFoundPage;
