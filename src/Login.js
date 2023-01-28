import {React,useState} from 'react'
import {Navigate, useNavigate,} from 'react-router-dom';
import axios from "axios";
import './Login.css'
import { SiTailwindcss,SiFacebook,SiTwitter,SiGithub } from "react-icons/si";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate =useNavigate()
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    })
    .then(result => {
      console.log(result.data)
      localStorage.setItem('token',result.data.token)
      Navigate('/profile')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
 

  return (
    <div className='container'>
      <div className='signinside'>
        <div className='logo'><SiTailwindcss/></div>
        <h3>Sign in to your account</h3>
        <div className='trailcon'>Or <div className='trail'>Start your 14-day free trail !</div>
        </div>
        <h5>Sign in with</h5>
        <div className='buttoncon'>
        <button className='button'><SiFacebook/></button>
        <button className='button'><SiTwitter/></button>
        <button className='button'><SiGithub/></button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, backgroundColor: 'black', height: "0.5px" }} />
        <p style={{ margin: "10px 10px" }}>Or continue with</p>
        <div style={{ flex: 1, backgroundColor: 'black', height: "0.5px" }} />
        </div>
        
        <div style={{ margin: "2px 0px"}}>
          Email address</div>
        <input className='inputbox' type="email" 
          value={email} onChange={handleEmail} style={{ margin: "5px 0px"}}>
        </input>
        <div style={{ margin: "2px 0px"}}>
          Password
        </div>
        <input className='inputbox' type="password" 
          value={password} onChange={handlePassword} style={{ margin: "5px 0px"}}>
        </input>
        <div className='option'>
        <input type="checkbox"/> Rememberme
        <a href='#'>Forgot your password?</a>
        </div>
        <button className='buttonsignin'  onClick={handleApi}>Sign in</button>
       

      </div>
    <div className='picside'></div>
    </div>
  )
}

export default Login