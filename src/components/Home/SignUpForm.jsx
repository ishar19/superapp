import React,{useState} from 'react'
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom'
const SignUpForm = ()=>{
    const [formValues, setFromValues] = useState({check:false})
    console.log(formValues)
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setFromValues({...formValues,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        let valid = true
        if(Object.keys(formValues).length<5){
            valid = false
            alert("Please fill in the form accurately")
            return
        }
        Object.values(formValues).map((data)=>{
            if(data.length==0){
                valid = false
                alert("Please fill in the form accurately")
                return
            }
        })
        window.localStorage.setItem("userData",JSON.stringify(formValues))
        navigate('/genre')
    }
    return(
        <div className={styles.body}>
            <p className={styles.super}>Super App</p>
            <p>Create a new Account</p>
            <p>Email <span style={{color:"green"}}>|</span> Google</p>
            <form>
                <input onChange={(e)=>handleChange(e)}  type="text" name='name'  placeholder="Name"></input>
                <input onChange={(e)=>handleChange(e)}  type="text" name='username'  placeholder="UserName"></input>
                <input onChange={(e)=>handleChange(e)}  type="email" name='mail'  placeholder="Email"></input>
                <input onChange={(e)=>handleChange(e)}  type="tel"  name='mobile'  placeholder="Mobile"></input>
                <label>
                <input onChange={(e)=>setFromValues({...formValues,[e.target.name]:e.target.checked})}  type="checkbox" name='check' />
                Share my registration data with Superapp
                </label>
                <button type='submit'  onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
            </form>
            <footer className={styles.footer}>
                <p>By clicking on Sign up. you agree to Superapp<span style={{color:"green"}}> Terms and Conditions of Use</span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"green"}}> Privacy Policy</span></p>
            </footer>
        </div>
    )
}

export default SignUpForm