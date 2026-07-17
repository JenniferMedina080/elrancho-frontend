import "./main.css";

import Navigo from "navigo";

import { Home } from "./views/Home/Home";
import { Contact } from "./views/Contact/Contact";
import { Service } from "./views/Service/Service";
import { About } from "./views/About/About";
import { Gallery } from "./views/Gallery/Gallery";


const app = document.querySelector("#app");

const router = new Navigo("/");

function render(view) {
    app.innerHTML = view();
}

router
    .on("/", () => render(Home))
    .on("/servicios", () => render(Service))
    .on("/nosotros", () => render(About))
    .on("/contacto", () => render(Contact))
    .on("/galeria", () => render(Gallery))
    .notFound(() => {
        app.innerHTML = `
            <h1>404</h1>
            <p>Página no encontrada</p>
        `;
    });

router.resolve();