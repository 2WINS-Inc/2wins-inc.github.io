import { Component, Show, createSignal } from "solid-js";

const ProfileCard: Component<{
  src: string;
  alt: string;
  name: string;
  romaji: string;
  title?: string;
  desciption?: string;
}> = (props) => {
  const [clicked, setClicked] = createSignal<boolean>(false);
  const toggle = () => setClicked((prev) => !prev);

  return (
    <div class="group h-[360px] cursor-pointer perspective" onclick={toggle}>
      <div
        class="lg:my-rotate-y-0 relative h-full w-full duration-500 preserve-3d lg:group-hover:my-rotate-y-180"
        classList={{ "my-rotate-y-180": clicked() }}
      >
        {/* Front side */}
        <div class="absolute h-full w-full text-center backface-hidden">
          <img
            src={props.src}
            alt={props.alt}
            class="mx-auto h-56 w-56 rounded-full object-cover"
          />
          <p class="mb-2 mt-3 text-lg">
            {props.name} <span class="text-sm">/ {props.romaji}</span>
          </p>
          <p class="break-keep text-sm">{props.title}</p>
        </div>
        {/* Back side */}
        <div class="absolute h-full w-full overflow-scroll rounded-3xl bg-onBackground p-6 my-rotate-y-180 backface-hidden">
          <p class="text-lg font-bold text-background">
            {props.name} <span class="text-sm">/ {props.romaji}</span>
          </p>
          <p class="my-2 text-sm font-medium text-gray-500">{props.title}</p>
          <p class="my-3 text-xs text-background">{props.desciption}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
