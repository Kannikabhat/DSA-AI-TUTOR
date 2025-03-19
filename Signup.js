import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Import the CSS file

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            navigate("/login");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Signup</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="auth-input" />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="auth-input" />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="auth-input" />
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                <p className="auth-text">
                    Already have an account? <button onClick={() => navigate("/login")}>Login</button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
