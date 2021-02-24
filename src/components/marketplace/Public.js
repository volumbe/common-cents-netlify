import React from "react";
import Public_Logo from "../../images/public_logo.png"

class Public extends React.Component{
    render(){
        return(
            <div class = "column is-one-third" data-aos="fade-down">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        <span>Public.com </span>
                        <div class="tags is-pulled-right"> 
                            <span class="tag is-default">Investing</span>
                            <span class="tag is-default">App</span>
                        </div>
                        </p>
                    </header>
                    <div class="card-content has-text-centered" style = {{"width": "auto", "height": "auto"}}>
                        <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                        <img src={Public_Logo} style = {{"width": "256px", "height": "256px", "margin": "0"}} alt="Landing template screenshot" />
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="templates/instaAlbum.html" class="card-footer-item">Download</a>
                        <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" class="card-footer-item">Learn
                        More</a>
                    </footer>
                </div>
            </div>
          );
    }
}
export default Public;