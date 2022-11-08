import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  
  const [List,setList] = useState([])


  useEffect(() =>{
    //axios.post("/api/createUser",{id:123,name:"He",email:"sdfsdf@sdfsdf"}).then(message => console.log(message)).catch(e => console.log(e.message))
    axios.get("/api/getUserList").then(res => res.data).then(data => {console.log(data);setList(data.responeObject)}).catch(e => console.log(e.message))
  },[])

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const router= useRouter()
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const respone= await axios.post("/api/createUser",{name:nameRef.current.value,email:emailRef.current.value,password:passwordRef.current.value})
    router.reload()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>

      <div>
        {List.length > 0 && List.map((account,key) => {
          return (<ul key= {key}>
            <li>Name: {account.name}</li>
            <li>Email: {account.email}</li>
          </ul>)
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="name" required ref={nameRef}/> <br/>
        <input type='email' placeholder="email" required ref={emailRef}/> <br/>
        <input type='password' placeholder="password" required ref={passwordRef}/> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
