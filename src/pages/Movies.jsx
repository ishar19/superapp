import List from "../components/Movies/List"
import Profile from '../assets/profileSmall.png'
const Movies = ()=>{
    const movies = JSON.parse(window.localStorage.getItem("genres"))
    return(
        <>
        <img src={Profile} style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px"}}/>
        <div style={{width:"100vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
        <p style={{color:"green",fontSize:"3rem",margin:"1vw"}}>Super app</p>
        <p style={{color:"white",fontSize:"2rem",margin:"3vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List genre={movie}/>)}
        </div>
        </>
    )
}


export default Movies