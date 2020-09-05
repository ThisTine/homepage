import Link from 'next/link'

const About = ()=>{
    return(
        <div className="About">
            <div className="About-wrapper">
                <div className="About-container">

                <div className="half">
                    <img  data-aos="fade-left" className="About-img" alt="me" src="/img/me.jpg" width="100%" data-aos-delay="500"/>
                </div>
                <div className="half About-text">
                    <h1 className="About-text-h1" data-aos="fade-down">About me</h1>
                    <p className="About-text-p" data-aos="fade-right" data-aos-delay="500">Hi ! I’m tine ( Sittichok Ouamsiri).I was born in 14 Feb 2003. Now I’m a student in Thailand.I love to travel, eat, sleep and have fun !.  I’m intrested in Marketing, Programing , Photo/Videography and I (sometime) work as a photography and programming as well. </p>
                    <div data-aos="fade" data-aos-delay="550">
                    <Link href="/about" as="/about" ><a className="btn About-btn color-green">Look up my profile</a></Link>    
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default About