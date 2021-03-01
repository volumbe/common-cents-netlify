import React from "react";
import Swati from "../images/headshots/upenn/Swati_Patel.jpg"
import Imad from "../images/headshots/upenn/Professor Imad Benjelloun.jpg"
import Salma from "../images/headshots/upenn/Dr. Salma Jeghalef.png"

class Advisors extends React.Component{
    render(){
        return(
            <div class = "columns">
                <div class = "column is-one-third" data-aos="fade-down">
                    <div class="card">
                        <div>
                        <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                            <img class = "is-rounded" src={Swati} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Swati Patel</p>
                                <p class="subtitle is-6">LinkedIn Senior Manager</p>
                            </div>
                            </div>

                            <div class="content">
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "column is-one-third" data-aos="fade-down">
                    <div class="card">
                        <div>
                        <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                            <img class = "is-rounded"src={Imad} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Dr. Imad Benjelloun</p>
                                <p class="subtitle is-6">Delaware Valley University Professor</p>
                            </div>
                            </div>

                            <div class="content">
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "column is-one-third" data-aos="fade-down">
                    <div class="card">
                        <div>
                            <figure class="image"style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                            <img class = "is-rounded" src={Salma} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Dr. Salma Jeghalef</p>
                                <p class="subtitle is-6">Wharton Lecturer</p>
                            </div>
                            </div>

                            <div class="content">
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
export default Advisors;