import { JSX } from "@builder.io/qwik/jsx-runtime";
import "./navlink.css";


export const NavLink = ((props: NavLinkProps) => {
    return (
        <div class="navlink">
            <div class={"icons"}>{props.icon}</div>
            <a href={props.link} target="_blank" title={props.text}>
                {props.text}
            </a>
        </div>
    );
});



export const NavLinkIcon = ((props: NavLinkProps) => {
    return (
        <div class="navlink">
            <div class={"view-icons"}>{props.icon}</div>
            <a href={props.link} target="_blank" title={props.text}>
                {props.text}
            </a>
        </div>
    );
});


interface NavLinkProps {
    link?: string;
    text?: string;
    icon?: JSX.Element | JSX.Element[];
}