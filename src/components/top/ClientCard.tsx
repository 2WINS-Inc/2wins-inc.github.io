import { Component } from "solid-js";

const ClientCard: Component<{
  src: string;
  alt: string;
}> = (props) => {
  return (
    <div class="mx-6 flex h-40 w-60 transform-gpu items-center rounded bg-onBackground p-6 shadow-md transition-all duration-300 hover:scale-110">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default ClientCard;
