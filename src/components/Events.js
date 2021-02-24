import React from "react";
import heroPic from "../images/Page-Graphic-1.png"
class Events extends React.Component{
    render(){
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
                        Events
                        </h1>
                        <h2 class="subtitle subtitled">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorum vitae dolores
                        nesciunt totam magni quas.
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
                <section class="hero is-medium has-carousel">
                    <div id="carousel-demo" class="hero-carousel">
                        <div class="item-1">
                            <p>Hi</p>
                        </div>
                        <div class="item-2">
                        <p>Hi</p>
                        </div>
                        <div class="item-3">
                        <p>Hi</p>
                        </div>
                    </div>
                    <div class="hero-head"></div>
                    <div class="hero-body"></div>
                    <div class="hero-foot"></div>
                </section>
                <div class="container">
                <div class="columns is-variable">
                    <div class="column">

                    <div class="tabs is-boxed is-centered">
                        <ul>
                        <li class="is-active" data-target="product-details">
                            <a>Product Details</a> 
                        </li>
                        <li data-target="delivery-information">
                            <a>Delivery Information</a>
                        </li>
                        <li data-target="upenn-events">
                            <a>UPenn</a>
                        </li>
                        <li data-target="cornell-events">
                            <a>Cornell</a>
                        </li>
                        </ul>
                    </div>
                    <div class="px-2" id="tab-content">
                        <div id="product-details">
                        <h3 class="is-size-5 title">Product Details</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit voluptates! Quisquam dolores distinctio minima eligendi, sint enim quaerat. Totam eaque eligendi quis, itaque beatae id sit fuga voluptatibus a autem debitis sequi, officiis dolores corporis! Necessitatibus, libero voluptate? Fuga, natus iusto! Perspiciatis iure officiis rerum, illo temporibus iusto voluptatum.</p>
                        </div>
                        <div id="delivery-information" class="is-hidden">
                        <h3 class="is-size-5 title">Delivery Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit voluptates! Quisquam dolores distinctio minima eligendi, sint enim quaerat. Totam eaque eligendi quis, itaque beatae id sit fuga voluptatibus a autem debitis sequi, officiis dolores corporis! Necessitatibus, libero voluptate? Fuga, natus iusto! Perspiciatis iure officiis rerum, illo temporibus iusto voluptatum.</p>
                        </div>
                        <div id="upenn-events" class="is-hidden">
                        <h3 class="is-size-5 title">Upenn Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit voluptates! Quisquam dolores distinctio minima eligendi, sint enim quaerat. Totam eaque eligendi quis, itaque beatae id sit fuga voluptatibus a autem debitis sequi, officiis dolores corporis! Necessitatibus, libero voluptate? Fuga, natus iusto! Perspiciatis iure officiis rerum, illo temporibus iusto voluptatum.</p>
                        </div>
                        <div id="cornell-events" class="is-hidden">
                            <h3 class="is-size-5 title">Cornell Information</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit voluptates! Quisquam dolores distinctio minima eligendi, sint enim quaerat. Totam eaque eligendi quis, itaque beatae id sit fuga voluptatibus a autem debitis sequi, officiis dolores corporis! Necessitatibus, libero voluptate? Fuga, natus iusto! Perspiciatis iure officiis rerum, illo temporibus iusto voluptatum.</p>
                            <div class = "columns">
                                <div class = "column">
                                    <div class="card">
                                        <header class="card-header">
                                            <p class="card-header-title">
                                            <span>InstaAlbum</span>
                                            <div class="tags is-pulled-right">
                                                <span class="tag is-default">v0.7.2</span>
                                                <span class="tag is-default">Desktop</span>
                                                <span class="tag is-default">Mobile</span>
                                            </div>
                                            </p>
                                        </header>
                                        <div class="card-content">
                                            <figure class="image">
                                            <img src="../images/instaalbum.png" alt="Product image" />
                                            </figure>
                                        </div>
                                        <footer class="card-footer">
                                            <a href="templates/instaAlbum.html" class="card-footer-item">Preview</a>
                                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" class="card-footer-item">Source
                                            Code</a>
                                        </footer>
                                    </div>
                                </div>
                                <div class = "column">
                                    <div class="card">
                                        <header class="card-header">
                                            <p class="card-header-title">
                                            <span>InstaAlbum</span>
                                            <div class="tags is-pulled-right"> 
                                                <span class="tag is-default">v0.7.2</span>
                                                <span class="tag is-default">Desktop</span>
                                                <span class="tag is-default">Mobile</span>
                                            </div>
                                            </p>
                                        </header>
                                        <div class="card-content">
                                            <figure class="image">
                                            <img src="../images/instaalbum.png" alt="Landing template screenshot" />
                                            </figure>
                                        </div>
                                        <footer class="card-footer">
                                            <a href="templates/instaAlbum.html" class="card-footer-item">Preview</a>
                                            <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" class="card-footer-item">Source
                                            Code</a>
                                        </footer>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
          );
    }
}
export default Events;