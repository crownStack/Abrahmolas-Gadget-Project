import React from "react";
import Footer from "./Footer";
import images from "../images/AbrahamolaLogo.png";

const NewPassword = () => {
    return (
        <> 
            <div className="header">
                <img src={images} alt="Abrahamola Logo" srcset="" />
                <p>Create a New password to Login</p> 
            </div>

            <section className="loginForm">
                <div className="columns">
                    <form action="GET" method="get">
                        <div className="column">
                            <div className="formGroup">
                                <label htmlFor="newPassword">New Password</label><br />
                                <input type="password" name="newPassword" id="newPassword" placeholder="Enter your New Password" />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="ComfirmPassword2">Comfirm Password</label><br />
                                <input type="password" name="ComfirmPassword2" id="ComfirmPassword2" placeholder="comfirm new password" />
                            </div>
                        </div>
                        <button type="submit">Sign in</button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default NewPassword