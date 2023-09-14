import { Component } from "solid-js";

const ItemTitle: Component<{ number: string; title: string }> = (props) => {
  return (
    <p class="text-center md:text-start">
      <span class="text-3xl font-bold tracking-wide md:text-5xl">
        {props.number}
      </span>
      <span class="ml-4 text-2xl font-semibold tracking-widest md:ml-8 md:text-4xl">
        {props.title}
      </span>
    </p>
  );
};

export default ItemTitle;
