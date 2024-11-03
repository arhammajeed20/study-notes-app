import React from "react";
import {
    MailOutlined,
    PhoneOutlined,
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-md-12 text-center">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <h5>About Us</h5>
                                <p>
                                    Learning Zone by <b>Muhammad Abdullah</b>
                                </p>
                            </div>
                            <div className="col-md-4 mb-4">
                                <h5>Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard/notes">My Notes</Link></li>
                                    <li><Link to="/About">About Us</Link></li>
                                    <li><Link to="/Contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-4">
                                <h5>Contact Information</h5>
                                <p><PhoneOutlined /> +92 3177408609</p>
                                <p><MailOutlined /> arham.king98@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a target="blank" href="https://facebook.com/abdullah_hu_ywr" className="social-icon"><FacebookOutlined /></a>
                                <a target="blank" href="https://github.com/arhammajeed20" className="social-icon"><GithubOutlined /></a>
                                <a target="blank" href="https://instagram.com/abdullah_hu_ywr" className="social-icon"><InstagramOutlined /></a>
                                <a target="blank" href="https://www.linkedin.com/in/arham-naveed-2011a2235/" className="social-icon"><LinkedinOutlined /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center mt-3">
                                <p>
                                    &copy; {new Date().getFullYear()} Powered by{" "}
                                    <a className="text-success" target="blank" href="https://github.com/arhammajeed20">Arham Naveed</a>.
                                    All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

