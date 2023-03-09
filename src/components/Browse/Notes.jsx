import { useState } from "react"
import Edit from "../../assets/edit.png"
import pen from "../../assets/pen.png"

const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    // console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
       <div style={{color:"white",background:"#F1C75B",height:"60vh",width:"30vw", position:"relative", borderRadius:"12px", padding:"6px"}}>
        <p style={{color:"black",fontSize:"2rem"}}>All notes</p>
        <textarea style={{width:"28vw", height:"55vh",margin:"auto", border:"none",background:"transparent"}} value={text} onChange={(e)=>handleChange(e)}/>
        <img src={Edit} style={{width:"50px",height:"50px",position:"absolute",bottom:"11px",right:"5px"}}/>
        <img src={pen} style={{width:"30px",height:"30px",position:"absolute",bottom:"17px",right:"10px"}}/>
       </div>
    )
}

export default Notes