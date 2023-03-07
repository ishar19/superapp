import Banner from '../components/Home/Banner'
import SignUpFrom from '../components/Home/SignUpForm'

const Home = ()=>{
    return(
        <div style={{display:"flex"}}>
        <Banner/>
        <SignUpFrom/>
        </div>
    )
}

export default Home