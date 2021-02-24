import React from "react";
import "bulma";
import tree from "../images/sprouting-tree.png"
import Kevin from "../images/headshots/nyu/Kevin_Li.jpg"
import Tanav from "../images/headshots/nyu/Tanav_Suman.jpg"
import Brett from "../images/headshots/nyu/Brett_Lin.JPG"
import Iti from "../images/headshots/nyu/Itihaas_Kommanavancha.jpg"

class Princeton extends React.Component {
  render() {
    return (
        <div>            
            <section class="hero is-white">
                <div class="hero-body">
                <img alt="Fill Murray" class="hero-background is-transparent" src={tree} />
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
                                    New York University
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
                    <div class = "column" data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "256px", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Iti} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Itihaas Kommanavancha</p>
                                    <p class="subtitle is-6">Co-President<br />
                                    <i>Class of 2023</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Finance & Econometrics with a minor in math. Enjoys playing and watching basketball, trying out new foods with friends, and exploring NYC.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column " data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Kevin} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Kevin Li</p>
                                    <p class="subtitle is-6">Co-President<br />
                                    <i>Class of 2023</i></p>
                                </div>  
                                </div>

                                <div class="content">
                                Studying Finance & Data Science. Enjoys traveling and playing basketball with friends.
                                <br></br>
                                <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column " data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "256px", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Tanav} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Tanav Suman</p>
                                    <p class="subtitle is-6">Co-Vice President<br />
                                    <i>Class of 2023</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Finance & Global Business, Enjoys hiking, debating about music with his friends, and attending concerts.
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
                                <img class = "is-rounded"src={Brett} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Brett Lin</p>
                                    <p class="subtitle is-6">Co-Vice President<br />
                                    <i>Class of 2023</i></p>
                                </div>  
                                </div>

                                <div class="content">
                                Studying Finance, Statistics, and Computer Science. Enjoys learning to cook, going on road trips, and playing tennis.
                                </div>
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

export default Princeton;