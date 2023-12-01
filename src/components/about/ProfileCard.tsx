import { ParentComponent, createSignal } from "solid-js";

const ProfileCard: ParentComponent<{
  src: string;
  alt: string;
  name: string;
  romaji: string;
  title?: string;
}> = (props) => {
  const [clicked, setClicked] = createSignal<boolean>(false);
  const toggle = () => setClicked((prev) => !prev);

  return (
    <div
      class="group aspect-[3/4] w-full cursor-pointer perspective"
      onclick={toggle}
    >
      <div
        class="relative h-full w-full duration-500 preserve-3d lg:my-rotate-y-0 lg:group-hover:my-rotate-y-180"
        classList={{ "my-rotate-y-180": clicked() }}
      >
        {/* Front side */}
        <div class="absolute h-full w-full space-y-4 text-center backface-hidden">
          <img
            src={props.src}
            alt={props.alt}
            class="mx-auto h-56 w-56 rounded-full object-cover"
          />
          <div class="flex flex-row items-end justify-center space-x-2 text-lg font-medium">
            <p>{props.name}</p>
            <p class="-translate-y-0.5 text-sm">/</p>
            <p class="-translate-y-0.5 text-sm">{props.romaji}</p>
          </div>
          <p class="text-sm font-normal">{props.title}</p>
        </div>
        {/* Back side */}
        <div class="absolute h-full w-full space-y-2 overflow-scroll rounded-3xl bg-onBackground p-6 my-rotate-y-180 backface-hidden">
          <div class="flex flex-row items-end space-x-2 text-lg font-semibold text-background">
            <p>{props.name}</p>
            <p class="-translate-y-0.5 text-sm">/</p>
            <p class="-translate-y-0.5 text-sm">{props.romaji}</p>
          </div>
          <p class="text-sm font-medium text-gray-500">{props.title}</p>
          <div class="space-y-3 py-1 text-justify text-xs text-background">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
