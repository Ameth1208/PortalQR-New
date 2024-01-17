import { component$ } from "@builder.io/qwik";
import { JSX } from "@builder.io/qwik/jsx-runtime";
import { Mail } from "../icons/icons";

interface InputProps {
	label?: string;
	id?: string;
	name?: string;
	icon?: JSX.Element | JSX.Element[];
	onInput$?: (event: InputEvent) => void;
}

export const TextInput = component$((props: InputProps) => {
	return (
		<div class={"w-full flex relative flex-col gap-2"}>

			<div class={"w-12 absolute z-[1] left-[12px] bottom-[9px]"}>
				{props.icon}
			</div>
			<label
				class="font-semibold text-xs text-gray-400 "
				for={props.id}
			>
				{props.label}
			</label>
			<input
				class="border rounded-lg px-3 py-2  mb-5 text-sm w-full outline-none"
				type="text"
				id={props.id}
				name={props.name}
				onInput$={(event) => props.onInput$ && props.onInput$(event as InputEvent)}
				required
			/>
		</div>
	);
});
