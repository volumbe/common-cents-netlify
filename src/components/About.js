import React from "react";
import "bulma";
import tree from "../images/sprouting-tree.png"
import Founders from "./Founders.js"
import Advisors from "./Advisors.js"

class About extends React.Component {
  render() {
    return (
        <div>            
            <section class="hero is-white is-">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns  is-vcentered reverse-columns">
                        <div data-aos="fade-right" class="column
                        is-10-mobile is-offset-1-mobile
                        is-10-tablet is-offset-1-tablet
                        is-5-desktop is-offset-1-desktop
                        is-5-widescreen is-offset-1-widescreen
                        is-5-fullhd is-offset-1-fullhd">
                            <h1 class="title titled is-1 mb-6">
                                Common Cents
                                </h1>
                            <h2 class="subtitle subtitled">
                            Common Cents (CC) is a national nonprofit organization empowering students with the knowledge to manage their money and to reach financial independence.
                            </h2>
                        </div>
                        <div data-aos="fade-down" class="column
                        is-10-mobile is-offset-1-mobile
                        is-10-tablet is-offset-1-tablet
                        is-4-desktop is-offset-1-desktop
                        is-4-widescreen is-offset-1-widescreen
                        is-4-fullhd is-offset-1-fullhd" data-aos="fade-up">
                            <figure class="image is-square">
                            <img src={tree}/>
                            </figure>
                        </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <h1 class = "title has-text-centered">Leadership</h1>
                <div class="container">
                        <Founders />
                </div>
            </section>

            <section class="section">
                <h1 class = "title has-text-centered">Advisors</h1>
                <div class="container">
                        <Advisors />
                </div>
            </section>

        </div>
    );
  }
}

export default About;