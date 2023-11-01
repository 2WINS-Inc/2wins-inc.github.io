import { Component } from "solid-js";
import { ProfileCard, SectionTitle } from "../components";

const AboutPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl font-semibold leading-[4.5rem] tracking-widest md:text-start md:text-8xl md:leading-[7rem]">
          About Us
          <span class="my-10 block h-1 bg-onBackground"></span>
        </h1>
      </section>
      {/* Vision Section */}
      <section class="grid grid-cols-1 items-start gap-8 bg-background px-12 py-4 md:px-16 lg:grid-cols-2">
        <div>
          <SectionTitle text="VISION" />
        </div>
        <div class="flex flex-col lg:justify-center">
          <p class="text-md py-4 text-justify leading-8 tracking-widest md:mx-8 md:text-xl md:leading-10">
            私たちは、アカデミアの最先端で得たAI技術を用いて、世の中に散見される課題を一つずつ解決していきたいという思いで2WINSを設立しました。
            <br /><br/>
            生成AI、自然言語処理、画像処理を始めとする様々なDeepLearningの技術を根本から追求してきた我々だからこそ、真に最適化されたソリューションを提供できると確信しています。
          </p>
        </div>
      </section>
      {/* Members Section */}
      <section class="p-16">
        <div>
          <SectionTitle text="MEMBERS" />
        </div>
        <div class="mt-24">
          <div class="animate-on-scroll-in-view animation-delay-200 mx-auto grid grid-cols-1 gap-4 md:w-full md:grid-cols-2 lg:w-3/4 lg:grid-cols-3 lg:gap-8">
            <ProfileCard
              src="/images/members/ryoto.webp"
              alt="小川 椋徹"
              name="小川 椋徹"
              romaji="Ryoto Ogawa"
              title="代表取締役 Co-CEO"
              desciption="株式会社2WINSの代表取締役 Co-CEO"
            />
            <ProfileCard
              src="/images/members/ryota.webp"
              alt="吉村 良太"
              name="吉村 良太"
              romaji="Ryota Yoshimura"
              title="代表取締役 Co-CEO"
              desciption="株式会社2WINSの代表取締役 Co-CEO"
            />
            <ProfileCard
              src="/images/members/kai.webp"
              alt="王 凱"
              name="王 凱"
              romaji="Kai Wang"
              title="最高技術責任者 CTO"
              desciption="株式会社2WINSの最高技術責任者 CTO"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
