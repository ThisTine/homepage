import Head from 'next/head'
import Hero from '../components/hero'
import {useEffect,useState} from 'react'
import About from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'
import Service from '../components/Services'
import Footer from '../components/Footer'



export default function Home() {
  const [ispopup,setispopup] = useState(false)
  const [ispopupshow,setispopupshow] = useState(true)
  const seo = {
    title : "Thistine | Sittichok ouamsiri (Tine)",
    description : "An official website of Sittichok Ouamsiri (Tine). A sutdent, photographer, fullstack developer, artist.",
    api : "https://api.thistine.com/",
    twiiterogimg : "https://www.thistine.com/img/twitterog-1.jpg",
    fbogimg : "https://www.thistine.com/img/fbog-1.jpg",
    ogtype: "website",
    weblink: "https://www.thistine.com/"
  }
  const popupclose = ()=>{
    setispopupshow(false)
    setTimeout(()=>{
      setispopup(false)
        setispopupshow(true)
    },500)

}
  const Popup = ({popset,ispopupshow})=>{
    return(
        <>
        <div className={ispopupshow ? "popup popup-show" : "popup popup-hide"}>
            <div className="gen-wrapper2 proj-pop-data" data-home="home">
                <div className="proj-pop-data-con" >
                <p className="proj-pop-data-close" onClick={()=>{popset()}}>&#10006;</p>
                    <h1 data-aos="fade" style={{fontSize:"3rem",borderBottom:"solid black 2px"}}> Contact </h1>
                    <h2><span className="ab-text-group-label">Email</span> <a className="proj-text btn" style={{color:"black"}} href="mailto:tine@thistine.com">tine@thistine.com</a> </h2>
                    <h2><span className="ab-text-group-label">facebook</span> <a className="proj-text btn" style={{color:"black"}} href="https://www.facebook.com/stg.tine/">Sittichok ouamsiri</a> </h2>
                    <h2><span className="ab-text-group-label">instragram</span> <a className="proj-text btn" style={{color:"black"}} href="https://www.instagram.com/stg_tine/">@stg_tine</a> </h2>
                    <h2><span className="ab-text-group-label">linkedin</span> <a className="proj-text btn" style={{color:"black"}} href="https://www.linkedin.com/in/thistine/">thistine</a> </h2>
                </div>
            </div>
            <div onClick={()=>{popset()}} className="popup-bg" data-aos="fade-in" data-aos-duration="250"></div>
        </div>
        
        </>
    )
  }

  return (
    <>
    {ispopup && <Popup popset = {popupclose} ispopupshow={ispopupshow}/>}
    <main>
      <Head>
        <title>Thistine | Sittichok ouamsiri (Tine) </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.weblink} />
        <meta itemProp="name" content={seo.title} />
        <meta itemProp="description" content={seo.description}/>
        <meta itemProp="image" content={seo.api+seo.fbogimg}/>
        <link rel="shortcut icon" href="/img/me.jpg" />
        <meta name="twitter:card" content={seo.twiiterogimg}/>
        <meta name="twitter:site" content="@sir_tine"/>
        <meta name="twitter:title" content={seo.title}/>
        <meta name="twitter:description" content={seo.description}/>
        <meta name="twitter:creator" content="@sir_tine" />
        <meta name="twitter:image:src"  content={seo.twiiterogimg} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content={seo.ogtype} />
        <meta property="og:url" content={seo.weblink} />
        <meta property="og:image" content={seo.fbogimg} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:site_name" content="Thistine" />
        <meta property="fb:app_id" content="2675212652744197" />
        <meta property="og:url" content={seo.weblink}/>
      </Head>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Gallery/>
      <Service setispopup={setispopup}/>
      <Footer/>
    </main>
    </>
  )
}
