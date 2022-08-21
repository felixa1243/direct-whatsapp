import { useState } from "react"
import 'bulma/css/bulma.min.css'
import {useRecoilState} from 'recoil'
import { phoneNumberState } from "../atom/phoneNumber"
import { countryCodeState } from "../atom/countryCode"
const Message:React.FC = ()=>{
  const [message,setMessage]=useState('')
  const[phoneNumber] =useRecoilState(phoneNumberState)
  const [countryCode]=useRecoilState(countryCodeState)
  const send=()=>{
  const pesan=message
  let url=`https://api.whatsapp.com/send/?phone=${countryCode+phoneNumber}`
  if(pesan.length>0) {
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
