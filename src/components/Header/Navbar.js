import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function Navbar() {

    const { isAuthenticated, dispatch } = useAuthContext();


    const handleLogout = (e) => {
        e.preventDefault()

        signOut(auth).then(() => {
            dispatch({ type: "LOGOUT" })

        })
            .catch((error) => {
                window.toastify("Something went wrong while logging out", "success")
                // An error happened.
                window.toastify("Something went wrong while logging out", "error")
            });
    }

    const toggleMenu = () => {
        nav.current.classList.toggle("active");
    };

    const nav = useRef(null);

    return (


        <>
            <header className="header">
                <div className="logo">
                    <img
                        src="https://res.cloudinary.com/dr7bhet2d/image/upload/v1730640962/logo_dzkfal.webp"
                        alt="Logo"
                    />
                    <span><Link to="/" style={{ textDecoration: "none", color: "white" }}>CodeCrafters</Link></span>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className="nav" ref={nav}>
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="nav-link" >My Notes</Link>
                            <Link to="/dashboard/notes" className="nav-link" >Add Notes</Link>

                            <Link to="/About">

                                <span className='test-white'>About</span>
                            </Link>
                            <Link to="/Contact">  <span className='test-white'>Contact</span> </Link>
                            <button className="btn btn-danger  btn-sm text-white " onClick={handleLogout} >Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/authentication/login">Login</Link>
                        </>
                    )}
                </nav>
            </header>


        </>
    )
}
