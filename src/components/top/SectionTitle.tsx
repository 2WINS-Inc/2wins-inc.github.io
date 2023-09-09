import { Component } from "solid-js";

const SectionTitle: Component<{ text: string }> = (props) => {
  return (
    <h2
      class="p-4 text-center text-4xl font-extralight tracking-widest text-onBackground 
             md:p-8 md:text-start md:text-[5rem]"
    >
      {props.text}
    </h2>
  );
};

export default SectionTitle;
