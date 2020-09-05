import Link from 'next/link'
import { useRouter } from "next/router";
import {useState} from 'react'
const Navshow = ({router})=>{
    const [isshow,setisshow] = useState(false)
    return(
        <>
        <header>
        <div className="nav-wrapper">
        <nav>
            <div className="nav-side">
            <Link href="/" as="/"><h1 className="hov">Thistine</h1></Link>
            </div>
            <div className="nav-side" onClick={()=>{setisshow(!isshow)}}>
            <div className={isshow ? "berger-nav berger-active" : "berger-nav"} >
            <span className="border border1"></span>
            <span className="border border2"></span>
            <span className="border border3"></span>
            </div>
            
            </div>
            <div className="nav-desk"> 
                <Link href="/" as="/"  ><a className={router === "/" ? "nav-link active" :"nav-link"}>Home</a></Link>
                <Link href="/about" as="/about"  ><a className={router === "/about" ? "nav-link active" :"nav-link"}>About</a></Link>
                <Link href="/projects" as="/projects"  ><a className={router === "/projects" ? "nav-link active" :"nav-link"}>Project</a></Link>
                <Link href="/photos" as="/photos"  ><a className={router === "/photos" ? "nav-link active" :"nav-link"}>Gallery</a></Link>

            </div>
            
        </nav>
        </div>
        </header>
                    <div className={isshow ? "nav-mo-side mo-active" : "nav-mo-side"}> 
                    <Link href="/" as="/"  ><a className={router === "/" ? "nav-link active" :"nav-link"} onClick={()=>{setisshow(false)}}>Home</a></Link>
                    <Link href="/about" as="/about"  ><a className={router === "/about" ? "nav-link active" :"nav-link"} onClick={()=>{setisshow(false)}}>About</a></Link>
                    <Link href="/projects" as="/projects"  ><a className={router === "/projects" ? "nav-link active" :"nav-link"} onClick={()=>{setisshow(false)}}>Project</a></Link>
                    <Link href="/photos" as="/photos"  ><a className={router === "/photos" ? "nav-link active" :"nav-link"} onClick={()=>{setisshow(false)}}>Gallery</a></Link>
                    
                </div>
                {isshow && <div className="nav-bg" onClick={()=>{setisshow(false)}}></div>}
            </>
    )
}
const Navbar = ()=>{
    const router = useRouter();
    return(
        <>
        {router.pathname !== "/" && <Navshow router={router.pathname} />}
        </>
        
    )

}
export default Navbar