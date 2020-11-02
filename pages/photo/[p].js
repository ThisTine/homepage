import fetch from 'isomorphic-fetch'
import {useEffect} from 'react'
import Head from 'next/head'
import { FaFirefoxBrowser, FaInstagram } from 'react-icons/fa'
import Footer from '../../components/Footer'
import Link from 'next/link'
import AOS from 'aos'
import { useRouter } from 'next/router'
const Photo = ({picdata,que})=>{
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
    const router = useRouter()
    const {p} = router.query
    console.log(p)
    const capital = (text)=>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
    // useEffect(()=>{
    //     if(!picdata){
    //         router.replace('/')
    //     }
    // },[])
        if(!picdata){
            return (
                <main style={{minHeight:"90vh"}}>
                    <div className="mob-pad"></div>
                    <title>There is an error finding this picture</title>
            <h1 style={{textAlign:"center",width:"100%",padding:"50px 0"}}>There is an error finding this picture</h1>
            </main>
            )
        }
    const seo = {
        title : `${picdata.caption} (${picdata.url}.jpg)| Tine.photographer | Sittichok ouamsiri (Tine) | Thistine`,
        description : `"${picdata.caption}" a picture/photo taken by Sittichok ouamsiri aka. Tine.photographer or Thistine seemore picture on an instragram @tine.photographer`,
        api : "https://api.thistine.com/",
        twiiterogimg : `https://storage.googleapis.com/thistinestorage/photos/${picdata.url}`,
        fbogimg : `https://storage.googleapis.com/thistinestorage/photos/${picdata.url}`,
        ogtype: "website",
        weblink: `https://www.thistine.com/photo/${que}/`
      }
    return(
        <>
        <Head>
        <title> {seo.title} </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.weblink} />
        <meta itemProp="name" content={seo.title} />
        <meta itemProp="description" content={seo.description}/>
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
        <main style={{minHeight:"90vh"}}>
            <div className="mob-pad"></div>
            <div className="gen-wrapper2">
            <img src={`https://storage.googleapis.com/thistinestorage/photos/${picdata.url}`} className="indpic" alt={`tine.photographer (Sittichok ouamsir)(Thistine) - ${picdata.caption}`}/>
            <div className="piccap">
            <h1>Tine.photographer - {capital(picdata.caption)}</h1>
            <h2>A picture taken by Sittichok ouamsiri aka Thistine or Tine.photographer</h2>
            <p>Filename - {picdata.url}</p>
            <div className="soc">
            <h2>Seemore pictures in my website or an instagram @tine.photographer </h2>
            <div className="piccap-soc">
                <a className="btn piccap-soc-btn"  data-soc="ig" href="https://www.instagram.com/tine.photographer/"> <FaInstagram/> </a>
                <Link href="/photos"><a className="btn piccap-soc-btn"><FaFirefoxBrowser/></a></Link>
            </div>
            </div>
            </div>
            </div>
            
        </main>
        <Footer/>
        </>
    )
}

export async function getServerSideProps({params}){
    const {p} = params;
    console.log(p + params)
    const picname = "DSC_1334"
    const fdatas =  await fetch('https://api.thistine.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        { searchphoto(fileSearch:"${picname}.jpg"){
            url
            caption
          }}
        ` }),
        })
    const jdata = await fdatas.json()
    return {props: {picdata: jdata.data.searchphoto,que: picname}}
}
export default Photo
