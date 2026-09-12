import React, { useState } from "react";
import Footer from "./Footer";
import images from "../images/AbrahamolaLogo.png";
import { useNavigate } from 'react-router-dom'

const Password = () => {
    const [ formData, setFormData ] = useState({
        createPassword: "",
        comfirmPassword: ""
    });
    const [ showPassword, setShowPasword ] = useState(false);

    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [ e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newError = {
            createPassword: "",
            comfirmPassword: ""
        }

        if(!formData.createPassword || formData.createPassword.length < 6) {
            newError.createPassword = 'password must at least 6 characters'
        }

         if (formData.comfirmPassword !== formData.createPassword) {
            newError.comfirmPassword = 'password not match'
        } 

        setError(newError);

        if(!formData.createPassword || !formData.comfirmPassword) return;

        try {
            const response = await fetch("http://localhost:5000/Password", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Password failed");
                return;
            }
            
            console.log("Password success:", data);
            localStorage.setItem("formData", JSON.stringify(formData));
            navigate("/Signin");
            } catch (error) {
                console.error("Password error:", error);
                alert("Something went wrong while signing up");
            }
        }

    return (
        <> 
            <div className="header">
                <img src={images} alt="Abrahamola Logo" />
                <h2>Welcome to Abrahamolas Gadgets</h2>
                <p>Enter your details to create an account with Abrahamolas Gadgets</p>
            </div>

            <section className="loginForm">
                <div className="columns">
                    <form onSubmit={handleSubmit}>
                        <div className="column">
                            <div className="formGroup">
                                <label htmlFor="createPassword">Create a new Password</label><br />
                                <div className="loginPassword">
                                    <input type="password" value={formData.createPassword} onChange={handleChange} name="createPassword" id="createPassword" placeholder="Enter a strong password" />
                                </div>
                                {error.createPassword && <p>{error.createPassword}</p>}
                            </div>

                            <div className="formGroup">
                                <label htmlFor="Password">Password</label><br />
                                <div className="loginPassword">
                                    <input type={ showPassword ? "text" : "password" } value={formData.comfirmPassword} onChange={handleChange} name="comfirmPassword" id="comfirmPassword" placeholder="Enter your password" />
                                <span onClick={ () => setShowPasword(!showPassword)} style={{cursor: "pointer", fontSize: "30px", color: "black"}}>👁</span></div>
                                {error.comfirmPassword && <p>{error.comfirmPassword}</p>}
                            </div>
                        </div>
                        <button type="submit">Create your Account</button>
                        <p>By creating an account you agree to our <br /> <span>Terms of service and privacy Policy.</span></p>
                    </form>
                </div>
            </section>
 
            <Footer />
        </>
    )
}

export default Password