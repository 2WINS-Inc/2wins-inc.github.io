import { useParams } from "@solidjs/router";
import { Component, JSXElement, Suspense, createResource } from "solid-js";

type Post = {
  title: string;
  author: string;
  avatar: string;
  date: string;
  thumbnail: string;
  content: JSXElement;
  alt?: string;
};

const fetchPost: (id: string) => Promise<Post> = async () => {
  const post: Post = {
    title: "Blockchain Hackathon for Students を開催しました",
    author: "ツインズくん",
    avatar: "/images/clients/vector.svg",
    date: "2023.09.13",
    thumbnail: "/images/clients/vector.svg",
    content: (
      <p>
        2022年12月3日~8日、弊社が事務局として運営する東大web3コミュニティ「本郷web3バレー」主催の学生ハッカソン「Blockcahin
        Hackathon for
        Students」を8日間に渡り開催しました。全国各地から優秀な学生エンジニアが集い、活気の溢れるイベントとなりました。
      </p>
    ),
  } as Post;
  return post;
};

const NewsPage: Component = () => {
  const params = useParams();
  const [post] = createResource(() => params.id, fetchPost);

  return (
    <>
      <Suspense
        fallback={
          <>
            <div class="flex h-screen w-screen items-center justify-center">
              Loading...
            </div>
          </>
        }
      >
        <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
          <h1 class="w-full text-center text-2xl leading-8 md:text-start md:text-3xl md:leading-10">
            {post()?.title}
          </h1>
          <div class="flex flex-col items-center md:flex-row md:items-end py-4 md:py-0">
            <div class="flex flex-row py-4">
              <span class="flex h-7 w-7 rounded-full bg-onBackground p-1">
                <img
                  src={post()?.avatar}
                  alt={post()?.author}
                  class="my-auto"
                />
              </span>
              <span class="ml-3 text-xl">{post()?.author}</span>
            </div>
            <span class="ml-6 hidden py-4 text-base md:inline-block">/</span>
            <span class="block text-base md:ml-6 md:inline-block md:py-4">
              {post()?.date}
            </span>
          </div>
          <img
            src={post()?.thumbnail}
            alt=""
            class="my-4 max-h-96 w-full bg-onBackground object-cover p-16 opacity-90"
          />
        </section>
        <section class="px-12 pb-2 text-lg leading-8 md:px-24 md:pb-8 md:text-xl md:leading-10">
          {post()?.content}
        </section>
      </Suspense>
    </>
  );
};

export default NewsPage;
