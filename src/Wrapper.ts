import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";

import style from "./shared/tailwind.global.css";

@customElement("wrapper-div")
export class Wrapper extends TailwindElement(style) {


  render() {
    return html`
    <div class="relative min-h-screen">
    </div>
    `;
  }
}