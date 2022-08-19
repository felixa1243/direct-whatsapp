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
const Input:React.FunctionComponent<Props> =props=>{
 const [countryCode,setCountryCode]=useRecoilState(countryCodeState)
 const [valid,setValid]=useState<boolean>(false)
 const ref=useRef<HTMLInputElement>(null)
 const onchange=()=>{
   if(ref.current.value.length<5){
   setValid(false)
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
    codeList.map(
    el=>(<a 
    href="#" 
    className="dropdown-item"
    onClick={()=>{
      setCountryCode(el.code)
    }}>
    +({el.code})- {el.name}
      </a>)
      )
    }
    </Dropdown>
    <input
     className={`input ${valid?'is-primary':'is-danger'}`}
     type={props.type} 
     placeholder={props.placeholder}
     ref={ref}
     onChange={onchange}
     />
   </div>
  </nav>
 )
}
export default Input 
