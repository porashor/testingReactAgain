import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'
import AppData from "../Auth/Auth"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormSi = () => {

    //state init
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState(null)


    //importent data
    const data = getAuth(AppData)
    const store = getFirestore(AppData)




    //main creating function 
    async function onSub(e){
      e.preventDefault();
      try{
        await createUserWithEmailAndPassword(data, email, password)
        const datax = data.currentUser;
        setUser(datax?.displayName)
        console.log("registered successfully")
        //for update profile
        await updateProfile(datax, {
          displayName: name
        })
        //for setup data in firebase host
        if(datax){
          await setDoc(doc(store, name , datax.uid), {
            name: datax.displayName,
            email: datax.email
          })
        }
        toast.success("registered successfully",{
          position: "top-center"
        })
      }catch(err){
        console.log(err)
        toast.success("create failed",{
          position: "bottom-center"
        })
      }
    }
    console.log(user)




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
      <h1>{data.currentUser?.displayName} congrats for logIn</h1>
    </div>
  )
}

export default FormSi
