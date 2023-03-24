import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("news-room")
export class Newsroom extends TailwindElement(style) {

    render() {
        return html`
            <main>
                <newsroom-mobile></newsroom-mobile>
                <newsroom-big></newsroom-big>
            </main>           
        `;
    }
}