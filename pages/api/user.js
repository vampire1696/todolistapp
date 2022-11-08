export default function handler(req,res) {
    if(req.method !== "POST") return res.status(403).json({message: 'Error'})
    
    const {id,name,email} = req.body
    console.log({id,name,email})
    return res.status(200).json({message: 'Succesful',user : {id:id,name:name,email:email}}) 
}