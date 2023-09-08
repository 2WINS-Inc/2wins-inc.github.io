import { A } from "@solidjs/router";
import { Component } from "solid-js";

const NewsCard: Component<{
  link: string;
  thumbnail: string;
  title: string;
  avatar: string;
  author: string;
  date: string;
}> = (props) => {
  return (
    <A href={props.link} class="group block">
      <div class="flex h-48 w-full bg-onBackground">
        <img
          src={props.thumbnail}
          alt={props.title}
          class="my-auto p-8 transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <p class="py-4 text-lg">{props.title}</p>
      <p class="flex flex-row items-center">
        <span class="flex h-7 w-7 rounded-full bg-onBackground p-1">
          <img src={props.avatar} alt={props.author} class="my-auto" />
        </span>
        <span class="ml-3">{props.author}</span>
        <span class="ml-6">{props.date}</span>
      </p>
    </A>
  );
};

export default NewsCard;
