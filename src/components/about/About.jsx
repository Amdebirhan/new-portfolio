import React from 'react'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import './about.css'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BsAward className="about__icon" />
                            <h5>Experiance</h5>
                            <small>1+ year working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>10+ Clients</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed </small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk.</a>
                </div>
            </div>
        </section>
    )
}

export default About