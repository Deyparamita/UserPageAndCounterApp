import React, { useState } from 'react'
import instaImg from './assets/instagram.png'
import './UserPage.css'

const UserPage = () => {
  let [login, setlogin] = useState(true);

  const switchLoggin= ()=>{
     setlogin(!login)
  }

  return (
    <>
    <div className='container'>
      <div className='form'>
      <img src={instaImg} alt="" />
      <div>
      <input hidden={login} type="text" placeholder='Mobile number or email'/>
      </div>
      <div>
      <input hidden={login} type="text" placeholder='Full Name'/>
      </div>
      <div>
      <input hidden={login} type="text" placeholder='username'/>
      </div>
      <div>
      <input hidden={!login} type="text" placeholder='Phone number, username or email'/>
      </div>
      <div>
      <input type="password" placeholder='Password'/>
      </div>
      <button>{login? "Log in" : "Sign Up"}</button>
      <div id="footer">
      {login? "Don't have an account? " : "Already have an account? "}
      <span onClick={switchLoggin}>{login?"Sign Up" : "Log in"}</span>
      </div>
      </div>
    </div>
    </>
  )
}

export default UserPage
