import template from "./gallery.html?raw";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./gallery.css";



export function Gallery() {
    return `
        ${Navbar()}
        ${template}
        ${Footer()}
    `;
}