import React from 'react'

const Nav = () => {
    const nav = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "Log",
            link: "log"
        },
        {
            name: "SignIn",
            link: "signin"
        },
        {
            name: "SignOut",
            link: "signout"
        },
    ]
  return (
    <div className='flex gap-4 py-2 w-fit mx-auto'>
      {
        nav.map((item, index)=>(
            <div key={index} className='text-xl bg-green-300 px-3 rounded-lg hover:bg-green-900 hover:text-white duration-200 uppercase'>
                <a href={item.link}>{item.name}</a>
            </div>
        ))
      }
    </div>
  )
}

export default Nav
