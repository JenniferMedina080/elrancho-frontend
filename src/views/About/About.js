import template from "./about.html?raw";  /*?raw  traduce a texto*/
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./about.css"; /*importar solo el css*/


export function About() {
    return `
        ${Navbar()}
        ${template}
        ${Footer()}
    `;
}