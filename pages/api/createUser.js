
import redis from "../../lib/redis"
import { v4 } from "uuid"
export default async function handler(req,res) {
    if(req.method !== "POST") return res.status(403).json({message: 'Error'})
    const id = v4()
    const {name,email,password} = req.body
    console.log({id,name,email})
    const userString = JSON.stringify({name,email,password});
    const respone = await redis.hset("user",id,userString)
    return res.status(200).json({message: 'Succesful',respone}) 
    
}