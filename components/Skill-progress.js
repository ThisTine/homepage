const Progress = (props)=>{
    const style = {width:props.width,background:props.bg};
    return(
        <div className="progress">
            <h1 data-aos="fade" data-aos-delay={parseInt(props.ani.delay) + 100}>{props.title}</h1>
            <div data-aos-duration="500" data-aos={props.ani.data} data-aos-delay={props.ani.delay} className="progress-bar">
                <div data-aos="fade-right" data-aos-delay={props.ani.delay}>
                <div className="progress-inner" style={style}> {props.width} </div>
                </div>
            </div>
        </div>
    )
}
export default Progress
