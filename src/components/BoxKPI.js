import React from "react";
import "bulma";
import useScript from './hooks/useScript';


function BoxKPI() {

    useScript("numscroller-1.0.js");

    return (
        <section>
            <div>
                <div class="container">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                        <span class='numscroller-info-top icon is-large has-text-info title py-6 is-size-1'><i class = "fas fa-user fa-2x"></i></span>
                        <p class='numscroller numscroller-big-bottom title py-2' data-slno='1' data-min='0' data-max='1605' data-delay='10' data-increment="9">0</p>
                        <p class="subtitle py-3">Members</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                    <div>
                        <span class='numscroller-info-top icon is-large has-text-warning title py-6 is-size-1'><i class = "fas fa-university fa-2x"></i></span>
                        <p class='numscroller numscroller-big-bottom title py-2' data-slno='1' data-min='0' data-max='8' data-delay='1' data-increment="1">0</p>
                        <p class="subtitle py-3">Chapters</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <span class='numscroller-info-top icon is-large has-text-danger py-6 is-size-1'><i class = "fas fa-users fa-2x"></i></span>
                        <p class='numscroller numscroller-big-bottom title py-2' data-slno='1' data-min='0' data-max='1879' data-delay='10' data-increment="9">0</p>
                        <p class="subtitle py-3">Students Taught</p>
                        </div>
                    </div>
                    </nav>
                </div>
            </div> 
        </section>
    );
  }

export default BoxKPI;