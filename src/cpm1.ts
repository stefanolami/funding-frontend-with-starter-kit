import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";

import style from "./shared/tailwind.global.css";

@customElement("test3-component")
export class Test2Component extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-red-600 p-4 rounded-full text-[100px]">Hello world!</button>
    `;
  }
}