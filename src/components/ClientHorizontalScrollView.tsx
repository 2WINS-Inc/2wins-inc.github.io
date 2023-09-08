import { Component, For } from "solid-js";
import ClientCard from "./ClientCard";

const ClientHorizontalScrollView: Component<{
  list: { src: string; alt: string }[];
}> = (props) => {
  return (
    <div class="hide-scrollbar relative my-10 h-40 lg:my-16">
      <div class="group flex flex-row">
        <div class="group-hover:pause-animation absolute left-0 top-0 flex animate-infinity-scroll-left__first flex-row">
          <For each={props.list}>
            {(item: { src: string; alt: string }, _) => (
              <ClientCard src={item.src} alt={item.alt} />
            )}
          </For>
        </div>
        <div class="group-hover:pause-animation absolute left-0 top-0 flex animate-infinity-scroll-left__second flex-row">
          <For each={props.list}>
            {(item: { src: string; alt: string }, _) => (
              <ClientCard src={item.src} alt={item.alt} />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default ClientHorizontalScrollView;
