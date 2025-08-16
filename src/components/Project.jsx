
function Project(props){
    return <div>
        <img src={props.Image} alt="image of project"></img>

        <h1> 
            {props.Title}
        </h1>

        <p>
            {props.Description}
        </p>

        <Button>
            {props.Link}
        </Button>
        
        
        
        
    </div>
}

export default Project