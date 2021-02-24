import React from 'react';
import logo from "../images/CC-black-transparent-logo.png";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <nav class="navbar">
            <div class="container">

              <div class="navbar-brand">
                <a class="navbar-item" href="../">
                  <img src={logo} alt="Logo"/>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>

              <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                  {/* <div class=" navbar-item">
                    <div class="control has-icons-left">
                      <input class="input is-rounded" type="email" placeholder="Search"/>
                      <span class="icon is-left">
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
                  </div> */}
                  <Link class="navbar-item is-active is-size-5 has-text-weight-semibold" to="/">
                    Home
                  </Link>
                <Link class="navbar-item is-size-5 has-text-weight-semibold" to="/about">
                    About
                  </Link>
                  {/* <Link class="navbar-item is-size-5 has-text-weight-semibold" to = "/events">
                    Events
                  </Link> */}
                  <Link class="navbar-item is-size-5 has-text-weight-semibold" to = "/marketplace">
                    Marketplace
                  </Link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-size-5 has-text-weight-semibold">
                    Campuses
                    </a>

                    <div class="navbar-dropdown is-boxed" style = {{'text-size': '20em'}}>
                        <Link class="navbar-item" to = "/penn">
                            University of Pennsylvania
                        </Link>
                        <Link class="navbar-item" to = "/cornell">
                            Cornell University
                        </Link>    
                        <Link class="navbar-item" to = "/jhu">
                            Johns Hopkins University
                        </Link>
                        <Link class="navbar-item" to = "/yale">
                            Yale University
                        </Link>
                        <Link class="navbar-item" to = "/nyu">
                            New York University
                        </Link>
                        <Link class="navbar-item" to = "/">
                            Binghamton University
                        </Link>
      
                        <Link class="navbar-item" to = "/">
                            Princeton University
                        </Link>  
                       
                        <hr class="navbar-divider"/>
                        <a class="navbar-item">
                            Join
                        </a>
                    </div>
                </div>
                  {/*
                  <div class="navbar-item has-dropdown is-hoverable is-mega">
                    <div class="navbar-link flex is-size-5 has-text-weight-semibold">
                    Campuses
                    </div>
                    <div id="blogDropdown" class="navbar-dropdown is-fullwidth" data-style="width: 18rem;">
                    <div class="container is-fluid">
                        <div class="columns">
                             <div class="column">
                                <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">
                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">
                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">
                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>
                            </div>
                            <div class="column">
                                <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">

                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>
                                <a class="navbar-item " href="/documentation/overview/start/">
                                Overview
                                </a>
                                <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                                Modifiers
                                </a>
                                <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                                Columns
                                </a>
                            </div> 
                            <div class="column">
                                <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">
                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">
                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>
                                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                                <div class="navbar-content">
                                    <p>
                                    <small class="has-text-info">03 Aug 2017</small>
                                    </p>
                                    <p>New feature: list of tags</p>
                                </div>
                                </a>

                            </div>
                            <div class="column">
                                <h1 class="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                <a class="navbar-item " href="/documentation/overview/start/">
                                Overview
                                </a>
                                <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                                Modifiers
                                </a>
                                <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                                Columns
                                </a>
                                <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
                                Layout
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr class="navbar-divider"/>
                    <div class="navbar-item">
                        <div class="navbar-content">
                            <div class="level is-mobile">
                                <div class="level-left">
                                    <div class="level-item">
                                        <strong>Stay up to date!</strong>
                                    </div>
                                </div>
                                <div class="level-right">
                                    <div class="level-item">
                                        <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                                        <span class="icon is-small">
                                            <i class="fa fa-rss"></i>
                                        </span>
                                        <span>Subscribe</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  */}

                </div>  
            </div>
            </div>
          </nav>
        );
    }
}
export default withRouter(Header);