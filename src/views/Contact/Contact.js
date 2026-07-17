import template from "./contact.html?raw";  /*?raw  traduce a texto*/
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./contact.css"; /*importar solo el css*/

/*export function Contact() {
    return template;  plantilla
}*/

export function Contact() {
    return `
        ${Navbar()}
        ${template}
        ${Footer()}
    `;
}

export function initContact() {
    const button = document.querySelector("#btnContact");

    if (!button) return;

    button.addEventListener("click", () => {
        alert("¡Gracias por contactarnos!");
    });
}