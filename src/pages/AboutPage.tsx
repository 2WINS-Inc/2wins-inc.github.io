import { Component } from "solid-js";
import { ProfileCard, SectionTitle } from "../components";

const AboutPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl md:text-start md:text-8xl">
          About Us
          <span class="my-10 block h-[1px] bg-onBackground"></span>
        </h1>
      </section>
      {/* Vision Section */}
      <section class="grid grid-cols-1 items-start gap-8 bg-background px-12 py-4 md:px-16 lg:grid-cols-2">
        <div>
          <SectionTitle text="VISION" />
        </div>
        <div class="flex flex-col lg:justify-center">
          <p class="text-md py-4 leading-7 tracking-widest md:mx-8 md:text-xl md:leading-10">
            近年、高度IT人材の不足により、素晴らしいアイデアが日の目を見ずに機会を損失してしまうことが往々にして起こっています。高度な知識を持つメンバーが参画することで、より多くのアイデアが社会を豊かにするはずです。優秀で意欲のある個が積極的に協力し合い、個々の特性が最大限発揮できる組織を作ることで、一人一人が社会に大きな利益をもたらす技術者集団を目指すことを決意しました。高い視座を持つ仲間と共に人類の進歩に貢献します。
          </p>
        </div>
      </section>
      {/* Members Section */}
      <section class="p-16">
        <div>
          <SectionTitle text="MEMBERS" />
        </div>
        <div class="mt-16">
          <div class="animate-on-scroll-in-view animation-delay-200 mx-auto grid grid-cols-1 gap-4 md:w-full md:grid-cols-3 lg:w-3/4 lg:gap-8">
            <ProfileCard
              src="/images/members/ryoto.png"
              alt="小川 椋徹"
              name="小川 椋徹"
              romaji="Ryoto Ogawa"
              title="代表取締役 Co-CEO"
              desciption="株式会社2WINSの代表取締役 Co-CEO"
            />
            <ProfileCard
              src="/images/members/ryota.png"
              alt="吉村 良太"
              name="吉村 良太"
              romaji="Ryota Yoshimura"
              title="代表取締役 Co-CEO"
              desciption="株式会社2WINSの代表取締役 Co-CEO"
            />
            <ProfileCard
              src="/images/members/kai.png"
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
