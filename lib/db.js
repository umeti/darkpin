import fs from "fs"

let cwd = process.cwd()

let dir = fs.readdirSync(cwd + "/db/content")
.sort().reverse()

export let len = dir.length

export function query(count=0,skip=0,filter=(data)=>true){
  let res = []

  for (let f of dir ) {
    try {
      let data = fs.readFileSync(cwd + "/db/content/" + f)
      data = JSON.parse(data)
      if(filter(data)){
        if(skip <= 0){
          res.push(data)
        }else{
          skip --
        }
        
      }
    } catch (e) {
      console.log(e)
    }

    if(count && res.length >= count ){
      break
    }
  }
  return res
}



export default {
  len,
  query,
}