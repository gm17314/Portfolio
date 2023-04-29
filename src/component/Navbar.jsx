import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import './Navbar.css'
import styled from 'styled-components';
import { Circle } from 'rc-progress'
import { Link } from 'react-scroll';
import { green } from './Common';
// import logo from '../Image/logo.PNG'

const Div = styled.div`
    width:6rem;
    height:6rem;
    position: absolute;
    top:10%;
    left: 3.5%;
    @media (max-width:620px){
        width:6rem;
        height:6rem;
    }
`

const Span = styled.span`
    font-family: "Gabriela";
    color: #1ce480;
    font-size: 2.7rem;
    font-weight: bold;
    position: absolute;
    left: 14%;
    top:20%;
    border-radius: 50%;
    background-color: #027a02;
    box-shadow: 0 0 5rem 2rem ${green};
    @media (max-width:620px){
        font-size: 2.7rem;
        top: 19%;
    }
`

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav id="navbar">
            <div className="logo">
                <Div>
                    <Circle percent={100} strokeWidth={5} strokeColor={green} trailWidth={5} trailColor={"#9ac79a"}>
                    </Circle>
                    <Span>GM</Span>
                </Div>
            </div>
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
