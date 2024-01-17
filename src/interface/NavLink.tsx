import { JSX } from "@builder.io/qwik/jsx-runtime";

export default interface NavLinkProps {
    link?: string;
    text?: string;
    icon?: JSX.Element | JSX.Element[];
}
