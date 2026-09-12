import React from "react";
import Footer from "./Footer";
import images from "../images/AbrahamolaLogo.png";

const CodeRequester = () => {
    return (
        <> 
            <div className="header">
                <img src={images} alt="Abrahamola Logo" srcset="" />
                <p>You can request a password reset below. We will send a securitycode<br />to the emaill address, please make sure it is correct.</p>
            </div>

            <section className="loginForm">
                <div className="columns">
                    <form action="GET" method="get">
                        <div className="column">
                            <div className="formGroup">
                                <label htmlFor="emailAddress">E-mail Address or Contact Number</label><br />
                                <input type="password" name="emailAddress" id="emailAddress" placeholder="Enter your E-mail Address or Contact Number" /><br />
                                <button type="button" className="CodeBtn">Send Security Code</button>
                            </div>

                            <div className="formGroup">
                                <label htmlFor="Code">Enter Code</label><br />
                                <input type="text" name="Code" id="Code" placeholder="000 000" />
                            </div>
                        </div>
                        <button type="submit">Continue</button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CodeRequester