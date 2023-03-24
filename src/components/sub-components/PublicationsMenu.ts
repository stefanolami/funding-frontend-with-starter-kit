import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("publications-menu")
export class PublicationsMenu extends TailwindElement(style) {


    render() {
        return html`
            <div class="max-w-7xl mx-auto mt-6 md:mt-16 xl:mt-28 select-none">
                <h1 class="font-unna-700 text-[20px] md:text-[39px] md:mb-12 xl:mb-20 text-center">PUBLICATIONS</h1>
                <div class="flex mx-5 my-5 flex-row flex-wrap justify-between md:justify-center md:mx-auto">                  
                    <style>
                        @media only screen and (min-width: 1280px) {
                            .publications-menu-divs {
                                font-size: 16px;
                                font-style: italic;
                                font-family: 'Unna';
                            }
                        }
                    </style>
                    <div class="publications-menu-first publications-menu-divs">Funding Programmes</div>
                    <div class="publications-menu-divs">Funding Policies</div>
                    <div class="publications-menu-divs">Predictability in Politics</div>
                    <div class="publications-menu-last publications-menu-divs">Time & Place Newsletters</div>
                </div>
            </div>     
        `;
    }

}