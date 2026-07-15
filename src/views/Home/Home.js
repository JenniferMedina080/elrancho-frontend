import template from "./home.html?raw";
import "./home.css";

export function Home() {
    return template;
}

export function initHome() {
    const button = document.querySelector("#btnWelcome");

    if (!button) return;

    button.addEventListener("click", () => {
        alert("¡Bienvenido a la aplicación!");
    });
}