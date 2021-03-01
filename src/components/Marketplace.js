import React from "react";
import heroPic from "../images/Page-Graphic-1.png"
import Public from "./marketplace/Public";
import Policygenius from "./marketplace/Policygenius";
import Fidelity from "./marketplace/Fidelity";
import Lemonade from "./marketplace/Lemonade";
import useScript from './hooks/useScript';

function Marketplace() {
        useScript("NavbarScript.js");

        return(
            <section class="section">
                <section>
                <div class="hero-body is-small" style = {{"margin-top": "-2em"}}>
                <div class="container">
                    <div class="columns  is-vcentered reverse-columns">
                    <div data-aos="fade-right" class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-5-desktop is-offset-1-desktop
                    is-5-widescreen is-offset-1-widescreen
                    is-5-fullhd is-offset-1-fullhd">
                        <h1 class="title titled is-1 mb-6">
                        Marketplace
                        </h1>
                        <h2 class="subtitle subtitled">
                        Look at financial products great for students to help you along your journey to financial independence
                        </h2>
                    </div>
                    <div data-aos="fade-down" class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-4-desktop is-offset-1-desktop" data-aos="fade-up">
                        <figure class="image is-square">
                        <img src={heroPic} />
                        </figure>
                    </div>

                    </div>
                </div>
                </div>
                </section>
                <div class="container">
                <div class="columns is-variable">
                    <div class="column">

                    <div class="tabs is-boxed is-centered">
                        <ul>
                        <li class="is-active" data-target="product-details">
                            <a>All</a> 
                        </li>
                        <li data-target="upenn-events">
                            <a>Investing</a>
                        </li>
                        <li data-target="cornell-events">
                            <a>Insurance</a>
                        </li>
                        </ul>
                    </div>
                    <div class="px-2" id="tab-content">
                        <div id="product-details">
                            <h3 class="is-size-5 title">Product Details</h3>
                            <div class = "columns">
                                <Public />
                                <Lemonade />
                                <Policygenius />
                                <Fidelity />
                            </div>
                        </div>
                        <div id="delivery-information" class="is-hidden">
                        </div>
                        <div id="upenn-events" class="is-hidden">
                            <h3 class="is-size-5 title">Investing</h3>
                            <div class = "columns">
                                <Public />
                                <Fidelity />
                            </div>
                        </div>
                        <div id="cornell-events" class="is-hidden">
                            <h3 class="is-size-5 title">Insurance</h3>
                            <div class = "columns">
                                <Lemonade />
                                <Policygenius />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
          );
}


export default Marketplace;