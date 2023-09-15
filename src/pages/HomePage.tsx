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
import axios from "axios";

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
  const url =
    "https://stingy-gray-3c3.notion.site/2WINS-HP-News-1af93e77ff254e059bd77e3369e55c15";

  try {
    const { data } = await axios.get(url, {
      // headers: {
      //   "Access-Control-Allow-Origin": "http://localhost:3000",
      //   "Access-Control-Allow-Headers": "Content-Type",
      // },
    });
    // const $ = load(data);

    // $(".notion-table-view-row", data).each((index, element) => {
    //   const title = $(element)
    //     .find("")
    //     .text()
    //     .replace(/(\r\n|\n|\r|)/gm, "")
    //     .trim();

    //   console.log(title);
    // });
    return [] as News[];
  } catch {
    return [
      {
        link: "https://stingy-gray-3c3.notion.site/Blockchain-Hackathon-for-Students-1fbf37f067dc4b009f0e37e19ee7b22d",
        thumbnail:
          "https://stingy-gray-3c3.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa98cacb9-e381-4d2c-a251-17897a82375c%2Fade2f5ae-5a67-4794-9e8b-538c3c6bf8ca%2Fblockchain.jpg?id=1fbf37f0-67dc-4b00-9f0e-37e19ee7b22d&table=block&spaceId=a98cacb9-e381-4d2c-a251-17897a82375c&width=600&userId=&cache=v2",
        title: "Blockchain Hackathon for Studentsを開催しました",
        author: "小川椋徹",
        date: "2023.02.08",
      },
      {
        link: "https://stingy-gray-3c3.notion.site/web3-web3-d8ed85ecd59b41989d45c2f9bf884805",
        thumbnail:
          "https://stingy-gray-3c3.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa98cacb9-e381-4d2c-a251-17897a82375c%2Fce5ed47a-866d-4f2c-a33b-a676b533dedd%2Fcommunity.jpg?id=d8ed85ec-d59b-4198-9d45-c2f9bf884805&table=block&spaceId=a98cacb9-e381-4d2c-a251-17897a82375c&width=600&userId=&cache=v2",
        title: "東大web3コミュニティ「本郷web3バレー」を設立しました",
        author: "小川椋徹",
        date: "2023.02.08",
      },
      {
        link: "https://stingy-gray-3c3.notion.site/UTify-78fc0cfcff324316abba23c3b05e2c55",
        thumbnail:
          "https://stingy-gray-3c3.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa98cacb9-e381-4d2c-a251-17897a82375c%2Fe80063d8-e506-4eba-ad5c-9e066646acc9%2Futify.jpg?table=block&id=78fc0cfc-ff32-4316-abba-23c3b05e2c55&spaceId=a98cacb9-e381-4d2c-a251-17897a82375c&width=600&userId=&cache=v2",
        title: "東大のポータルアプリ「UTify」をリリースしました",
        author: "小川椋徹",
        date: "2022.04.22",
      },
      {
        link: "https://stingy-gray-3c3.notion.site/2WINS-548654a605dc434aa419380a214758fa",
        thumbnail:
          "https://stingy-gray-3c3.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa98cacb9-e381-4d2c-a251-17897a82375c%2F36db58d1-bdd7-4911-8010-b7eaa6a0f9cd%2F2wins.jpg?table=block&id=548654a6-05dc-434a-a419-380a214758fa&spaceId=a98cacb9-e381-4d2c-a251-17897a82375c&width=600&userId=&cache=v2",
        title: "株式会社2WINSのホームページを開設致しました",
        author: "吉村良太",
        date: "2022.04.01",
      },
    ] as News[];
  }
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
                様々なお客様の課題を解決するために、我々の持つ技術を提供しています。課題の明確化、ソリューション提案、システム開発・導入・保守運用に至るまで、徹底的にサポート致します。
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
                生成AIや画像処理など最新のAI技術をはじめとしたあらゆる技術を駆使し、各業界の生産性を向上させるSaaSを提供しています。我々はソリューションを通じて、お客様の競争力を高め、効率的な業務プロセスを実現します。
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
            弊社はこれまで多くのお客様をご支援してきました。
            <br class="hidden lg:block" />
            （一部抜粋）
          </p>
        </div>
        <ClientHorizontalScrollView list={clients()} />
      </section>
      {/* Strengths Section */}
      <section id="strengths" class="bg-background p-8">
        <div class="grid grid-cols-1 space-y-4 bg-background md:space-y-12 md:px-8 md:py-8 lg:grid-cols-2 lg:space-y-0">
          <SectionTitle text="STRENGTHS" />
          <div class="space-y-4 px-4 text-justify text-base font-normal leading-8 tracking-widest md:px-8 md:text-xl md:leading-10 lg:pl-4">
            <p class="font-bold">
              2WINSは、東大のアカデミアで最先端技術を研究するメンバーによって設立されました。技術力には自信を持っており、あらゆる開発を短期間でこなすことが可能です。
            </p>
            <p>
              圧倒的なAI開発技術に加え、ブロックチェーン領域にも進出しており、AIとブロックチェーンの融合を目指します。
              <br />
              また、2WINSの人材基盤を支えるソーシャルキャピタル事業では、日本が世界に誇る「本郷バレー」を目指すエコシステムを形成しています。
            </p>
          </div>
        </div>
        <div class="px-4 pt-8 md:space-y-8 md:px-12 md:pb-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-8 md:space-y-10 md:p-4">
              <ItemTitle number="01" title="ブロックチェーン事業" />
              <p class="text-justify text-base font-normal leading-8 tracking-widest md:text-xl md:leading-10">
                AIとブロックチェーンを融合させた未来のテクノロジーを見据えて活動しています。
                両者を組み合わせた革新的なソリューションモデルの先駆けを目指していきます。
              </p>
              <ViewMoreButton href="https://2wins-inc.github.io/hongo-web3-valley" />
            </div>
            <ClickableImage
              href="https://2wins-inc.github.io/hongo-web3-valley"
              src="/images/top/blockchain.jpg"
              alt="Blockchain"
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div class="space-y-8 md:space-y-10 md:p-4 lg:order-last">
              <ItemTitle number="02" title="ソーシャルキャピタル事業" />
              <p class="text-justify text-base font-normal leading-8 tracking-widest md:text-xl md:leading-10">
                2WINSは、日本が世界に誇る「本郷バレー」のエコシステムの実現を目指し活動しています。中でも最も重要な「人材」にフォーカスし、日本社会を支える人材のプラットフォーム構築を目指しています。
              </p>
              <ViewMoreButton href="/social-capital" />
            </div>
            <ClickableImage
              href="/social-capital"
              src="/images/top/community.jpg"
              alt="Social Capital"
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
              <p class="lg:ml-4">080-8734-7222</p>
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
