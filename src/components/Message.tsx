import { useState } from "react"
import 'bulma/css/bulma.min.css'
import {useRecoilState} from 'recoil'
const Message:React.FC = ()=>{
  const [message,setMessage]=useState('')
  const send=()=>{
  const pesan=message
  let url='https://api.whatsapp.com/send/?phone=6285927778963'
  if(pesan.length>1) {
  url+=`&text=${pesan}`
  }
    location.assign(url)
  }
  return (
  <>
   <textarea 
   className="textarea is-primary" 
   placeholder="Send message here..."
   onChange={(e)=>setMessage(e.target.value)}
   ></textarea>
   <button 
   className='button is-primary'
   onClick={send}>Send message</button>
  </>
  )
}
export default Message
