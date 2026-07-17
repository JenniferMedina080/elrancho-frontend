import template from "./footer.html?raw";  /*?raw  traduce a texto*/
import "./footer.css"; /*importar solo el estilo de css*/

/**Esto permite que se peuda usar de cualquier vista */

export function Footer() {
    return template;  /*plantilla*/
}