const AboutProgress = (props)=>{
    const style = {width:props.width,background:props.bg};
    return(
        <div className="progress" style={{margin:"20px 0"}}>
        <div data-aos-duration="500" data-aos={props.ani.data} data-aos-delay={props.ani.delay} className="progress-bar">
        
        <div data-aos="fade-right" data-aos-delay={props.ani.delay}>
        
            <div className="progress-inner" style={Object.assign(style,{display:"flex",justifyContent:"space-between"})}>
            <span data-aos="fade" data-aos-delay={parseInt(props.ani.delay) + 100} style={{margin:"0 20px"}} >{props.title}</span>
                 <span style={{margin:"0 20px"}}>{props.width}</span> </div>
        </div>
        </div>
    </div>
    )
}

export default AboutProgress