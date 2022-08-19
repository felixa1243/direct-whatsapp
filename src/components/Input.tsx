import {useState,useRef} from 'react'
import 'bulma/css/bulma.min.css'
import Dropdown from "./Dropdown"
interface Props{
 type:'text'|'number';
 placeholder:string;
}
import { useRecoilState}from 'recoil'
import {codeList} from '../data/codeList'
import { countryCodeState } from "../atom/countryCode"
import { phoneNumberState } from "../atom/phoneNumber"
const Input:React.FunctionComponent<Props> =props=>{
 const [countryCode,setCountryCode]=useRecoilState(countryCodeState)
 const [phoneNumber,setPhoneNumber]=useRecoilState(phoneNumberState)
 const [valid,setValid]=useState<boolean>(false)
 const ref=useRef<HTMLInputElement>(null)
 const onblur=e=>setPhoneNumber(e.target.value)
 const oninput=e=>{
 if(e.target.value.length<5) setValid(false)
 else setValid(true)
 }
 return (
  <nav className='level is-mobile'>
   <div className='level-item'>
      <Dropdown>
    {
    codeList.map(
    el=>(<a 
    href="#" 
    className="dropdown-item"
    onClick={()=>{
      setCountryCode(el.code)
    }}>
    (+{el.code})
    </a>
      )
      )
      }

    </Dropdown>
    <input
     className={`input ${valid?'is-primary':'is-danger'}`}
     type={props.type} 
     placeholder={props.placeholder}
     ref={ref}
     onBlur={onblur}
     onInput={oninput}
     />
     
   </div>
  </nav>
 )
}
export default Input 
