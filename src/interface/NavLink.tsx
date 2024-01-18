import { JSX } from "@builder.io/qwik/jsx-runtime";

export default interface NavLinkProps {
    key?: string;
    link?: string;
    text?: string;
    icon?: JSX.Element | JSX.Element[];
    external?: boolean;
}
