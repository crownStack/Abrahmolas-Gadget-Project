import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="homeFooter">
                <div>
                    <ul>
                        <h2>Explore</h2>
                        <li>E-commerce</li>
                        <li>Repair Services</li>
                        <li>Insurance Services</li>
                    </ul>

                    <ul>
                        <h2>Help</h2>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privancy Policy</li>
                        <li>Tech News</li>
                        <li>Live Chat</li>
                    </ul>

                    <ul>
                        <h2>Find Us</h2>
                        <li><i class="fa-brands fa-instagram"></i>Instagram</li>
                        <li><i class="fa-solid fa-phone"></i>Contact No.</li>
                        <li><i class="fa-solid fa-envelope"></i>E-Mail Address</li>
                        <li><i class="fa-solid fa-location-dot"></i>21, Kodesho street, beside juli<br /> pharmacy, ikeja, lagos.</li>
                    </ul>

                    <div className="subscribe">
                        <form action="GET">
                            <label>Subscribe to our News letter</label><br />
                            <input type="text" name="subscribeNews" id="subscribeNews" placeholder="Enter your E-mail Address" /><br/ >
                            <button type="submit">Subscribe<i class="fa-solid fa-bell"></i></button>
                        </form>
                    </div>
                </div>
                <p className="reserved">2024 @ Abrahamolas Gadgets. All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer