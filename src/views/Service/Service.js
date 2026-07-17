import template from "./service.html?raw";  /*?raw  traduce a texto*/
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./service.css"; /*importar solo el css*/


export function Service() {
    return `
        ${Navbar()}
        ${template}
        ${Footer()}
    `;
}