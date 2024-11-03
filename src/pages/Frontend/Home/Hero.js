import React from 'react'
import logo from '../../../Assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';

export default function Hero() {
    const navigate = useNavigate();
    const { isAuthenticated, dispatch } = useAuthContext()

    return (
        <>
            <section className="hero container-fluid mt-4 mb-3">
                <div className="hero-image">
                    <img src={logo}
                        alt="Boy listening to music" />
                </div>
                
                <div className="hero-content">
                    <h1>Welcome to CollabNotes By <b>Arham</b></h1>
                    <button
                        className="my-3 btn"
                        onClick={() => {
                            !isAuthenticated ?
                            navigate("/authentication/login") : navigate('/dashboard')
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </section>
            
        </>
    )
}
