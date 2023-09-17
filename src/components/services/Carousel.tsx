import {
  Component,
  For,
  ParentComponent,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

export const Carousel: ParentComponent = (props) => {
  return (
    <div class="hide-scrollbar relative inline-flex h-96 snap-x snap-mandatory space-x-4 overflow-x-scroll scroll-smooth rounded-lg w-full">
      {props.children}
    </div>
  );
};

export const CarouselItem: ParentComponent<{
  carouselID: string;
  index: number;
  src: string;
}> = (props) => {
  return (
    <div
      id={`${props.carouselID}i${props.index}`}
      class="hide-scrollbar relative box-content flex w-full flex-none snap-center overflow-x-hidden overflow-y-scroll scroll-smooth rounded-lg bg-background bg-opacity-60 bg-cover text-onBackground bg-blend-overlay md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)]"
      style={`background-image: url(${props.src});`}
    >
      <div class="space-y-4 p-6 md:p-8">{props.children}</div>
    </div>
  );
};

export const CarouselIndicator: Component<{ id: string; count: number }> = (
  props,
) => {
  const [activeIndex, setActiveIndex] = createSignal<number>(1);

  const handler = (event: Event) => {
    for (var i = 1; i <= props.count; i++) {
      const element = document.getElementById(`${props.id}i${i}`);
      if (element !== undefined && element !== null) {
        const bounding = element.getBoundingClientRect();
        if (
          bounding.left <=
            (window.innerWidth || document.documentElement.clientWidth) / 2 &&
          bounding.right >=
            (window.innerWidth || document.documentElement.clientWidth) / 2
        ) {
          setActiveIndex(i);
          return;
        }
      }
    }
  };

  onMount(() => {
    document.addEventListener("scroll", handler, true);
  });

  onCleanup(() => {
    document.removeEventListener("scroll", handler, true);
  });

  return (
    <div class="flex flex-row justify-center space-x-4">
      <For each={[...Array(props.count).keys()]}>
        {(index: number, _) => (
          <button
            onclick={() => {
              document
                .getElementById(`${props.id}i${index + 1}`)
                .scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
            }}
            class="h-3 w-3 rounded-full bg-onBackground transition-all duration-300"
            classList={{
              "opacity-30": activeIndex() !== index + 1,
              "opacity-100": activeIndex() === index + 1,
            }}
          />
        )}
      </For>
    </div>
  );
};
