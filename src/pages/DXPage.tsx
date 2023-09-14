import { Component } from "solid-js";
import { SolutionCard } from "../components";

const DXPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl font-semibold leading-[4.5rem] tracking-widest md:text-start md:text-8xl md:leading-[7rem]">
          DX Solutions
          <span class="my-10 block h-1 bg-onBackground"></span>
        </h1>
      </section>
      <section class="px-12 pb-16 md:px-16">
        <p class="text-justify text-lg font-normal leading-8 tracking-widest md:mx-8 md:text-xl md:leading-10">
          テクノロジーと戦略の融合を通じてDXをサポートします。課題の明確化からシステムの開発・導入に至るまで、お客様のビジョンを現実にするために全力で取り組みます。
        </p>
        <div class="mt-10 grid gap-8 md:mx-8 lg:grid-cols-2">
          <SolutionCard
            src="/images/services/community.jpg"
            alt=""
            title="地方中小企業の課題解決"
            body="現場と経営の両方の視点を網羅し、課題の洗練から技術的なアプローチへのブレイクダウン、システムの開発・導入まで一貫したサポートを提供します。"
          />
          <SolutionCard
            src="/images/services/community.jpg"
            alt=""
            title="教育機関の課題解決"
            body="東大発スタートアップとして、日本の教育機関におけるDXを当たり前のものにし、学生と教職員が全ての手続きをよりスムーズに行える環境を普及させたいと考えています。"
          />
          <SolutionCard
            src="/images/services/community.jpg"
            alt=""
            title="開発現場の課題解決"
            body="多様な課題を解決する手段として、開発プロジェクトへのメンバーの派遣も実施しております。"
          />
        </div>
      </section>
    </>
  );
};

export default DXPage;
