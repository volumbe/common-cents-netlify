import React from "react";
import "bulma";
import Header from "./Header";
import Footer from "./Footer";
import tree from "../images/sprouting-tree.png"

class BoxKPI extends React.Component {
  render() {
    return (
        <section>
            <div>
                <div class="container">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Members</p>
                        <p class="title">1.3k</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Chapters</p>
                        <p class="title">8</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Students Taught</p>
                        <p class="title">1.8k</p>
                        </div>
                    </div>
                    </nav>
                </div>
            </div> 
        </section>
    );
  }
}

export default BoxKPI;