import { useRef, useState } from "react"

const Message:React.FC = ()=>{
  const [message,setMessage]=useState('')
  const textRef =useRef<HTMLTextAreaElement|null>(null)
  const send=()=>{
  const pesan=textRef.current?.value
  let url='https://api.whatsapp.com/send/?phone=6285927778963'
  if(pesan) {
  url+=`&text=${pesan}`
  }
    location.assign(url)
  }
  return (
  <>
   <textarea ref={textRef}></textarea>
   <button onClick={send}>Send message</button>
  </>
  )
}
export default Message
