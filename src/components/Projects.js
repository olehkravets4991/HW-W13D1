

const Projects = (props)=>{
    const hero={
        marginTop:"-1em"
    }
    const heroh2={
        color:"rgb(235, 229, 229)"
    }
    return(
        <div className="project">
            <div>
                <nav className="projectNav"> 
                    <a className="projectA" href="https://github.com/olehkravets4991/Ga--Project">Game og Thrones</a>
                    <a className="projectA" href="https://github.com/olehkravets4991/GA-Project2">Clients List</a>
                    <a className="projectA" href="https://game-of-thrones-search.onrender.com">Game of Thrones</a>
                    <a className="projectA" href="https://clients-list.onrender.com">Clients List</a>
                </nav>
            </div>
            <div style={hero}>
                <h2 style={heroh2}>Project Apps</h2>
                <div className="projectImage">
                    
                <div>
                        <img className="imageP" src="https://i.imgur.com/cPXKZRn.png"/>
                        <p>Client List:</p>
                    </div>
                    
                    <div>
                        <img className="imageP" src="https://i.imgur.com/G3V9oXN.png"/>
                        <p>Game of Thrones:</p>
                    </div>
                    
                </div>
            </div>    
        </div>
    )
}

export default Projects;