import Link from 'next/link'

import Swiper from 'react-id-swiper';
const Service = ({setispopup})=>{
        const params = {

            
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },
            breakpoints: {
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                  loop: false,
                  pagination: {
                  },
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  loop: false,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  loop: false,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                },
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  loop: false,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                }
              }
            }
return(
    
    <div className="Service">
       <div className="About-wrapper">
            <div className="About-container">
                <div className="Gallery-container" >
                    <h1 className="Service-title">Services/Works</h1>
                    <p className="Service-sec-title">All my freelance works.</p>
                        <Swiper {...params}>
                        <div data-aos="flip-right" data-aos-delay="100" className="Serivce-box" style={{height:"300px"}}>
                            <h1>Photography</h1>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="200" className="Serivce-box" style={{height:"300px"}}>
                            <h1>Backend dev</h1>
                            </div>
                        <div data-aos="flip-right" data-aos-delay="300" className="Serivce-box" style={{height:"300px"}}>
                            <h1>Frontend design&dev</h1>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="400" className="Serivce-box" style={{height:"300px"}}>
                            <h1>Native Application dev</h1>
                        </div>
                        </Swiper>

                    <button className="btn About-btn color-purple" type="button" onClick={()=>{setispopup(true)}} >Contact</button>
                </div>
    </div> </div> </div>
)
}
export default Service