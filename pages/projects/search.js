
import {useState,useEffect,useRef,useContext} from 'react'
import Footer from '../../components/Footer'
import {gql , useQuery, from} from '@apollo/client'
import Head from 'next/head'
import { FaGithub, FaDownload, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import {GoBrowser} from 'react-icons/go'
import {useRouter} from 'next/router'
import Errors from '../../components/Errors'
const Popup = ({props,popset,ispopupshow})=>{
    return(
        <>
        <div className={ispopupshow ? "popup popup-show" : "popup popup-hide"}>
            <div className="gen-wrapper2 proj-pop-data">
                <div className="proj-pop-data-con">
                <p className="proj-pop-data-close" onClick={()=>{popset()}}>&#10006;</p>
                    <h1 data-aos="fade-left" > {props.name} </h1>
                    <h2><span className="ab-text-group-label">Description</span> <span className="proj-text">{props.description}</span>  </h2>
                    <h2> <span className="ab-text-group-label">Year</span> <span className="proj-text">{props.year}</span> </h2>
                    {props.language && (<h2><span className="ab-text-group-label">Language</span> <span className="proj-text">{props.language}</span> </h2>)}
                    {props.framework && (<h2><span className="ab-text-group-label">framework/Runtime</span>  <span className="proj-text">{props.framework}</span> </h2>)}
                    <div>
                    {props.github && (<a href={props.github} target="_blank"><FaGithub/></a> )}
                    {props.website && (<a href={props.website} target="_blank"><GoBrowser/></a> )}
                    {props.googleplay && (<a href={props.googleplay} target="_blank"><FaDownload/></a> )}
                    {props.youtube && (<a href={props.youtube } target="_blank"><FaYoutube/></a> )}
                    {props.instagram && (<a href={props.instagram} target="_blank"><FaInstagram/></a> )}
                    {props.facebook && (<a href={props.facebook} target="_blank"><FaFacebook/></a> )}
                    </div>
                </div>
            </div>
            <div onClick={()=>{popset()}} className="popup-bg" data-aos="fade-in" data-aos-duration="250"></div>
        </div>
        
        </>
    )
}

const que = gql`query{
    projects{
  _id
      name
      year
      description
      type
      language
      framework
      facebook
      instagram
      youtube
      website
      googleplay
      github
    }
    }`

const search =()=>{
    const [iserror,setiserror] = useState(false)
    const inputref = useRef()
    const router = useRouter()
    const seo = {
        title : "Tine.photographer | Sittichok ouamsiri (Tine)",
        description : "An information about (sittichok oaumsiri) Thistine's projects. Randomi, Typing effect, shorturl, Ouropinion",
        api : "https://api.thistine.com/",
        twiiterogimg : "https://www.thistine.com/img/twitterog-1.jpg",
        fbogimg : "https://www.thistine.com/img/fbog-1.jpg",
        ogtype: "website",
        weblink: "https://www.thistine.com/projects/Search"
      }
    
    const [ispopup,setispop] = useState(false)
    const [popdata,setpopdata] = useState({})
    const {loading,data,error} = useQuery(que)
    const [ispopupshow,setispopupshow] = useState(true)

    const [text,settext] = useState()
    const [processdata,setprocessdata] = useState([])
    useEffect(()=>{
        inputref.current.focus()
    },[])
    useEffect(()=>{
        if(text){
            let obj = data.projects.filter(o=> o.name.toLowerCase().includes(text.toLowerCase()))
            if(obj){
                setprocessdata(obj)
            }
            
        }else{
            if(loading === false){
                setprocessdata(data.projects)
            }
            
        }
    },[text])
    useEffect(()=>{
        if(loading === false){
            setprocessdata(data.projects)
        }
    },[loading])
    const textcut= (text)=>{
        if(text.length >= 60){
            return text.slice(0,57) + "..."
        }else{
            return text
        }
    }

    const Pjset = ()=>{
        if(error){return (
            setiserror(true)
        )}
        if(loading){return (<div className="loadercontainer"><div className="loader"></div></div>)}
       return processdata.map(item=>(
            <div className="proj-card" key={Math.random()} onClick={()=>{setispop(true);setpopdata(item)}} >
            <h1>{item.name}</h1>
            <p> {textcut(item.description)} </p>
            <p className="proj-card-p">{item.type}</p>
            </div>
            ))
    }
    const popupclose = ()=>{
        setispopupshow(false)
        setTimeout(()=>{
            setispop(false)
            setispopupshow(true)
        },500)

    }
    return(
        <main>
    {iserror && <Errors seterror={setiserror}/>}
    <Head>
    <title>Projects | Sittichok ouamsiri (Tine) </title>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content={seo.description} />
    <link rel="canonical" href={seo.weblink} />
    <meta itemProp="name" content={seo.title} />
    <meta itemProp="description" content={seo.description}/>
    <meta itemProp="image" content={seo.api+seo.fbogimg}/>
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
    <meta name='robots' content="noindex" />
  </Head>
        {ispopup && ( <Popup props={popdata} popset={()=>{popupclose()}} ispopupshow={ispopupshow}/>)}
        <div className="mob-pad"></div>
        <div className="gen-wrapper2">
            <div className="pj-heading">
            <div className="heading">
            <h1 className="heading-head sans" style={{textTransform:"uppercase"}}>Project</h1>
            <div className="pj-search">
            <p className="pj-search-text">search</p>
            <div className="pj-search-input">
            <input className="pj-search-useless-input" ref={inputref} defaultValue={search} onChange={e=>{ e.preventDefault;
                if(!e.target.value){
                   return router.replace('/projects')
                } settext(e.target.value)
                
                }} />

            <span className="pj-search-line"></span>
            </div>
            
            </div>
            <div className="intro">
                <h2 className="intro-h">These are all my fun projects.I've been working with these projects just for fun. most of them are open-source so feel free to use it as you like !</h2>
            </div>
            </div>
            
        </div>

        <div className="proj">
            <Pjset />
        </div>
        </div>
        <Footer/>
        </main>
    )
}

export default search