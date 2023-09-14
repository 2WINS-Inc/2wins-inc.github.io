import { Accessor, Component, For, createResource } from "solid-js";
import {
  ClientHorizontalScrollView,
  NewsCard,
  SectionTitle,
  ContactForm,
  ViewMoreButton,
  ItemTitle,
  ClickableImage,
} from "../components";

type Client = {
  src: string;
  alt: string;
};

const fetchClients: () => Promise<Client[]> = async () => {
  const clients: Client[] = [
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
  ] as Client[];
  return clients;
};

type News = {
  link: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
};

const fetchNews: () => Promise<News[]> = async () => {
  const news: News[] = [
    {
      link: "/news/1",
      thumbnail: "/images/top/community.jpg",
      title:
        "社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る",
      author: "Testくん",
      date: "2023.09.08",
    },
    {
      link: "/news/2",
      thumbnail: "/images/top/community.jpg",
      title:
        "社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る",
      author: "Testくん",
      date: "2023.09.08",
    },
    {
      link: "/news/3",
      thumbnail: "/images/top/community.jpg",
      title:
        "社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る",
      author: "Testくん",
      date: "2023.09.08",
    },
    {
      link: "/news/4",
      thumbnail: "/images/top/community.jpg",
      title:
        "社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る",
      author: "Testくん",
      date: "2023.09.08",
    },
  ] as News[];
  return news;
};

