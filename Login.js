import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Import the CSS file

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login Successful");
            navigate("/lessons");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="auth-input" />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="auth-input" />
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p className="auth-text">
                    New User? <button onClick={() => navigate("/signup")}>Signup</button>
                </p>
            </div>
        </div>
    );
};

export default Login;
