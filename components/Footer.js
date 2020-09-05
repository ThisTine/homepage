import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaYoutube,FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'
const Footer = ()=>{
    return(
        <div className="Footer">
            <div className="Footer-container">
                <div className="Footer-top">
                    <div className="Footer-Social">
                            <a href="https://www.facebook.com/stg.tine/" className="social-btn"><FaFacebookF/></a>
                            <a href="https://www.instagram.com/stg_tine/" className="social-btn"><FaInstagram/></a>
                            <a href="https://twitter.com/sir_tine" className="social-btn"><FaTwitter/></a>
                            <a href="https://github.com/ThisTine" className="social-btn"><FaGithub/></a>
                            <a href="https://www.youtube.com/channel/UC_Oh2Za4AiLaKRytR5IXobw" className="social-btn"><FaYoutube/></a>
                            <a href="https://www.linkedin.com/in/thistine/" className="social-btn"><FaLinkedinIn/></a>
                        </div>
                </div>
                <div className="Footer-menu">
                    <div className="Footer-nav">
                    <Link href="/" as="/" ><a >Home</a></Link>
                    <Link href="/about" as="/about" ><a >About</a></Link>
                    <Link href="/projects" as="/projects" ><a >Project</a></Link>
                    <Link href="/photos" as="/photos" ><a >Gallery</a></Link>
                        </div>
                </div>
                <div className="Footer-bottom">
                    <p>	&copy; Copyright all rights reserved - Thistine.com</p>
                </div>
            </div>
        </div>
    )
}
export default Footer