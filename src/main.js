import "./main.css";

import Navigo from "navigo";

import { Home } from "./views/Home/Home";
import { Contact } from "./views/Contact/Contact";

const app = document.querySelector("#app");

const router = new Navigo("/");

function render(view) {
    app.innerHTML = view();
}

router
    .on("/", () => render(Home))
    .on("/contacto", () => render(Contact))
    .notFound(() => {
        app.innerHTML = `
            <h1>404</h1>
            <p>Página no encontrada</p>
        `;
    });

router.resolve();