import { ParentComponent } from "solid-js";

export const Carousel: ParentComponent = (props) => {
  return (
    <div class="hide-scrollbar inline-flex h-96 snap-x snap-mandatory space-x-4 overflow-x-scroll scroll-smooth rounded-lg">
      {props.children}
    </div>
  );
};

export const CarouselItem: ParentComponent<{
  src: string;
}> = (props) => {
  return (
    <div
      class="hide-scrollbar relative box-content flex w-[calc(100%-40px)] flex-none snap-center overflow-x-hidden overflow-y-scroll scroll-smooth rounded-lg bg-background bg-opacity-60 bg-cover text-onBackground bg-blend-overlay md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)]"
      style={`background-image: url(${props.src});`}
    >
      <div class="space-y-4 p-6 md:p-8">{props.children}</div>
    </div>
  );
};
