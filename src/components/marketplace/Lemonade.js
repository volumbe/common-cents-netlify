import React from "react";
import Lemonade_Logo from "../../images/lemonade_logo.png"

class Lemonade extends React.Component{
    render(){
        return(
            <div class = "column is-one-third" data-aos="fade-down">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        <span>Lemonade </span>
                        <div class="tags is-pulled-right"> 
                            <span class="tag is-default">Rent Insurance</span>
                            <span class="tag is-default">App</span>
                        </div>
                        </p>
                    </header>
                    <div class="card-content has-text-centered" style = {{"width": "auto", "height": "auto"}}>
                        <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                        <img src={Lemonade_Logo} style = {{"width": "256px", "height": "256px", "margin": "0"}} alt="Landing template screenshot" />
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="templates/instaAlbum.html" class="card-footer-item">Download</a>
                        <a href="https://www.lemonade.com/" class="card-footer-item">Learn More</a>
                    </footer>
                </div>
            </div>
          );
    }
}
export default Lemonade;