const HomePage: Component = () => {
  const [clients] = createResource(fetchClients);
  const [newsList] = createResource(fetchNews);

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
      {/* Hero Section */}
      <section class="flex h-screen items-center justify-center bg-gradient-to-b from-transparent from-75% to-background md:justify-start md:p-8">
        <div>
          <p class="mb-10 text-5xl font-semibold leading-loose tracking-[0.5rem] md:mx-6 md:mb-16 md:text-8xl md:leading-normal md:tracking-[1rem]">
            <span class="md:ml-1">AIと共に</span>
            <br />
            未来を共創
          </p>
          <p class="text-2xl font-medium tracking-[0.25rem] md:mx-6 md:text-5xl md:tracking-[0.5rem] lg:text-6xl">
            東大発AIスタートアップ
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section class="bg-background px-8 py-4 md:py-8">
        <div class="py-8 md:px-8">
          <SectionTitle text="SERVICES" />
        </div>
        <div class="px-4 md:space-y-8 md:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-8 md:space-y-10 md:p-4">
              <ItemTitle number="01" title="DXソリューション" />
              <p class="text-justify text-base font-normal leading-8 tracking-widest md:text-xl md:leading-10">
                テクノロジーと戦略の融合を通じてDXをサポートします。課題の明確化からシステムの開発・導入に至るまで、お客様のビジョンを現実にするために全力で取り組みます。
              </p>
              <ViewMoreButton href="/services/dx" />
            </div>
            <ClickableImage
              href="/services/dx"
              src="/images/top/dx.jpg"
              alt="DX"
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-8 md:space-y-10 md:p-4 lg:order-last">
              <ItemTitle number="02" title="AI SaaSプロダクト" />
              <p class="text-justify text-base font-normal leading-8 tracking-widest md:text-xl md:leading-10">
                先端AI技術を駆使し、各業界の生産性を向上させるSaaSプロダクトを提供しています。我々はソリューションを通じ、お客様の競争力を高め、効率的な業務プロセスを実現します。
              </p>
              <ViewMoreButton href="/services/ai" />
            </div>
            <ClickableImage
              href="/services/ai"
              src="/images/top/ai.jpg"
              alt="AI"
            />
          </div>
        </div>
      </section>
      {/* Clients Section */}
      <section class="overflow-x-hidden bg-background px-8 py-4 md:py-8">
        <div class="grid grid-cols-1 space-y-4 bg-background md:space-y-12 md:px-8 md:py-8 lg:grid-cols-2 lg:space-y-0">
          <SectionTitle text="CLIENTS" />
          <p class="px-4 text-justify text-base font-normal leading-8 tracking-widest md:px-8 md:text-xl md:leading-10 lg:pl-4">
            社会を進化させるシステムを創る社会を進化させるシステムを創る社会を進化させるシステムを創る
          </p>
        </div>
        <ClientHorizontalScrollView list={clients()} />
      </section>
      {/* Strengths Section */}
      <section class="bg-background p-8">
        <div class="grid grid-cols-1 space-y-4 bg-background md:space-y-12 md:px-8 md:py-8 lg:grid-cols-2 lg:space-y-0">
          <SectionTitle text="STRENGTHS" />
          <div class="space-y-4 px-4 text-justify text-base font-normal leading-8 tracking-widest md:px-8 md:text-xl md:leading-10 lg:pl-4">
            <p class="font-bold">
              最新AIへの確かな知見、ブロックチェーン領域での幅広い活動実績、独自のコミュニティという3つのリソースの正の相関が他にはないソリューションの実現可能性を高めます。
            </p>
            <p>
              2WINSは最新AIを取り入れた「DX ソリューション事業」「AI
              Saas事業」に加え、ブロックチェーン領域での活動や、ソーシャルキャピタル活動を行い、2WINSにしかないエコシステムを形成しています。
            </p>
          </div>
        </div>
        <div class="px-4 pt-8 md:space-y-8 md:px-12 md:pb-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-8 md:space-y-10 md:p-4">
              <ItemTitle number="01" title="ブロックチェーン事業" />
              <p class="text-justify text-base font-normal leading-8 tracking-widest md:text-xl md:leading-10">
                2WINSはAIとブロックチェーンを融合させる未来のテクノロジーに向けて前進しています。AIは処理を自動化しますが、ブロックチェーンは処理を証明し、信頼性を高めます。両者を組み合わせた革新的なソリューションモデルの先駆けを目指していきます。
              </p>
              <ViewMoreButton href="/strengths" />
            </div>
            <ClickableImage
              href="/strengths"
              src="/images/top/blockchain.jpg"
              alt="Blockchain"
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-8 md:space-y-10 md:p-4 lg:order-last">
              <ItemTitle number="02" title="ソーシャルキャピタル事業" />
              <p class="text-justify text-base font-normal leading-8 tracking-widest md:text-xl md:leading-10">
                ソーシャルキャピタルを中心に据え、社内外の仲間たちと共に学び合い、協力し、新たな価値を生み出すためのプラットフォームを積極的に構築しています。私たちのコミュニティは、共に成長し、未来を創造する場所です。
              </p>
              <ViewMoreButton href="/strengths" />
            </div>
            <ClickableImage
              href="/strengths"
              src="/images/top/community.jpg"
              alt="Community"
            />
          </div>
        </div>
      </section>
      {/* News Section */}
      <section class="bg-background p-8">
        <div class="flex flex-row items-center justify-center p-8 md:justify-between">
          <SectionTitle text="NEWS" />
          <div class="hidden md:mx-8 md:block">
            <ViewMoreButton href="/news" text="MORE NEWS" show="md" />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:px-16 lg:grid-cols-4">
          <For each={newsList()} fallback={<></>}>
            {(news: News, _: Accessor<number>) => (
              <NewsCard
                link={news.link}
                thumbnail={news.thumbnail}
                title={news.title}
                author={news.author}
                date={news.date}
              />
            )}
          </For>
        </div>
        <div class="mx-auto my-2 block w-fit md:my-0 md:hidden">
          <ViewMoreButton href="/news" text="MORE NEWS" show="all" />
        </div>
      </section>
      {/* Contact Section */}
      <section
        class="grid grid-cols-1 space-y-8 bg-background p-8 lg:min-h-screen lg:grid-cols-2 lg:space-y-0"
        id="contact"
      >
        <div class="space-y-8 md:px-8 lg:space-y-20">
          <SectionTitle text="CONTACT" />
          <div class="space-y-6 px-4 leading-8 tracking-widest md:px-0 md:text-xl md:leading-10 lg:space-y-12 lg:text-3xl lg:leading-10">
            <div class="space-y-0.5 md:mx-10 lg:space-y-4">
              <p class="font-semibold">Location</p>
              <p class="lg:ml-4">
                東京都渋谷区宇田川町 1-12 パークコート渋谷 ザ タワー 28F
              </p>
            </div>
            <div class="space-y-0.5 md:mx-10 lg:space-y-4">
              <p class="font-semibold">Mail</p>
              <p class="lg:ml-4">info@2winsinc.com</p>
            </div>
            <div class="space-y-0.5 md:mx-10 lg:space-y-4">
              <p class="font-semibold">Phone</p>
              <p class="lg:ml-4">000-0000-0000</p>
            </div>
          </div>
        </div>
        <div class="mx-2 rounded-3xl bg-background md:mx-16">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
