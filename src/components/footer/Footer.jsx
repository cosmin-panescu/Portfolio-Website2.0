import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Pănescu Cosmin</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a href="#resources" className="footer-link">Resources</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://github.com/cosmin-panescu" className='footer-social-link' target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cosmin-p%C4%83nescu-29430823b/" className='footer-social-link' target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/pane_cosmin/" className='footer-social-link' target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>

                <span className="footer-copy">
                    <h3>Legal:</h3>
                    <p>Legal name: PĂNESCU VASILE-COSMIN P.F.A.</p>
                    <p>CUI: 46694970</p>
                    <p>Address: Str. Calea Tismanei Nr. 11, Însurăței, GJ, RO</p>
                    <br />
                    &#169; Pănescu Cosmin. All rights reserved
                </span>
            </div>
        </footer >
    )
}

export default Footer