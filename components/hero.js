import {useEffect,useState} from 'react'
const Hero = ()=>{
    const [scrolleffect, setsrcolleffect] = useState(1.2)
    const [blureffect,setblureffect] = useState(0)
    const checkevent = ()=>{
        let scale = 1.2-(document.documentElement.scrollTop*2/10000)
        if(scale == 1 || scale <= 1.1 ){
            scale = 1;
        }
        let blur = 0+(document.documentElement.scrollTop*9/1000)
        setblureffect(blur.toFixed(3))
        setsrcolleffect(scale.toFixed(2))
    }

    useEffect(() => {
        const ac = new AbortController();
        window.addEventListener("scroll",checkevent) 
        return () => {
            window.removeEventListener("scroll",checkevent) 
        }
    }, [])
    const style = { width:"100%",height:"100%",backgroundImage:"url('/img/DSC_4618-3.jpg')",backgroundPosition:"center",backgroundAttachment:"fixed",transform: "scale("+scrolleffect+")",backgroundSize:"cover",transition:"all 0.5s"}
    const blurstyle = {filter:"blur("+blureffect+"px)"}
    return(
        <div className="hero" >
            <div className="hero-text-group"style={blurstyle}>
                <h1 data-aos='fade-up' data-aos-duration="2000"  className="hero-text-group-text">Hi ! </h1>
                <h1 data-aos='fade-up' data-aos-duration="2000"  data-aos-delay="1000" className="hero-text-group-text">it's me Tine</h1>
            </div>
            <div data-aos="fade-in" data-aos-duration="1000" className="Hero-bg-container">
               <div className="Hero-bg" style={style}></div> 
            </div>
            
        </div>
    )
}

export default Hero