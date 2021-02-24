import React from "react";
import "bulma";
import tree from "../images/sprouting-tree.png"
import Kristen from "../images/headshots/cornell/Kristen_Wong.jpeg"
import Gabby from "../images/headshots/cornell/Gabby_Lee.jpg"
import Joaquin from "../images/headshots/cornell/Joaquin_Lopez_May.png"
class Cornell extends React.Component {
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
                                    Cornell's first undergraduate financial literacy club
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

            <section class="section">
                <h1 class = "title has-text-centered">Team</h1>
                <div class="container">
                <div class = "columns">
                    <div class = "column " data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Kristen} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Kristen Wong</p>
                                    <p class="subtitle is-6">Co-President<br />
                                    <i>Class of 2022</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Applied Economics & Management with a Concentration in Finance. Has a small youtube channel.</div>
                            </div>
                        </div>
                    </div>
                    <div class = "column " data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "256px", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Gabby} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Gabby Lee</p>
                                    <p class="subtitle is-6">Co-President<br />
                                    <i>Class of 2022</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Finance and Accounting. Enjoys eating popcorn, cooking food, and going to Costco.
                                <br></br>
                                <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column " data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Joaquin} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Joaquín López May</p>
                                    <p class="subtitle is-6">Vice President<br />
                                    <i>Class of 2024</i></p>
                                </div>  
                                </div>

                                <div class="content">
                                Studying Economics and minoring in Business. Enjoys playing rugby, watching football (Buffalo Bills), fishing, and cooking steak.</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
  }
}

export default Cornell;