import axios from "axios";

export const fetchNews: () => Promise<News[]> = async () => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_NOTION_API_ENDPOINT);

    const news: News[] = data.results.map(
      (e) =>
        ({
          link: e.url,
          thumbnail: e.properties["サムネ"].files[0].file.url,
          title: e.properties["タイトル"].title[0].plain_text,
          author: e.properties["筆者"].multi_select[0].name,
          date: e.properties["日時"].date.start,
        }) as News,
    );

    return news;
  } catch {
    return [] as News[];
  }
};
