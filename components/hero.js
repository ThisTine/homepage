import {useEffect,useState} from 'react'
const Hero = ()=>{
    const [scrollh,setscrollh] = useState(0)
    

    useEffect(() => {
        const checkevent = ()=>{
            const hero = document.getElementById("hero")
            if(hero){
                setscrollh(hero.getBoundingClientRect().y*-1)
            }
        }
        window.addEventListener("scroll",checkevent) 
        return () =>  window.removeEventListener("scroll",checkevent) 
    }, [])
    const style = { width:"100%",height:"100%",backgroundImage:"url('/img/DSC_4618-3.jpg')",
    backgroundPosition:"center",backgroundAttachment:"fixed",
    transform: "scale("+(1+(scrollh/10000))+")",backgroundSize:"cover",transition:"all 0.5s"}
    return(
        <div className="hero" id="hero" >
            <div className="hero-text-group"style={{filter:`blur(${(scrollh)/100}px)`}}>
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