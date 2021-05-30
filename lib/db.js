import fs from "fs"

let cwd = process.cwd()
export function query(count=0,filter=(data)=>true){
  let res = []
  let dir = fs.readdirSync(cwd + "/db/content")
    .sort().reverse()
  
  for (let f of dir) {
    try {
      let data = fs.readFileSync(cwd + "/db/content/" + f)
      data = JSON.parse(data)
      if(filter(data)){
        res.push(data)
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

export default {query}