import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Redirect({dest}){
  let router = useRouter()
  useEffect(()=>{
    router.replace(dest)
  },[])
  return (<></>)
}