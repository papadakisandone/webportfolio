import React,{useState} from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {GiClassicalKnowledge} from "react-icons/gi";
import {IoMdCodeWorking} from "react-icons/io";
import {AiOutlineMessage} from "react-icons/ai";

import "./nav.css";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")  

    return (
        <nav>
            <a href="#" title="Home" className={activeNav==="#" ? "active" :""} onClick={()=>setActiveNav("#")}><AiOutlineHome/></a>
            <a href="#about" title="About" className={activeNav==="#about" ? "active" :""} onClick={()=>setActiveNav("#about")}><BsInfoCircle/></a>
            <a href="#experience" title="Experience" className={activeNav==="#experience" ? "active" :""} onClick={()=>setActiveNav("#experience")}><GiClassicalKnowledge/></a>
            <a href="#portfolio" title="Portfolio" className={activeNav==="#portfolio" ? "active" :""} onClick={()=>setActiveNav("#portfolio")}><IoMdCodeWorking/></a>
            <a href="#contact" title="Contact" className={activeNav==="#contact" ? "active" :""} onClick={()=>setActiveNav("#contact")}><AiOutlineMessage/></a>
        </nav>
    );
};

export default Nav;