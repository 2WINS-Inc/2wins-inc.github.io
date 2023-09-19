import { Component } from "solid-js";
import {
  Carousel,
  CarouselIndicator,
  CarouselItem,
} from "../components/services/Carousel";

const DXSupportPage: Component = () => {
  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl font-semibold leading-[4.5rem] tracking-widest md:text-start md:text-8xl md:leading-[7rem]">
          DX Support
          <span class="mt-10 block h-1 bg-onBackground"></span>
        </h1>
      </section>
      <section class="px-12 pb-16 md:px-16">
        <div class="mt-10 grid gap-8 overflow-hidden md:mx-8">
          <div class="relative overflow-hidden">
            <div class="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
              <CarouselIndicator id="c1" count={4} />
            </div>
            <Carousel>
              <CarouselItem
                carouselID="c1"
                index={1}
                src="/images/services/background_1_1.jpg"
              >
                <h3 class="text-2xl font-bold tracking-widest md:text-3xl">
                  開発パートナーサービス
                </h3>
                <p class="pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  当社は特に地方中小企業様向けに、開発パートナーとして長期連携を行う新しいスタンダードを確立しています。システムの受託開発で完結する従来の開発プロジェクトと異なり、長期的なパートナーシップを通じて、お客様の成長を支え続けます。
                </p>
              </CarouselItem>
              <CarouselItem
                carouselID="c1"
                index={2}
                src="/images/services/background_1_1.jpg"
              >
                <h4 class="text-lg font-semibold tracking-widest md:text-2xl">
                  特徴・メリット
                </h4>
                <ol class="space-y-2 pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  <li>
                    幅広い領域での経験を活かし、to Cのアプリからto
                    BのWebサービス、AIを駆使した社内管理システム、フルスクラッチのHPなど、あらゆるアイデアを現実にします。どんなシステムでも開発が可能です。
                  </li>
                  <li>
                    Deep
                    Learning、LLM、画像生成AIなど最先端の技術を専門とするトップエンジニアが、導入コンサルティングから開発・保守運用まで一気通貫した支援を行います。
                  </li>
                  <li>
                    良心的な価格設定と高い開発品質を提供し、エンジニア1名を雇用するよりも優れたコスト効率を実現します。また、月額制の開発支援によりプロジェクトのスタートをスムーズにし、持続可能性を高めます。
                  </li>
                </ol>
              </CarouselItem>
              <CarouselItem
                carouselID="c1"
                index={3}
                src="/images/services/background_1_3.jpg"
              >
                <h4 class="text-lg font-semibold tracking-widest md:text-2xl">
                  事例
                </h4>
                <ul class="space-y-2 pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  <li>
                    大手リサイクルショップを運営する株式会社ベクトル様の開発パートナー
                  </li>
                  <li>2023/6 ~ 2023/10 アプリ開発</li>
                  <li>2023/10 ~ CRMシステムの開発とAI分析の実施</li>
                </ul>
              </CarouselItem>
              <CarouselItem
                carouselID="c1"
                index={4}
                src="/images/services/background_1_3.jpg"
              >
                <h4 class="text-lg font-semibold tracking-widest md:text-2xl">
                  株式会社ベクトル様からのFB
                </h4>
                <p class="pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  弊社のサービスアプリの開発に尽力頂き、開発に関する定例MTGではアプリの仕様面において様々な追加提案を頂きました。柔軟な発想から生み出される意見は、弊社にはない新鮮味のある意見ばかりでした。
                  特に顧客の曖昧なコンセプトからのイメージ案の造形、顧客向けのイメージの可視化、及びアプリの開発スピード、この3点において弊社がシステム開発で携わる数ある企業様の中で2WINS社は群を抜いて強みを感じました。対応の迅速さ、丁寧さにとても魅力を感じています。今後はアプリ開発以外にも様々なお仕事でご縁があればと思います。（2023/8/21）
                </p>
              </CarouselItem>
            </Carousel>
          </div>

          <div class="relative overflow-hidden">
            <div class="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
              <CarouselIndicator id="c2" count={3} />
            </div>
            <Carousel>
              <CarouselItem
                carouselID="c2"
                index={1}
                src="/images/services/background_2_1.jpg"
              >
                <h3 class="text-2xl font-bold tracking-widest md:text-3xl">
                  役員向けDX研修
                </h3>
                <p class="pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  弊社のDX研修は、経営者の皆様がDX/AIの舵取りを的確に支援するための研修プログラムです。DX/AIの最新動向と戦略的リーダーシップの融合を通じて、組織全体へのDX浸透を加速し、未来のビジネス環境での競争力を高めることを目指します。
                </p>
              </CarouselItem>
              <CarouselItem
                carouselID="c2"
                index={2}
                src="/images/services/background_2_1.jpg"
              >
                <h4 class="text-lg font-semibold tracking-widest md:text-2xl">
                  特徴・メリット
                </h4>
                <ol class="space-y-2 pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  <li>
                    AIの最先端研究を牽引する研究員や開発メンバーが講師を務め、実用的なDXへの理解が進む独自の研修サービスを提供します。
                  </li>
                  <li>
                    ChatGPTなどの最新AIを含む革新的な技術を、既存の事業に効果的に活用する具体的な方法を共に考えます。
                  </li>
                  <li>
                    ブレインストーミングを通して生まれた優れたアイデアについては、デモ開発から本番開発までを伴走することも可能です。
                  </li>
                </ol>
              </CarouselItem>
              <CarouselItem
                carouselID="c2"
                index={3}
                src="/images/services/background_2_1.jpg"
              >
                <h4 class="text-lg font-semibold tracking-widest md:text-2xl">
                  実績
                </h4>
                <ul class="space-y-2 pb-4 text-justify text-base font-medium leading-6 tracking-widest md:leading-8">
                  <li>
                    弊社では、これまで様々な大企業・中小企業の役員向けにDX研修を行ってきました。
                  </li>
                  <li>
                    <strong>事例</strong>
                    <br />
                    ・国内大手メーカー：役員約20人向けに行い、高い満足度を頂きました。
                  </li>
                </ul>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default DXSupportPage;
