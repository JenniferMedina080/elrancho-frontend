import template from "./contact.html?raw";
import "./contact.css";

export function Contact() {
    return template;
}

export function initContact() {
    const button = document.querySelector("#btnContact");

    if (!button) return;

    button.addEventListener("click", () => {
        alert("¡Gracias por contactarnos!");
    });
}