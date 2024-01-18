import { component$ } from "@builder.io/qwik";

interface InputProps {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: string;

  onInput$?: (event: InputEvent) => void;
}

export const TextInput = component$((props: InputProps) => {
  return (
    <div class={"w-full flex relative flex-col gap-2"}>
      <label class="font-semibold text-xs text-gray-400 " for={props.id}>
        {props.label}
      </label>
      <input
        class="border rounded-lg px-3 py-2  mb-5 text-sm w-full outline-none"
        type={props.type || "text"}
        id={props.id}
        name={props.name}
        value={props.value}
        onInput$={props.onInput$}
        required
      />
    </div>
  );
});
