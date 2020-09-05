
const ProjectAPP = ({title,des,time})=>{
    return (
        <div data-aos="zoom-in" data-aos-delay={time} data-aos-duration="500">
        <div className="Project-card ">
            <div className="Project-card-inner">
            <h1>{title}</h1>
            <p>{des}</p>
            </div>
        </div>
        </div>
    )
}

export default ProjectAPP