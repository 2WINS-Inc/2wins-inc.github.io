import { Component } from "solid-js";
import { SolutionCard } from "../components";

const SocialCapitalPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl font-semibold leading-[4.5rem] tracking-widest md:text-start md:text-8xl md:leading-[7rem]">
          Social Capital
          <span class="my-10 block h-1 bg-onBackground"></span>
        </h1>
      </section>
      <section class="px-12 pb-16 md:px-16">
        <p class="text-justify text-lg font-normal leading-8 tracking-widest md:mx-8 md:text-xl md:leading-10">
          2WINSは、日本が世界に誇る「本郷バレー」のエコシステムの実現を目指し活動しています。中でも最も重要な「人材」にフォーカスし、日本社会を支える人材のプラットフォーム構築を目指しています。
        </p>
        <div class="mt-10 grid gap-8 md:mx-8 lg:grid-cols-2">
          <SolutionCard
            src="/images/services/community.jpg"
            alt=""
            title="本郷web3バレー"
            body=""
          />
          <SolutionCard
            src="/images/services/community.jpg"
            alt=""
            title="東大メシ"
            body=""
          />
        </div>
      </section>
    </>
  );
};

export default SocialCapitalPage;
