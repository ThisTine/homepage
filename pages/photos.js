import SimpleReactLightbox,{ SRLWrapper } from "simple-react-lightbox";
import Swiper from 'react-id-swiper'
import Footer from "../components/Footer";
import {gql, useQuery} from '@apollo/client'
import {useEffect,useState} from 'react'
import Head from 'next/head'
const query = gql`query{
    photos{
      url
      caption
    }
  }`

const Photos =()=>{
    const [iserror,setiserror] = useState(false)
    const [picdata , setpicdata] = useState(["DSC_2462.jpg","DSC_0946_1.jpg","DSC_0946_1.jpg","DSC_0946_1.jpg"])
    const {data,loading,error} = useQuery(query)
    useEffect(()=>{
        if(!loading){
            const rng = Math.floor(Math.random() * (data.photos.length-4));  
            const phot = data.photos
            setpicdata([phot[rng].url ,phot[rng+1].url,phot[rng+2].url,phot[rng+3].url] )
        }
    },[loading])
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }
      const textcut= (text)=>{
        if(text.length >= 30){
            return text.slice(0,27) + "..."
        }else{
            return text
        }
    }
    const options = {
        settings : {
            disablePanzoom : true
        },
        thumbnails:{
            showThumbnails : false
        },
        buttons: {
            showDownloadButton : false
        }
    }
    const seo = {
        title : "Tine.photographer | Sittichok ouamsiri (Tine)",
        description : "My picture gallery under the name Tine.photographer.",
        twiiterogimg : "https://www.thistine.com/img/tinephotograpgerogtw.jpg",
        fbogimg : "https://www.thistine.com/img/tinephotograpgerog.jpg",
        ogtype: "thistine:photos",
        weblink: "https://www.thistine.com/photos/"
      }
    const textsplit = (text)=>{
        const split = text.split(".jpg");
        return split[0]
    }
    const Loadgallery = ()=>{
        if(error){return (
            setiserror(true)
        )}
        if(loading){return (<div className="loadercontainer"><div className="loader"></div></div>)}
        return (<div className="gallery-ga">
                {data.photos.map((item)=>{ return(
                <div className="Img-gallery-con" key={Math.random()} > 
                <div data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100" data-aos-offset="0" >
                <p className="Img-gallery-txt sans" data-aos="fade-up">{textcut(item.caption)}</p>
                <a href={`https://storage.googleapis.com/thistinestorage/photos/${item.url}`} data-attribute="SRL">
                <img className="Img-gallery" src={`https://storage.googleapis.com/thistinestorage/minpic/${textsplit(item.url)}-min.jpg`} alt={item.caption} />
                </a>
                </div>
                </div>
            )
        })}</div>)
    }
    return(
        <>
        <Head>
        <title>Tine.photographer | Sittichok ouamsiri (Tine) </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.weblink} />
        <meta itemProp="name" content={seo.title} />
        <meta itemProp="description" content={seo.description}/>
        <meta itemProp="image" content={seo.fbogimg}/>
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
        <SimpleReactLightbox>
        <main style={{background: "#fafafa"}}>
        <div className="mob-pad"></div>
            <h1 className="heading-head heading-gallery sans" data-aos="fade">Tine.Photographer's Gallery</h1>
            <div className="gen-wrapper" >
         <div className="gallery-wrp" data-aos="fade-in" data-aos-duration="1000" style={{background:"white"}}>
{ !loading &&   <div data-aos="fade"><Swiper {...params}>
                <div className="img-slider" data-aos="fade" style={{backgroundImage:`url(https://storage.googleapis.com/thistinestorage/minpic/${textsplit(picdata[0])}-min.jpg)`}}></div>
                <div className="img-slider" data-aos="fade" style={{backgroundImage:`url(https://storage.googleapis.com/thistinestorage/minpic/${textsplit(picdata[1])}-min.jpg)`}}></div>
                <div className="img-slider" data-aos="fade" style={{backgroundImage:`url(https://storage.googleapis.com/thistinestorage/minpic/${textsplit(picdata[2])}-min.jpg)`}}></div>
                <div className="img-slider" data-aos="fade" style={{backgroundImage:`url(https://storage.googleapis.com/thistinestorage/minpic/${textsplit(picdata[3])}-min.jpg)`}}></div>
            </Swiper></div>}
            </div>

            </div>
            <div className="intro gen-wrapper2">
                <h2 className="intro-h">I've been taking a picture since 2010 and starting my (kind of) business under the name Tine.photographer.these are some of my beatiful pictures</h2>
            </div>
            <div className="gen-wrapper">
            <SRLWrapper options={options}>
                <Loadgallery/>
            </SRLWrapper>
            </div>
            <Footer/>
        </main>
        </SimpleReactLightbox>
        </>
    )
}

export default Photos