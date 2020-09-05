import Link from "next/link"
import Swiper from 'react-id-swiper';

const Projects = ()=>{
    const params = {
        spaceBetween: 10,
          breakpoints: {
            1024: {
                slidesPerView: 2,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                    },
            },
            768: {
                slidesPerView: 2,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                    },
            },
            640: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
            },
            320: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
            }
          },
          loop:true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
      }
    return(
        <div className="Project">
            
        <div className="About-wrapper">
            <div className="About-container">
                <div className="Project-container">
                <h1 className="Project-title" data-aos="flip-up" data-aos-duration="700">Projects</h1>
                <p className="Projects-sec-title" data-aos="flip-up" data-aos-duration="700" data-aos-delay="100">These are some of my personal/fun projects.</p>

            </div>
            <div className="swiper-test" data-page="project">
                <Swiper  {...params}>
                <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1>Randomi-Application</h1>
                        <p>Native Application,Progressive webapp</p>
                        </div>
                    </div>
                </div>    

                <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1 >Shorten link & QR code generator</h1>
                        <p>Web Application, Github open source</p>
                        </div>
                    </div>
                </div>    

                <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1>PhanomAdun Alumni</h1>
                        <p>Web Application</p>
                        </div>
                    </div>
                </div>    

                <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1 >TROTCS attendance management</h1>
                        <p>Web Application</p>
                        </div>
                    </div>
                </div>   

                <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1>Twitter API with Google Assistant</h1>
                        <p>Smarthome,Github open source</p>
                        </div>
                    </div>
                </div>  

                <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1 >Tine.Photographer</h1>
                        <p>Photograph,Freelance job</p>
                        </div>
                    </div>
                </div>  

                <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
                    <div className="Project-card ">
                        <div className="Project-card-inner">
                        <h1>Tine.drawing</h1>
                        <p>Drawing,Freelance job</p>
                        </div>
                    </div>
                </div>  
                 </Swiper>
                 </div>
        </div>
        <Link href="/projects" as="/projects" ><a data-aos="fade-up" className="btn About-btn color-green">All of my projects</a></Link> 
    </div>
    </div>
    )
}

export default Projects