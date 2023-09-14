import { Component } from "solid-js";
import { SolutionCard } from "../components";

const AIPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl md:text-start md:text-8xl">
          AI Solutions
          <span class="my-10 block h-[1px] bg-onBackground"></span>
        </h1>
      </section>
      <section class="px-12 pb-16 md:px-16">
        <p class="text-lg leading-8 md:mx-8 md:text-xl md:leading-10">
          最新のAI技術を駆使し、各業界の生産性を向上させるSaaSプロダクトを提供しています。我々はソリューションを通じて、お客様の競争力を高め、効率的な業務プロセスを実現します。
        </p>
        <div class="mt-10 grid gap-8 md:mx-8 lg:grid-cols-2">
          <SolutionCard
            title="補助金申請書作成AI"
            body="現場と経営の両方の視点を網羅し、課題の洗練から技術的なアプローチへのブレイクダウン、システムの開発・導入まで一貫したサポートを提供します。"
          />
          <SolutionCard
            title="広告AI"
            body="東大発スタートアップとして、日本の教育機関におけるDXを当たり前のものにし、学生と教職員が全ての手続きをよりスムーズに行える環境を普及させたいと考えています。"
          />
        </div>
      </section>
    </>
  );
};

export default AIPage;
