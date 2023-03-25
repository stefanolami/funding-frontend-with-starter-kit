import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("landing-page-big-newsroom")
export class LandingPageBigNewsroom extends TailwindElement(style) {

    render() {
        return html`
            <div class="hidden md:block">
                <h1 class="font-unna-700 text-xl md:text-[39px] xl:text-[50px] text-center mt-16 md:mt-20 xl:mt-28">NEWSROOM</h1>
                <p class="font-jose-400-it text-sm md:text-[21px] xl:text-2xl text-center my-9 md:my-12 xl:my-16">What's trending:</p>
                <div class="grid grid-rows-[35%_1fr] xl:block gap-4 mx-8 lg:mx-20 xl:mx-44 my-12">
                    <div class="xl:grid grid-cols-[1fr_40%_1fr] gap-4">
                        <div class="hidden xl:flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-unna-700 text-xs text-white text-left">Sebastian Lenders</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                            <a href="" class="absolute bottom-2 right-2 w-24 h-7 xl:w-28 xl:h-8 pt-[3px] flex justify-center items-center border-2 border-white rounded-full font-jose-600 text-white text-[10.5px] leading-[14.5px] xl:text-[11.5px] hover:text-primary-dark2 hover:bg-white hover:border-white cursor-pointer">READ MORE</a>
                        </div>
                        <div class="relative h-[162px] xl:h-[328px] border-t-4 border-b-4 border-r-[3px] border-l-[3px] border-primary">   <!-- INTERACTIVE MAP NEWS BLOCK -->
                            <a href="#">
                                <div class="relative w-2/5 xl:w-2/4 m-auto mt-24 xl:mt-48 z-10 flex justify-center text-center px-3 xl:px-4 py-2 xl:py-3 bg-primary-dark2/[.7] rounded-full font-jose-400 text-white text-base">Have a look at our interactive map!</div>
                            </a>
                            <img class="xl:hidden absolute top-0 right-0 object-cover h-full w-full" src="../../../images/landing page/landing-page-map.png" alt="">
                            <img class="hidden xl:block absolute top-0 right-0 object-cover h-full w-full" src="../../../images/landing page/landing-page-map-desktop.png" alt="">
                        </div>
                        <div class="hidden xl:flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-unna-700 text-xs text-white text-left">Sebastian Lenders</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                            <a href="" class="absolute bottom-2 right-2 w-24 h-7 xl:w-28 xl:h-8 pt-[3px] flex justify-center items-center border-2 border-white rounded-full font-jose-600 text-white text-[10.5px] leading-[14.5px] xl:text-[11.5px] hover:text-primary-dark2 hover:bg-white hover:border-white cursor-pointer">READ MORE</a>
                        </div>                  
                    </div>
                    <div class="grid xl:hidden grid-cols-3 gap-4">
                        <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] bg-primary">   <!-- DEFAULT NEWS BLOCK -->
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-unna-700 text-xs text-white text-left">Sebastian Lenders</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] text-white leading-6">What is the EU Global Gateway initiative?</h3>
                            <a href="" class="absolute bottom-2 right-2 w-24 h-7 xl:w-28 xl:h-8 pt-[3px] flex justify-center items-center border-2 border-white rounded-full font-jose-600 text-white text-[10.5px] leading-[14.5px] xl:text-[11.5px] hover:text-primary-dark2 hover:bg-white hover:border-white cursor-pointer">READ MORE</a>
                        </div>
                        <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] border border-primary text-primary-dark2">   <!-- WHITE NEWS BLOCK -->
                            <div class="absolute top-[-1px] left-[-1px] z-10 flex items-center rounded-br-3xl h-[12%] p-[13px] pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Announcement</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-unna-700 text-xs text-left">Press Release</p>
                                <p class="font-jose-300 text-xs text-left">February 12, 2021</p>
                            </div>
                            <h3 class="p-6 font-unna-700 text-[26px] leading-6">Time&Place becomes official partner of the European Paralympic Committee.</h3>
                            <a href="" class="absolute bottom-2 right-2 w-24 h-7 xl:w-28 xl:h-8 pt-[3px] flex justify-center items-center border-2 border-primary rounded-full font-jose-600 text-[10.5px] leading-[14.5px] xl:text-[11.5px] hover:text-white hover:bg-primary hover:border-primary cursor-pointer">READ MORE</a>
                        </div>
                        <div class="flex justify-center items-center relative h-[268px] xl:h-[328px] ">   <!-- BACKGROUND PICTURE NEWS BLOCK -->
                            <img class="object-cover w-full h-full" src="../../../images/newsroom/newsroom-india.png" alt="">
                            <div class="newsroom-block-photo-layer absolute top-0 bottom-0 right-0 left-0"></div>
                            <div class="absolute top-0 left-0 flex items-center rounded-br-3xl h-[12%] p-3 pr-5 bg-white font-unna-700-it text-base xl:text-xl text-primary-dark2">T&P Insights</div>
                            <div class="absolute bottom-0 left-0 p-3 leading-4">
                                <p class="font-unna-700 text-xs text-white text-left">Sebastian Lenders</p>
                                <p class="font-jose-300 text-xs text-white text-left">March 18, 2022</p>
                            </div>
                            <h3 class="absolute p-6 font-unna-700 text-[26px] z-10 text-white leading-6">EU-India Trade Relations: Now and an even brighter future</h3>
                            <a href="" class="absolute bottom-2 right-2 w-24 h-7 xl:w-28 xl:h-8 pt-[3px] flex justify-center items-center border-2 border-white rounded-full font-jose-600 text-white text-[10.5px] leading-[14.5px] xl:text-[11.5px] hover:text-primary-dark2 hover:bg-white hover:border-white cursor-pointer">READ MORE</a>
                        </div>                        
                    </div>             
                </div>
                <a href="./newsroom.html">
                    <div class="flex justify-center items-center pt-[2px] w-36 xl:w-44 h-10 xl:h-11 m-auto mb-28 border-2 border-primary-dark2 rounded-full font-jose-600 text-primary-dark2 text-sm xl:text-base cursor-pointer hover:text-white hover:bg-primary hover:border-primary">FIND OUT MORE</div>
                </a>
            </div>
        `;
    }
}