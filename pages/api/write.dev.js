import fs from "fs"

export default (req,res) => {
  console.log("calling /write.dev")
  let param = JSON.parse(req.body)
  console.log(param)
  if(param.api_key != process.env.api_key){
    res.status(400).json({message:"invalid api key"})
    return 
  }

  fs.writeFile("db/content/"+param.name, param.data, "utf8",(err)=>{
    if (err){
      res.status(500).json({message:err})
      return
    }
    res.status(200).json({message:"OK"})
  })
}