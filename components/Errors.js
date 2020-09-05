const Errors = ({seterror})=>{
    return(
        <div className="error"> <p className="error-text">There is an error connecting to the API.I will be back soon.</p> <button className="error-close btn" onClick={()=>seterror(false)}>&#10006;</button> </div>
    )
}

export default Errors