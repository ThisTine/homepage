import Swiper from 'react-id-swiper';
import Link from 'next/link'
const Gallery = ()=>{
    const params2 = {
        spaceBetween: 30,
        effect: 'fade',
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
            1024: {
            },
            768: {
            },
            640: {
                width:1000
            },
            320: {
                width:1000
            }
          }
        
    }
    const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }
        }
    return(
        <div className="Gallery">
            <div className="About-wrapper">
            <div className="About-container">
                <div className="Gallery-container" >
            <h1 className="Gallery-title" data-aos="zoom-in">Gallery</h1>
            <p className="Gallery-sec-title" data-aos="zoom-in" data-aos-delay="100">View my all of my gorgeous pictures.</p>
            <div className="swiper-test">
                <Swiper {...params}>
                    <img src="/img/DSC_1241-min.jpg" alt="friendship"/>
                    <img src="/img/DSC_2355-Edit-min.jpg" alt="stars"/>
                    <img src="/img/DSC_7084-Pano-2-Edit-min.jpg" alt="The light"/>
                    <img src="/img/DSD_5622-min.jpg" alt="Washington DC"/>
                    <img src="/img/DSC_6904-min.jpg" alt="country roads"/>
                    <img src="/img/DSD_0874-min.jpg" alt="Teacher's day"/>
                    <img src="/img/DSD_2444_2-min.jpg" alt="street"/>
                </Swiper>
            </div>
            <Link href="/photos" as="/photos" ><div className="div-btn" data-aos="flip-up"><a  className="btn About-btn color-green">Look up my gallery !</a></div></Link> 
            </div>
           
            </div>
            
            </div>
            <div className="Gallery-bg">
                <Swiper {...params2}>
                
                    <div><img className="img-o" style={{height:"100%"}} src="/img/DSC_1241-min.jpg"  alt="friendship"/></div>
                    <div><img className="img-o" style={{height:"100%"}} src="/img/DSC_2355-Edit-min.jpg" alt="stars"/></div>
                    <div><img className="img-o" style={{height:"100%"}}  src="/img/DSC_7084-Pano-2-Edit-min.jpg" alt="The light"/></div>
                    <div><img className="img-o" style={{height:"100%"}}  src="/img/DSD_5622-min.jpg"  alt="Washington DC"/></div>
                    <div><img className="img-o" style={{height:"100%"}}  src="/img/DSC_6904-min.jpg"  alt="country roads"/></div>
                    <div><img className="img-o" style={{height:"100%"}}  src="/img/DSD_0874-min.jpg" alt="Teacher's day"/></div>
                    <div><img className="img-o" style={{height:"100%"}}  src="/img/DSD_2444_2-min.jpg" alt="street"/></div>
                </Swiper>
            </div>
        </div>
        
    )
}

export default Gallery