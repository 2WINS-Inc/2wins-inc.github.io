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
          弊社の持つ技術力を駆使し、様々なお客様の課題を解決していきます。
          <br />
          課題の明確化、ソリューション提案、システム開発・導入・保守運用に至るまで、徹底的にサポート致します。
        </p>
        <div class="mt-10 grid gap-8 md:mx-8 lg:grid-cols-2">
          <SolutionCard
            src="/images/top/dx.webp"
            alt=""
            title="地方中小企業の課題解決"
            body="地方中小企業のDXを支援。お客様の「いまここが不便なんだよね」という声から、課題を明確にし、システムの設計・開発まで一気通貫の支援を致します。"
            href="/services/dx/support"
          />
          <SolutionCard
            src="/images/services/education.webp"
            alt=""
            title="教育機関の課題解決"
            body="私たちは東大発のスタートアップとして、身の回りの課題である「大学DX」に挑戦しました。貴重な学生生活において、機会損失のない世界を目指しています。"
            href="https://www.utify.2winsinc.com/"
          />
          <SolutionCard
            src="/images/services/dev.webp"
            alt=""
            title="開発現場の課題解決"
            body="開発プロジェクト単位で弊社メンバーが参画し、現場の人手・スキル不足の解消をサポート致します。"
            href="/#contact"
          />
        </div>
      </section>
    </>
  );
};

export default DXPage;
