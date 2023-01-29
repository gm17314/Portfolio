import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import './Navbar.css'
import { Link } from 'react-scroll';
// import logo from '../Image/logo.PNG'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav id="navbar">
            <div className="logo">Gaurav Maurya</div>
            <div className="hamburger" onClick={() => setOpen(!open)}>{open ? <CgClose /> : <HiOutlineMenu />}</div>
            <ul className={`nav-menu ${open ? "activa5g" : ""}`}>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpen(!open)}>Home</Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpen(!open)}>AboutUs</Link>
                </li>
                <li>
                    <Link to="project" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpen(!open)}>Projects</Link>
                </li>
                <li>
                    <Link to="skill" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpen(!open)}>Skills</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpen(!open)}>Contact</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
