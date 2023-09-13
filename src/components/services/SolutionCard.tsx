import { Component, createSignal } from "solid-js";

const SolutionCard: Component<{ title: string; body: string }> = (props) => {
  const [show, setShow] = createSignal<boolean>(false);

  const toggle = () => setShow((prev) => !prev);

  return (
    <div
      class="group relative h-96 w-full cursor-pointer overflow-hidden rounded-lg"
      onclick={toggle}
    >
      <img
        src="/images/services/community.jpg"
        alt=""
        class="h-full w-full object-cover opacity-50"
      />
      <div class="absolute bottom-0 left-0 w-full p-8 transition-all duration-500 lg:-bottom-20 lg:group-hover:-translate-y-20">
        <div class="flex w-full flex-row items-end justify-between">
          <div class="w-3/4 md:w-4/5">
            <h3 class="my-2 text-2xl md:my-3 md:text-3xl">{props.title}</h3>
            <p class="hidden h-20 overflow-y-hidden text-base opacity-0 transition-all delay-100 duration-300 lg:invisible lg:block lg:group-hover:visible lg:group-hover:opacity-100">
              {props.body}
            </p>
          </div>
          <div class="flex w-1/4 justify-end md:w-1/5">
            <p class="flex aspect-square w-5/6 items-center justify-center rounded-full border-2 border-onBackground text-3xl transition-all delay-100 duration-300 lg:opacity-0 lg:group-hover:opacity-100">
              →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
