import Footer from "./Footer";
import images from "../images/AbrahamolaLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    });
    const [ showPassword, setShowpassword ] = useState(false)
    const [ error, setError ] = useState({ 
        email: '', 
        password: '' 
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newError = { email: '', password: '' }

        if(!formData.email || !formData.email.includes('@')) {
            newError.email = 'Valid Email with @ is required!!'
        };
  
        if(formData.password.length < 8) {
            newError.password = 'Please enter a valid Password!!'
        }

        setError(newError)
        if(newError.email || newError.password) return;

        navigate('/');
    }

    return (
        <> 
            <div className="header">
                <img src={images} alt="AbrahamolaLogo" />
                <h2>Welcome to Abrahamolas Gadgets</h2>
                <p>Enter your details to create an account with Abrahamolas Gadgets</p>
            </div>

            <section className="loginForm">
                <div className="columns">
                    <form onSubmit={handleSubmit}>
                        <div className="column">
                            <div className="formGroup">
                                <label>E-mail Address or Contact Number</label><br />
                                <div className="loginEmail">
                                    <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Enter your E-mail Address or Contact Number" />
                                </div>
                                { error.email && <p style={{ color: 'red', fontSize: '12px', fontWeight: 'bold', textAlign: 'left', position: 'relative', top: '-13px'}}>{error.email}</p> }
                            </div>

                            <div className="formGroup">
                                <label htmlFor="Password">Password</label><br />
                                <div className="loginPassword">
                                    <input style={{border: "none"}} type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} name="password" id="password" placeholder="Enter your password" />
                                    <span onClick={() => setShowpassword(!showPassword)} style={{ cursor: "pointer", fontSize: "30px", color: "black"}}>👁</span>
                                </div>
                                { error.password && <p style={{ color: 'red', fontSize: '12px', fontWeight: 'bold', textAlign: 'left', position: 'relative', top: '-13px'}}>{error.password}</p> }
                            </div>
                        </div>
                        <button type="submit">Sign in</button><br />
                        <p>Forgot Password?</p>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Login