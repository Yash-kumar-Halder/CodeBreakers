import React from 'react'

function Singup() {
  return (
    <div className="singupCont">
        <div className="singupCard">
            <h1 className="singupHeading">Singup</h1>
            <input type="email" className="singupEmail cursor" placeholder='Email'/>
            <input type="password" className="singupPassword cursor" placeholder='Create Password' />
            <input type="text" className="singupPassword cursor" placeholder='Confirm Password' />
            <button className="singupBtn cursor">Singup</button>
            <p className='text-gray'>Alrady have an account? <span className='text-blue cursor'>Login</span></p>
            <p className='text-gray'>Or</p>
            <button className='fbLoginBtn cursor'>Login with Facebook</button>
            <button className='gLogonBtn text-gray cursor'>Login with Google</button>
        </div>
    </div>
  )
}

export default Singup