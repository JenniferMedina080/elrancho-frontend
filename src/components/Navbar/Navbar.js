import template from "./navbar.html?raw";  /*?raw  traduce a texto*/
import "./navbar.css"; /*importar solo el css*/

/**Esto permite que se peuda usar de cualquier vista */

export function Navbar() {
    return template;  /*plantilla*/
}