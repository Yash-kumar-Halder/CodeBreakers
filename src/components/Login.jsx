import React from 'react'

function Login() {
  return (
    <div className="singupCont">
        <div className="singupCard">
            <h1 className="loginHeading">Login</h1>
            <input type="email" className="loginEmail cursor" placeholder='Enter Email'/>
            <input type="password" className="loginPassword cursor" placeholder='Enter Password' />
            <p className='text-blue cursor'>Forgot password</p>
            <button className="loginBtn cursor">Login</button>
            <p className='text-gray'>Don't have an account? <span className='text-blue cursor'>Singup</span></p>
            <p className='text-gray loginor'>Or</p>
            <button className='fbLoginBtn cursor'>Login with Facebook</button>
            <button className='gLogonBtn text-gray cursor'>Login with Google</button>
        </div>
    </div>
  )
}

export default Login