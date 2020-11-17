import AboutProgress from "../components/about-progress";
import Footer from "../components/Footer";
import Head from 'next/head'
import {useState,useEffect} from 'react'
// import { useQuery, gql } from '@apollo/client';
import Errors from "../components/Errors";


import AOS from 'aos'

const About =({ loading, error, data })=>{
    useEffect(()=>{
        AOS.init({
          duration : 1000
        })
      },[])
      useEffect(()=>{
        const timer = setTimeout(() => {
          AOS.refresh();
        }, 300);
        return ()=> clearTimeout(timer)
      })
    const [iserror,setiserror] = useState(false)
    const Moredata = ()=>{
        if(error){return (
            setiserror(true)
        )}
        if(loading){return (<div className="loadercontainer"><div className="loader"></div></div>)}
            return data.awards.map((item)=>{
                return(
                    <div className="certi-card" key={item._id}>
                        <h1>{item.place}</h1>
                        {item.name}
                        <br/>
                        {item.location} ({item.year})
                    </div>
                )
            })

    }


    
    const age = ()=>{
        const birthdate = new Date(2003,2,14)
        const diffDate = Date.now() - birthdate.getTime()
        const age_d = new Date(diffDate)

        return Math.abs(age_d.getUTCFullYear() - 1970)
     } ;
    const seo = {
        title : "About Tine | Sittichok ouamsiri (Thistine)",
        description : `Sittichok Ouamsiri or Tine or Thistine for short.A ${age()} years old student.Know more about my basic skills,awards,favorite`,
        api : "https://api.thistine.com/",
        twiiterogimg : "https://www.thistine.com/img/twitterog-1.jpg",
        fbogimg : "https://www.thistine.com/img/fbog-1.jpg",
        ogtype: "website",
        weblink: "https://www.thistine.com/about"
      }

    return(
        <main>
        {iserror && <Errors seterror={setiserror}/>}
        <Head>
        <title>About Tine | Sittichok ouamsiri (Tine) </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={`${seo.description} ${data.awards.map(item=>(`${item.place}-${item.name}(${item.year})`))}`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:standard, max-video-preview:-1" />
        <link rel="canonical" href={seo.weblink} />
        <meta itemProp="name" content={seo.title} />
        <meta itemProp="description" content={`${seo.description} ${data.awards.map(item=>(`${item.place}-${item.name}(${item.year})`))}`}/>
        <meta itemProp="image" content={seo.fbogimg}/>
        <link rel="shortcut icon" href="/img/me.jpg" />
        <meta name="twitter:card" content="summary_large_image"/>
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
        <div className="mob-pad"></div>
        <div className="gen-wrapper">
            <div className="ab-profile" id="profile">
            <div className="heading">
            <h1 className="heading-head sans" style={{textTransform:"uppercase"}} data-aos="fade-in">Profile</h1>
            </div>
            <div className="ab-wrap-haf">
                <div className="ab-haf ab-mob-hide">
                <img src="/img/me.jpg" width="100%" alt="Sittichok ouamsiri"/>
                </div>
                <div className="ab-haf">
                    <h1 className="sans ab-fullname" style={{fontStyle:"italic"}} data-aos="fade-up">📖 Sittichok ouamsiri</h1>
                    <h1 className="sans ab-nickname" data-aos="fade-up" data-aos-delay="100">✎ Tine</h1>
                    <div className="ab-text-group" data-aos="fade-up"  data-aos-delay="150">
                        <p className="ab-text-group-label">Birthday</p>
                        <p className="ab-text-group-text">🎂 14 Feb 2003 <span className="ab-text-group-old" data-aos="fade-up">{age()} years old</span>  </p>
                    </div>
                    <div className="ab-text-group" data-aos="fade-up"  data-aos-delay="200">
                        <p className="ab-text-group-label">Sex</p>
                        <p className="ab-text-group-text">👱 Male</p>
                    </div>
                    <div className="ab-text-group" data-aos="fade-up"  data-aos-delay="250">
                        <p className="ab-text-group-label">Nationality</p>
                        <p className="ab-text-group-text">🗺 Thai</p>
                    </div>
                    <div className="ab-text-group" data-aos="fade-up"  data-aos-delay="300" data-aos-anchor-placement="top">
                        <p className="ab-text-group-label">Favorites</p>
                        <p className="ab-text-group-text">📷 Photograph,💻 Coding</p>
                    </div>
                    
                    </div>
            </div>
            </div>
            <div className="ab-skills">
            <h1 className="heading-head sans" style={{textAlign:"start"}}>Skills</h1>
            <div className="ab-skills-haf-warp">
                <div className="ab-skills-haf">
                    <h1 className="sans ab-skill-sec-head">Languages</h1>
                    <AboutProgress width="96%" bg="#e74c3c" ani={{data:"flip-up",delay:"50"}} title="HTML & CSS"/>
                    <AboutProgress width="92%" bg="#f1c40f" ani={{data:"flip-up",delay:"75"}} title="Javascript & Typescript"/>
                    <AboutProgress width="90%" bg="#6EC1E4" ani={{data:"flip-up",delay:"100"}} title="PHP"/>
                    <AboutProgress width="80%" bg="#3498db" ani={{data:"flip-up",delay:"125"}} title="Python"/>
                    <AboutProgress width="88%" bg="#e67e22" ani={{data:"flip-up",delay:"150"}} title="SQL"/>
                    <AboutProgress width="75%" bg="#e67e22" ani={{data:"flip-up",delay:"175"}} title="C++/C#"/>
                    <AboutProgress width="70%" bg="#2980b9" ani={{data:"flip-up",delay:"200"}} title="Dart"/>
                    <AboutProgress width="70%" bg="#2980b9" ani={{data:"flip-up",delay:"225"}} title="kotlin"/>
                    <AboutProgress width="65%" bg="#f39c12" ani={{data:"flip-up",delay:"250"}} title="Java"/>
                </div>
                <div className="ab-skills-haf">
                <h1 className="sans ab-skill-sec-head" style={{whiteSpace:"normal"}}>Library/Frameworks</h1>
                    <AboutProgress width="92%" bg="#8bf6ff" ani={{data:"flip-up",delay:"50"}} title="React"/>
                    <AboutProgress width="90%" bg="#087f23" ani={{data:"flip-up",delay:"75"}} title="NodeJS"/>
                    <AboutProgress width="92%" bg="#8bf6ff" ani={{data:"flip-up",delay:"100"}} title="ReactNative"/>
                    <AboutProgress width="80%" bg="#ffeb3b" ani={{data:"flip-up",delay:"125"}} title="Jquery"/>
                    <AboutProgress width="65%" bg="#001064" ani={{data:"flip-up",delay:"150"}} title="Nextjs"/>
                    <AboutProgress width="75%" bg="#03a9f4" ani={{data:"flip-up",delay:"175"}} title="Flutter"/>
                    <AboutProgress width="75%" bg="#2e7d32" ani={{data:"flip-up",delay:"200"}} title="Django"/>
                    <AboutProgress width="70%" bg="#8e44ad" ani={{data:"flip-up",delay:"225"}} title="Bootstrap"/>
                    <AboutProgress width="65%" bg="#e74c3c" ani={{data:"flip-up",delay:"250"}} title="Vuejs & Angularjs"/>
                </div>
            </div>
            </div>
            <div className="ab-awards">
            <h1 className="heading-head" style={{textAlign:"start"}}>Awards&Activites</h1>
            <h1 className="sans ab-skill-sec-head" style={{margin:"0 20px"}}>My awards/activites/certificates</h1>
            <div className="certi">
                <Moredata />
            </div>
            </div>
        </div>
        <Footer/>
        </main>


        
    )
}

export async function getStaticProps(){
    const fdatas =  await fetch('https://api.thistine.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        { awards{
            place
            name
            _id
            location
            year
          }}
        ` }),
        })
    const jdata = await fdatas.json()
    
    return { props: {loading : false, data : jdata.data,error: jdata.errors || null}
        ,revalidate: 20
}
} 

export default About