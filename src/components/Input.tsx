import {useState,useRef} from 'react'
import 'bulma/css/bulma.min.css'
import Dropdown from "./Dropdown"
interface Props{
 type:'text'|'number';
 placeholder:string;
}
import { useRecoilState}from 'recoil'
import { countryCodeState } from "../atom/countryCode"
import { phoneNumberState } from "../atom/phoneNumber"
import { loadMore } from '../atom/loadMore'
import data from '../data/countryList.json'
import { dropdownState } from "../atom/dropdown"
import { searchState } from "../atom/searchState"

const Input:React.FunctionComponent<Props> =props=>{
 const [,setCountryCode]=useRecoilState(countryCodeState)
 const [,setPhoneNumber]=useRecoilState(phoneNumberState)
 const [,setActive]=useRecoilState(dropdownState)
 const [valid,setValid]=useState<boolean>(false)
 const [list]=useRecoilState(searchState)
 const [load]=useRecoilState(loadMore)

 const ref=useRef<HTMLInputElement>(null)
 const onblur=(e:React.FocusEvent<HTMLInputElement>)=>setPhoneNumber(e.target.value)
 const onchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
 if(e.target?.value.length<5) {
  setValid(false)
  setActive(false)
 }
 else {
   setValid(true)
 }
 }
 return (
  <nav className='level is-mobile'>
   <div className='level-item'>
      <Dropdown>
    {
    list.slice(0,load).map(
    e=>(<a 
    href="#" 
    className="dropdown-item"
    key={e.code}
    onClick={()=>{
      setCountryCode(e.dial_code.substring(1))
      setActive(false)
    }}>
    ({e.dial_code}){e.code}
    </a>
      )
      )
      }

    </Dropdown>
    <input
     className={`input ${valid?'is-primary':'is-danger'} ml-3`}
     type={props.type} 
     placeholder={props.placeholder}
     ref={ref}
     onBlur={onblur}
     onChange={onchange}
     />
     
   </div>
  </nav>
 )
}
export default Input 
