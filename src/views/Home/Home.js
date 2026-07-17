import template from "./home.html?raw";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./home.css";


/*export function Home() {
    return template;
}*/

export function Home() {
    return `
        ${Navbar()}
        ${template}
        ${Footer()}
    `;
}

export function initHome() {
    const button = document.querySelector("#btnWelcome");

    if (!button) return;

    button.addEventListener("click", () => {
        alert("¡Bienvenido a la aplicación!");
    });
}