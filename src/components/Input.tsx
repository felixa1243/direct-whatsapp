import {useState,useRef} from 'react'
import './Input.css'
interface Props{
 type:'text'|'number';
 placeholder:string;
}
type phoneNum='62'|'86'
const Input:React.FunctionComponent<Props> =props=>{
 const [country,setCountry]=useState<phoneNum>('62')
 const ref=useRef<HTMLInputElement>(null)
 const redirect=()=>{
  const url=`https://wa.me/${country}${ref.current?.value}`
  location.assign(url)
 }
 return (
 <>
  <input 
  type={props.type} 
  placeholder={props.placeholder}
  ref={ref}/>
  <button 
  type='button' 
  onClick={redirect}
  >Send message!</button>
 </>
 )
}
export default Input 
