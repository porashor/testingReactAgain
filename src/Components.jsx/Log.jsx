import React, { useState } from 'react'

const Log = () => {
  //state init 
  const [email, setEmail ] =useState("")
  const [password, setPassword ] =useState("")
  //render function here 
  return (
    <div className='text-xl bg-green-200 p-9 rounded-xl w-[40%] mx-auto my-10'>
        <h1 className='text-center text-4xl uppercase font-semibold py-2 '>Form</h1>
      
      <form onSubmit={(e)=>e.preventDefault()}>
      <input type="email" placeholder='enter your email' className='my-5 py-1 px-2 rounded-md w-full outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <input type="password" placeholder='enter your password' className='my-5 py-1 px-2 rounded-md w-full outline-none' value={password} onChange={(e)=>setPassword(e.target.value)}/>

      <button type='submit' className='uppercase font-semibold bg-blue-600 text-white py-1 rounded-md w-full text-center'>submit</button>
      </form>
    </div>
  )
}

export default Log
