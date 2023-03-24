import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("landing-page")
export class LandingPage extends TailwindElement(style) {

    render() {
        return html`
            <main>
                <h1 class="md:hidden text-center font-unna-700 text-xl my-2">TIME&PLACE FUNDING</h1>
                <p class="text-center font-jose-400-it text-sm md:text-[21px] xl:text-2xl my-5 md:my-7">Our presence, your opportunities</p>
                <p class="w-4/5 md:w-[70%] m-auto my-10 xl:my-20 font-unna-700 text-center text-xl md:text-[27px] xl:text-[33px] leading-6 md:leading-8 xl:leading-10">
                    As big business, SME, entrepreneur, academic institution, NGO, government, local or regional body you can benefit from International, EU, national, regional and local funding schemes
                </p>
                <landing-page-list></landing-page-list>
                <mobile-newsroom></mobile-newsroom>
                <landing-page-big-newsroom></landing-page-big-newsroom>
            </main>           
        `;
    }
}