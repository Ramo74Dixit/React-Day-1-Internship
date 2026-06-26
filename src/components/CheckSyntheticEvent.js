import React, { useState } from 'react'

const CheckSyntheticEvent = () => {
    const users=[
        {id:1,name:"Ram",city:"Kanpur"},
        {id:2,name:"Sachin",city:"Shivan"},
        {id:3,name:"Rajni",city:"Agra"},
        {id:4,name:"Rashtriya",city:"Delhi"},
        {id:5,name:"Rajata",city:"Kurukshetra"},
    ]
    const [search,setSearch] = useState("");
    const filteredUser= users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredUser)
  return (
    <div> 
      <input type='text' placeholder='Enter Your Name' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {
        filteredUser.map((user)=>(
            <div key={user.id}>
                {user.name}
            </div>
        ))
      }

    </div>
  )
}

export default CheckSyntheticEvent