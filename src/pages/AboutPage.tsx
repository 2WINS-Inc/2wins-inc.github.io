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
            <br />
            <br />
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
            >
              <p>
                東京大学工学部機械情報工学科　卒業
                <br />
                東京大学大学院情報理工学系研究科　知能機械情報学専攻　修士1年
              </p>
              <p>
                アカデミアでは協調型自動運転の研究に従事。
                <br />
                一般社団法人学生web3連合代表理事。東京大学最大のブロックチェーンエンジニア団体である本郷web3バレーのCo-Founder/現事務局総責任者。
                <br />
                国内最大規模の学生ハッカソンとWeb3
                Summitを代表として実施し、省庁や企業と連携したイベントの責任者を務める。東大松尾研の開講するGCI2023ではデータサイエンスを活かしたBizDevに取組み上位1%の優秀修了生を受賞。認定支援機関の支援担当者として中小企業の事業コンサルティングを2年間経験。「研究開発から社会実装へ」をテーマに自身でもAIの開発に取り組む。
              </p>
            </ProfileCard>
            <ProfileCard
              src="/images/members/ryota.webp"
              alt="吉村 良太"
              name="吉村 良太"
              romaji="Ryota Yoshimura"
              title="代表取締役 Co-CEO"
            >
              <p>
                東京大学工学部機械情報工学科　卒業
                <br />
                東京大学大学院情報理工学系研究科　知能機械情報学専攻　修士1年
              </p>
              <p>
                アカデミアでは特定区画作業車両の⾃動運転アルゴリズムの研究開発に従事。東京大学最⼤のブロックチェーンエンジニア団体である本郷web3バレーCo-Founder。
                <br />
                株式会社松尾研究所のセールスチームにて、法人営業や新規事業の企画を手掛ける。また、同社の法人役員向けのAIセミナーでは講師チームとして生成AIの活用に関する講義も行う。過去には、外資系投資銀行やコンサルティングファームでインターンも経験。
              </p>
            </ProfileCard>
            <ProfileCard
              src="/images/members/kai.webp"
              alt="王 凱"
              name="王 凱"
              romaji="Kai Wang"
              title="最高技術責任者 CTO"
            >
              <p>
                東京大学工学部機械情報工学科　卒業
                <br />
                東京大学大学院情報理工学系研究科　知能機械情報学専攻　修士1年
              </p>
              <p>
                アカデミアでは自然言語処理、画像生成の2大テーマについての研究に従事。国際学会を含め論文の執筆を行う。出身台湾では高校時代にIntel
                ISEF Special Awardの上位受賞、TISFでは最優秀賞に選出。
                <br />
                来日後、アカデミアでの知見を活かし、大規模基幹システムやアプリ開発、AIの独自ツール開発など企業向けの多くの開発プロジェクトでマネージャーを担当するほか、東京大学の教授・研究者らと共に実施される共同プロジェクトでは画像生成に関するリードエンジニアに抜擢。
              </p>
              <p>▼ 取組事例</p>
              <ul class="flex flex-row space-x-4">
                <li>
                  <a
                    href="https://www.societyforscience.org/press-release/intel-international-science-and-engineering-fair-2018-special-award-winners/"
                    target="_blank"
                    class="text-blue-500 underline decoration-1 underline-offset-2"
                  >
                    Intel ISEF 2018
                  </a>
                </li>
                <li>
                  <a
                    href="https://twsf.ntsec.gov.tw/News-Content.aspx?lang=1&nid=185&p=1&title="
                    target="_blank"
                    class="text-blue-500 underline decoration-1 underline-offset-2"
                  >
                    TISF 2018
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kaiw-kai-wang"
                    target="_blank"
                    class="text-blue-500 underline decoration-1 underline-offset-2"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </ProfileCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
