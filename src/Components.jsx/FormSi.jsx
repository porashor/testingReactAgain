import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'
import AppData from "../Auth/Auth"
const FormSi = () => {

    //state init
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const data = getAuth(AppData)
    const store = getFirestore(AppData)

    async function onSub(e){
      e.preventDefault();
      try{
        await createUserWithEmailAndPassword(data, email, password)
        const user = data.currentUser;
        console.log(user)
        console.log("registered successfully")
        await updateProfile(user, {
          displayName: name
        })
        if(user){
          await setDoc(doc(store, name , user.uid), {
            name: user.displayName,
            email: user.email
          })
        }
        setTimeout(()=>console.log(user?.displayName),5000)
      }catch(err){
        console.log(err)
      }
    }
    //rendering component
  return (
    <div className='text-xl bg-green-200 p-9 rounded-xl w-[40%] mx-auto my-10'>
        <h1 className='text-center text-4xl uppercase font-semibold py-2 '>Form</h1>
      <form onSubmit={onSub}>
      <input type="text" placeholder='enter your full name' className='my-5 py-1 px-2 rounded-md w-full outline-none' value={name} onChange={(e)=>setName(e.target.value)}/>
      
      <input type="email" placeholder='enter your email' className='my-5 py-1 px-2 rounded-md w-full outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <input type="password" placeholder='enter your password' className='my-5 py-1 px-2 rounded-md w-full outline-none' value={password} onChange={(e)=>setPassword(e.target.value)}/>

      <button className='uppercase font-semibold bg-blue-600 text-white py-1 rounded-md w-full text-center' type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FormSi
