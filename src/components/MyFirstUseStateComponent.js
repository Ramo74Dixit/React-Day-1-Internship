import React, { useEffect, useState } from 'react'
const MyFirstUseStateComponent = () => {
    // const [count,setCount]= useState(0);
    const [id,setId]=useState(1);
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const getUser= async()=>{
         const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data= await res.json();
        setUsers(data);
        };
        getUser();
    },[id])
  return (
    <div>
          <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
          <h2>{users.name}</h2>                
    </div>
  )
}

export default MyFirstUseStateComponent 