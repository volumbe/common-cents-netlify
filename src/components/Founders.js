import React from "react";
import Angie from "../images/headshots/upenn/Angie_Zhou.jpg"
import John from "../images/headshots/upenn/John_Ta.jpg"
import Vivek from "../images/headshots/upenn/Vivek_Olumbe.jpg"

class Founders extends React.Component{
    render(){
        return(
            <div class = "columns">
                <div class = "column is-one-third" data-aos="fade-down">
                    <div class="card">
                        <div>
                        <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                            <img class = "is-rounded" src={John} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">John Ta</p>
                                <p class="subtitle is-6">CEO</p>
                            </div>
                            </div>

                            <div class="content">
                            Junior studying Physics, Biochemistry, & Biophysics at the University of Pennsylvania.
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "column is-one-third" data-aos="fade-down">
                    <div class="card">
                        <div>
                        <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                            <img class = "is-rounded"src={Vivek} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Vivek Olumbe</p>
                                <p class="subtitle is-6">CFO</p>
                            </div>
                            </div>

                            <div class="content">
                            Junior studying Computer Science and Economics at the University of Pennsylvania.
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "column is-one-third" data-aos="fade-down">
                    <div class="card">
                        <div>
                            <figure class="image"style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                            <img class = "is-rounded" src={Angie} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Angie Zhou</p>
                                <p class="subtitle is-6">CMO</p>
                            </div>
                            </div>

                            <div class="content">
                            Sophomore studying Finance and Management at the Wharton School.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
export default Founders;