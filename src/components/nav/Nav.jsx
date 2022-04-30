import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlineFolderOpen } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

import './nav.css'

const Nav = () => {

    const [actviceNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={actviceNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={actviceNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experiance" onClick={() => setActiveNav('#experiance')} className={actviceNav === '#experiance' ? 'active' : ''}><BiBook /></a>
            <a href="#service" onClick={() => setActiveNav('#service')} className={actviceNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={actviceNav === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={actviceNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
        </nav>
    )
}

export default Nav