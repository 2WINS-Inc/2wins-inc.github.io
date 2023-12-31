import { Component } from "solid-js";
import { SolutionCard } from "../components";

const AIPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl font-semibold leading-[4.5rem] tracking-widest md:text-start md:text-8xl md:leading-[7rem]">
          AI Solutions
          <span class="my-10 block h-1 bg-onBackground"></span>
        </h1>
      </section>
      <section class="px-12 pb-16 md:px-16">
        <p class="text-justify text-lg font-normal leading-8 tracking-widest md:mx-8 md:text-xl md:leading-10">
          生成AIや画像処理など最新のAI技術をはじめとしたあらゆる技術を駆使し、各業界の生産性を向上させるSaaSを提供しています。我々はソリューションを通じて、お客様の競争力を高め、効率的な業務プロセスを実現します。
        </p>
        <div class="mt-10 grid gap-8 md:mx-8 lg:grid-cols-2">
          <SolutionCard
            src="/images/services/writing_assistant.webp"
            alt=""
            title="補助金申請AI"
            body="政府に補助金を申請する際に必要な書類を自動で生成するAIです。業務の時間コストを80%削減し、さらに採択率90%を実現しています。資料請求はこちら。"
            href="https://monohojo-ai.2winsinc.com"
          />
          <SolutionCard
            src="/images/services/coming.webp"
            alt=""
            title="Coming soon..."
            body="便利で面白いAIを開発中です。お楽しみに。"
            href="#"
          />
        </div>
      </section>
    </>
  );
};

export default AIPage;
