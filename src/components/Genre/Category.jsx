import styles from './Category.module.css'
import action from '../../assets/action.png'
import drama from '../../assets/drama.png'
import fantasy from '../../assets/fantasy.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import music from '../../assets/music.png'
import romance from '../../assets/romance.png'
import thriller from '../../assets/thriller.png'
import western from '../../assets/western.png'

const genres = [
    {
        id:"Action",
        color:"#FF5209",
        image:<img style={{width:"160px", height:"120px"}}  src={action}/>
    },
    {
        id:"Drama",
        color:"#D7A4FF",
        image:<img style={{width:"160px", height:"120px"}}  src={drama}/>
    },{
        id:"Fantasy",
        color:" #FF4ADE",
        image:<img style={{width:"160px", height:"120px"}}  src={fantasy}/>
    },
    {
        id:"Fiction",
        color:"#6CD061",
        image:<img style={{width:"160px", height:"120px"}}  src={fiction}/>
    },
    {
        id:"Horror",
        color:"#7358FF",
        image:<img style={{width:"160px", height:"120px"}}  src={horror}/>
    },
    {
        id:"Music",
        color:"#E61E32",
        image:<img style={{width:"160px", height:"120px"}}  src={music}/>
    },{
        id:"Romance",
        color:"#11B800",
        image:<img style={{width:"160px", height:"120px"}}  src={romance}/>
    },{
        id:"Thriller",
        color:"#84C2FF",
        image:<img style={{width:"160px", height:"120px"}}  src={thriller}/>
    },{
        id:"Western",
        color:"#912500",
        image:<img style={{width:"160px", height:"120px"}}  src={western}/>
    }
]
const Category = ()=>{
    return (
        <div className={styles.body}>
            <div></div>
            <div className={styles.right}>
                {genres.map((data,idx)=>{
                    return (
                        <div key={idx} style={{background:data['color'],color:"white",padding:"16px",borderRadius:"12px"}}>
                            <p style={{marginBottom:"4px",fontSize:"18px"}}>{data.id}</p>
                            {data.image}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category