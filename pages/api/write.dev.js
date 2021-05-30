import fs from "fs"

export default (req,res) => {
  console.log("calling /write.dev")
  console.log(req.body)
  let param = JSON.parse(req.body)
  fs.writeFile("db/content/"+param.name, param.data, "utf8",(err)=>{
    if (err){
      res.status(500).json({message:err})
      return
    }
    res.status(200).json({message:"OK"})
  })
}