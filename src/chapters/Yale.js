import React from "react";
import "bulma";
import tree from "../images/sprouting-tree.png"

class Yale extends React.Component {
  render() {
    return (
        <div>            
            <section class="hero is-white">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-vcentered reverse-columns">
                            <div class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-5-desktop is-offset-1-desktop
                            is-5-widescreen is-offset-1-widescreen
                            is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                                <h1 class="title titled is-1 mb-6">
                                Common Cents</h1>
                                <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                                    Yale University
                                    </h2>
                                <div class="buttons">
                                {/* <button class="button is-black">Download</button>
                                <button class="button">Join</button> */}
                                </div>
                            </div>
                            <div data-aos="fade-right" class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-4-desktop is-offset-1-desktop
                            is-4-widescreen is-offset-1-widescreen
                            is-4-fullhd is-offset-1-fullhd">
                                <figure class="image">
                                <img src={tree} alt = "tree animation"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    );
  }
}

export default Yale;