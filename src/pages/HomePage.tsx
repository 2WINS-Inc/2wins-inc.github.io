import { Component } from "solid-js";
import { A } from "@solidjs/router";
import {
  ClientHorizontalScrollView,
  NewsCard,
  SectionTitle,
  ContactForm,
} from "../components";

const HomePage: Component = () => {
  return (
    <>
      <div class="fixed left-0 top-0 -z-10">
        <video
          src="/media/hero.mp4"
          muted
          autoplay
          playsinline
          loop
          class="min-w-screen min-h-screen object-cover opacity-40"
        />
      </div>
      {/* Hero Section */}
      <section class="flex h-screen items-center justify-center bg-gradient-to-b from-transparent from-75% to-background p-8 md:justify-start">
        <div>
          <p class="mb-6 text-4xl leading-relaxed md:mx-6 md:mb-8 md:text-7xl md:leading-relaxed lg:text-8xl lg:leading-normal">
            AIと共に
            <br />
            未来を共創
          </p>
          <p class="text-2xl md:mx-6 md:text-5xl lg:text-6xl">
            東大発AIスタートアップ
          </p>
        </div>
      </section>
      {/* Vision Section */}
      <section class="grid grid-cols-1 items-start bg-background p-8 lg:min-h-screen lg:grid-cols-2">
        <div class="p-8">
          <SectionTitle text="VISION" />
          <p class="mb-4 mt-8 px-2 text-2xl leading-8 tracking-widest md:mx-8 md:text-3xl md:leading-10 lg:my-20">
            社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る
          </p>
        </div>
        <div class="flex flex-col px-8 lg:min-h-screen lg:justify-center">
          <p class="text-md mx-2 leading-7 tracking-widest md:mx-8 md:text-xl md:leading-10">
            近年，高度IT人材の不足により，素晴らしいアイデアが日の目を見ずに機会を損失してしまうことが往々にして起こっています．高度な知識を持つメンバーが参画することで，より多くのアイデアが社会を豊かにするはずです．優秀で意欲のある個が積極的に協力し合い，個々の特性が最大限発揮できる組織を作ることで，一人一人が社会に大きな利益をもたらす技術者集団を目指すことを決意しました．高い視座を持つ仲間と共に人類の進歩に貢献します．
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section class="bg-background p-8 lg:min-h-screen">
        <div class="p-8">
          <SectionTitle text="SERVICES" />
        </div>
        <div class="space-y-8 px-2 md:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-4 md:space-y-8 md:p-4">
              <p class="text-center md:text-start">
                <span class="text-3xl md:text-5xl">01</span>
                <span class="ml-4 text-2xl md:ml-8 md:text-4xl">
                  DXソリューション
                </span>
              </p>
              <p class="text-lg leading-8 md:text-xl md:leading-9">
                テクノロジーと戦略の融合を通じてDXをサポートします。課題の明確化からシステムの開発・導入に至るまで、お客様のビジョンを現実にするために全力で取り組みます。
              </p>
              <A
                href="/"
                class="hidden h-fit w-fit border-2 border-onBackground px-16 py-4 lg:block"
              >
                VIEW MORE
              </A>
            </div>
            <div class="flex flex-row justify-center py-6 md:px-4 lg:px-24">
              <div class="h-72 w-full bg-onBackground"></div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-4 md:space-y-8 md:p-4 lg:order-last">
              <p class="text-center md:text-start">
                <span class="text-3xl md:text-5xl">02</span>
                <span class="ml-4 text-2xl md:ml-8 md:text-4xl">AI SaaS</span>
              </p>
              <p class="text-lg leading-8 md:text-xl md:leading-9">
                最新のAI技術を駆使し、各業界の生産性を向上させるSaaSプロダクトを提供しています。我々はソリューションを通じて、お客様の競争力を高め、効率的な業務プロセスを実現します。
              </p>
              <A
                href="/"
                class="hidden h-fit w-fit border-2 border-onBackground px-16 py-4 lg:block"
              >
                VIEW MORE
              </A>
            </div>
            <div class="flex flex-row justify-center py-6 md:px-4 lg:px-24">
              <div class="h-72 w-full bg-onBackground"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section */}
      <section class="overflow-x-hidden bg-background p-8 lg:min-h-screen">
        <div class="grid grid-cols-1 items-start bg-background p-8 lg:grid-cols-2 lg:items-center">
          <SectionTitle text="CLIENTS" />
          <p class="mx-2 mb-4 mt-8 text-2xl leading-8 tracking-widest md:mx-8 md:text-3xl md:leading-10 lg:my-20">
            社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る
          </p>
        </div>
        <ClientHorizontalScrollView
          list={[
            { src: "/images/clients/vector.svg", alt: "株式会社ベクトル" },
            {
              src: "/images/clients/blocksmith.png",
              alt: "株式会社BLOCKSMITH&Co.",
            },
            {
              src: "/images/clients/reazon.png",
              alt: "株式会社レアゾンホールディングス",
            },
            { src: "/images/clients/axell.png", alt: "株式会社アクセル" },
            { src: "/images/clients/bitflyer.png", alt: "株式会社bitFlyer" },
          ]}
        />
      </section>
      {/* Strengths Section */}
      <section class="bg-background p-8 lg:min-h-screen">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="px-8 py-2">
            <SectionTitle text="STRENGTHS" />
          </div>
          <div class="text-md mb-4 space-y-4 px-2 py-4 leading-8 md:px-16 md:leading-9">
            <p class="font-extrabold">
              最新AIへの確かな知見、ブロックチェーン領域での幅広い活動実績、独自のコミュニティという3つのリソースの正の相関が他にはないソリューションの実現可能性を高めます。
            </p>
            <p>
              2WINSは最新AIを取り入れた「DX ソリューション事業」「AI
              Saas事業」に加え、ブロックチェーン領域での活動や、ソーシャルキャピタル活動を行い、2WINSにしかないエコシステムを形成しています。
            </p>
          </div>
        </div>
        <div class="space-y-8 px-2 md:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-4 md:space-y-8 md:p-4">
              <p class="text-center md:text-start">
                <span class="text-3xl md:text-5xl">01</span>
                <span class="ml-4 text-2xl md:ml-8 md:text-4xl">
                  DXソリューション
                </span>
              </p>
              <p class="text-lg leading-8 md:text-xl md:leading-9">
                いくら岡田さんへ命令文芸突然批評が進んまし火事この女あなたか懊悩とってご鑑定ませですでございば、こんな時間は私か私立鼻を待っば、岡田さんのので先生のそこの近頃同お話としからそれ自分にお運動にするようにとうていご解釈を解らなですば、ついにしかるに発表に申し上げなているた事をしだろた。
              </p>
              <A
                href="/"
                class="hidden h-fit w-fit border-2 border-onBackground px-16 py-4 lg:block"
              >
                VIEW MORE
              </A>
            </div>
            <div class="flex flex-row justify-center py-6 md:px-4 lg:px-24">
              <div class="h-72 w-full bg-onBackground"></div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-4 md:space-y-8 md:p-4 lg:order-last">
              <p class="text-center md:text-start">
                <span class="text-3xl md:text-5xl">02</span>
                <span class="ml-4 text-2xl md:ml-8 md:text-4xl">AI SaaS</span>
              </p>
              <p class="text-lg leading-8 md:text-xl md:leading-9">
                いくら岡田さんへ命令文芸突然批評が進んまし火事この女あなたか懊悩とってご鑑定ませですでございば、こんな時間は私か私立鼻を待っば、岡田さんのので先生のそこの近頃同お話としからそれ自分にお運動にするようにとうていご解釈を解らなですば、ついにしかるに発表に申し上げなているた事をしだろた。
              </p>
              <A
                href="/"
                class="hidden h-fit w-fit border-2 border-onBackground px-16 py-4 lg:block"
              >
                VIEW MORE
              </A>
            </div>
            <div class="flex flex-row justify-center py-6 md:px-4 lg:px-24">
              <div class="h-72 w-full bg-onBackground"></div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section class="bg-background p-8">
        <div class="flex flex-row items-center justify-center p-8 md:justify-between">
          <SectionTitle text="NEWS" />
          <A
            href="/"
            class="mx-8 hidden h-fit w-fit border-2 border-onBackground px-16 py-4 md:block lg:block"
          >
            MORE NEWS
          </A>
        </div>
        <div class="grid grid-cols-1 gap-8 px-2 py-8 md:grid-cols-2 md:px-16 lg:grid-cols-4">
          <NewsCard
            link=""
            thumbnail="/images/clients/vector.svg"
            title="社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る"
            avatar="/images/clients/vector.svg"
            author="Testくん"
            date="2023.09.08"
          />
          <NewsCard
            link=""
            thumbnail="/images/clients/vector.svg"
            title="社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る"
            avatar="/images/clients/vector.svg"
            author="Testくん"
            date="2023.09.08"
          />
          <NewsCard
            link=""
            thumbnail="/images/clients/vector.svg"
            title="社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る"
            avatar="/images/clients/vector.svg"
            author="Testくん"
            date="2023.09.08"
          />
          <NewsCard
            link=""
            thumbnail="/images/clients/vector.svg"
            title="社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る"
            avatar="/images/clients/vector.svg"
            author="Testくん"
            date="2023.09.08"
          />
        </div>
      </section>
      {/* Contact Section */}
      <section class="grid grid-cols-1 bg-background p-8 lg:min-h-screen lg:grid-cols-2">
        <div class="p-2 md:p-8">
          <SectionTitle text="CONTACT" />
          <p class="mb-4 mt-6 leading-6 tracking-widest md:mx-8 md:mt-10 md:px-2 md:text-xl md:leading-8 lg:my-20 lg:text-3xl lg:leading-10">
            <span class="mb-2 block">Location</span>
            <span class="block lg:ml-4">
              東京都渋谷区宇田川町 1-12 パークコート渋谷 ザ タワー 28F
            </span>
          </p>
          <p class="mb-4 mt-6 leading-6 tracking-widest md:mx-8 md:px-2 md:text-xl md:leading-8 lg:my-20 lg:text-3xl lg:leading-10">
            <span class="mb-2 block">Mail</span>
            <span class="block lg:ml-4">info@2winsinc.com</span>
          </p>
          <p class="mb-4 mt-6 leading-6 tracking-widest md:mx-8 md:px-2 md:text-xl md:leading-8 lg:my-20 lg:text-3xl lg:leading-10">
            <span class="mb-2 block">Phone</span>
            <span class="block lg:ml-4">000-0000-0000</span>
          </p>
        </div>
        <div class="rounded-3xl bg-background md:mx-16 lg:mr-16">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
