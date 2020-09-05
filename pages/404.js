import Footer from "../components/Footer"
import { useRouter } from 'next/router'
import Head from 'next/head'
export default ()=>{
    const router = useRouter()
    console.log(router)
    return(
        <>
        <Head>
            <title>404 Not found</title>
            <meta name="googlebot" content="noindex" />
            <meta name='robots' content="noindex" />
            <link rel="shortcut icon" href="/img/me.jpg" />
            <meta property="og:image" content="/img/404.jpg" />
        </Head>
        <main style={{display:"flex",flexDirection:"column",height:"100vh",width:"100%"}}>
            <div className="mob-pad"></div>
            <div className="c404">
            <h1>404</h1>
            <h2>ไม่พบหน้านี้</h2>
            <div className="c404link">
            <p>หรือคุณอาจจะหมายถึง</p>
            <a className="btn About-btn Skill-btn color-purple" href={`https://thistine.com${router.asPath}`}>thistine.com{router.asPath}</a>
            </div>
            </div>
            <div style={{position:"absolute",bottom:"0",width:"100%"}}>
            <Footer/>
            </div>
        </main>
        </>
    )
}