import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'></a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experiance</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testmonial</a></li>
                <li><a href="#">Contact </a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://twitter.com"><FiTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Black Land Designs. All Right Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer