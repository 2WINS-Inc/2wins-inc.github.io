import { Component } from "solid-js";

const NewsCard: Component<{
  link: string;
  thumbnail: string;
  title: string;
  author: string;
  date: string;
}> = (props) => {
  return (
    <a href={props.link} class="group block space-y-4" target="_blank">
      <div class="flex h-48 w-full overflow-hidden rounded-sm">
        <img
          src={props.thumbnail}
          alt={props.title}
          class="my-auto transform-gpu transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <p class="text-justify text-base font-semibold leading-7 tracking-widest">
        {props.title}
      </p>
      <p class="flex flex-row items-center">
        <span class="flex h-6 w-6 rounded-full bg-onBackground p-1">
          <img
            src="/images/logo.svg"
            alt={props.author}
            class="logo-blue my-auto translate-y-[1px]"
          />
        </span>
        <span class="ml-2 text-sm tracking-widest">{props.author}</span>
        <span class="ml-3 text-xs tracking-widest">/</span>
        <span class="ml-3 text-sm tracking-widest">{props.date}</span>
      </p>
    </a>
  );
};

export default NewsCard;
