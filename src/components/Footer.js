import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer class="footer is-primary">
                  <div class="content">
                      <div class="card column is-half is-offset-one-quarter">
                            <div class="card-content">
                            <p class="title">
                            Want to become a member?
                            </p>
                            <p class="subtitle">
                            Sign up for our newsletter.
                            </p>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="First Name"/>
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                   </p>
                                </div>
                                
                                <div class="field">
                                    <p class="control is-expanded has-icons-left has-icons-right">
                                        <input class="input" type="text" placeholder="Last Name" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class = "pt-4">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left has-icons-right">
                                        <input class="input" type="text" placeholder="Email"/>
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <hr></hr>
                            <div class="field-body">
                                <div class = "field">
                                    <div class="control is-expanded has-icons-left">
                                        <div class="select is-fullwidth">
                                            <select>
                                            <option disabled selected>Graduation Year</option>
                                            <option>2024</option>
                                            <option>2023</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            </select>
                                        </div>
                                        <span class="icon is-left">
                                            <i class="fas fa-graduation-cap"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class = "field">
                                    <div class="control is-expanded has-icons-left is-fullwidth">
                                        <div class="select is-fullwidth">
                                            <select>
                                            <option disabled selected>School</option>
                                            <option>Binghamton</option>
                                            <option>Cornell</option>
                                            <option>Johns Hopkins</option>
                                            <option>New York University</option>
                                            <option>Princeton</option>
                                            <option>UPenn</option>
                                            <option>Yale</option>
                                            </select>
                                        </div>
                                        <span class="icon is-left">
                                            <i class="fas fa-graduation-cap"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            </div>
                            <footer class="card-footer">
                            <p class="card-footer-item register">
                            <span>
                            Register
                            </span>
                            </p>
                            </footer>
                            </div>
                        </div>
                        <div class="container has-text-centered" style = {{"margin-bottom": "-4em"}}>
                            <span class="icon is-large">
                                <i class="fab fa-facebook-square fa-2x"></i>
                            </span>
                            <span class="icon is-large">
                                <i class="fab fa-instagram fa-2x"></i>
                            </span>
                            <span class="icon is-large">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </span>
                        </div>
            </footer>
        );
    }
}
export default Footer;