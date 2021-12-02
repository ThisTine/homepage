const { default: Progress } = require("./Skill-progress")
import CountUp from 'react-countup';
import Link from 'next/link'
import {useState,useEffect} from 'react'

const Skill = ()=>{
    const [iscountyet,setiscountyet] = useState(false)
    const checkevent = ()=>{
      const ide = document.getElementById("skills")
      if(ide &&  ide.getBoundingClientRect().y<=500){
        setiscountyet(true)
      }else{
        setiscountyet(false)
      }
 
    }

      useEffect(()=>{
        window.addEventListener("scroll",checkevent)
      return ()=>{
        window.removeEventListener('scroll', checkevent)
      }
        
      },[])
    return(
        <div className="Skill" id="skills">
            <div className="About-wrapper">
            <div className="Skill-top">
                <h1 className="Skill-top-text">Skills & Ceritficates</h1>
            </div>
            <div className="About-container">
                <div className="half">
                    <div className="skill-half-div skill-color">
                        <Progress width="90%" bg="#e74c3c" ani={{data:"flip-up",delay:"100"}} title="back-end-website"/>
                        <Progress width="85%" bg="#e74c3c" ani={{data:"flip-up",delay:"200"}} title="Front-end-website"/>
                        <Progress width="60%" bg="#e74c3c" ani={{data:"flip-up",delay:"300"}} title="Android Application Development"/>
                        <Progress width="50%" bg="#e74c3c" ani={{data:"flip-up",delay:"400"}} title="Artificial Intelligence (AI) Development"/>
                        
                    </div>
                </div>
                <div className="half">
                <div className="skill-half-div skill-color skill-half-notfull">
    <h1 id="cerit" className="skill-cercount" data-aos="fade">{iscountyet ? <CountUp start={0} end={50} delay={0}></CountUp> : "0" }+</h1>
                <h1>Certificates</h1>
                </div>
                </div>
            </div>
            <Link href="/about" as="/about" ><a className="btn About-btn Skill-btn color-purple">See all my skill and certificates</a></Link> 
            </div>
        </div>
    )
}
export default Skill