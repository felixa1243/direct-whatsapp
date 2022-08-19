import { useRef, useState } from "react"
import 'bulma/css/bulma.min.css'
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
   <textarea 
   className="textarea is-primary" 
   placeholder="Send message here..."></textarea>
   <button 
   className='button is-primary'
   onClick={send}>Send message</button>
  </>
  )
}
export default Message
