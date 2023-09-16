import { Accessor, Component, For, Suspense, createResource } from "solid-js";
import { fetchNews } from "../utils/notion";

const NewsListPage: Component = () => {
  const [newsList] = createResource(fetchNews);

  return (
    <>
      <section class="px-12 pb-2 pt-40 md:px-24 md:pb-8">
        <h1 class="w-full text-center text-5xl font-semibold leading-[4.5rem] tracking-widest md:text-start md:text-8xl md:leading-[7rem]">
          News
          <span class="my-10 block h-1 bg-onBackground"></span>
        </h1>
      </section>

      <section class="px-12 pb-16 md:px-24">
        <table class="w-full text-base md:text-lg lg:text-xl">
          <tbody>
            <Suspense
              fallback={
                <tr class="w-full">
                  <td class="whitespace-nowrap py-4">xxxx-xx-xx</td>
                  <td class="py-4 pl-4 text-justify leading-6 md:px-4 md:text-start md:leading-8 lg:px-8 lg:leading-10">
                    ローディング中...
                  </td>
                  <td class="hidden whitespace-nowrap py-4 text-end md:table-cell">
                    2WINSメンバー
                  </td>
                </tr>
              }
            >
              <For each={newsList()}>
                {(news: News, _: Accessor<number>) => (
                  <tr class="text-onBackground transition-all duration-500 lg:hover:scale-[1.02] lg:hover:text-cyan-400">
                    <td class="whitespace-nowrap">
                      <a href={news.link} class="block py-4" target="_blank">
                        {news.date}
                      </a>
                    </td>
                    <td>
                      <a
                        href={news.link}
                        class="block py-4 pl-4 text-justify leading-6 md:px-4 md:text-start md:leading-8 lg:px-8 lg:leading-10"
                        target="_blank"
                      >
                        {news.title}
                      </a>
                    </td>
                    <td class="hidden whitespace-nowrap md:table-cell">
                      <a
                        href={news.link}
                        class="block py-4 text-end"
                        target="_blank"
                      >
                        {news.author}
                      </a>
                    </td>
                  </tr>
                )}
              </For>
            </Suspense>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default NewsListPage;
