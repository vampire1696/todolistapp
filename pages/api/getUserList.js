import redis from "../../lib/redis"
export default async function handler(req,res) {
    if(req.method !== "GET") return res.status(403).json({message: 'Error'})
    const respone = await redis.hvals("user")
    console.log(respone)
    const responeObject = (respone).map(object => {
        return JSON.parse(object)
    })
    return res.status(200).json({message: 'Succesful',responeObject}) 
}