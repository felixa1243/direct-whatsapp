import 'bulma/css/bulma.min.css'
import { useState } from "react"
import {useRecoilState} from 'recoil'
import { countryCodeState } from "../atom/countryCode"
interface Props {
 children:React.ReactNode
}
import {codeList} from '../data/codeList'
const Dropdown:React.FC <Props>= ({children})=>{
  const [active,setActive] =useState(false)
  const [countrycode,setCountryCode]=useRecoilState(countryCodeState) 
  return (
   <div 
   className={`dropdown ${active?'is-active':''}`}
   >
  <div className="dropdown-trigger">
    <button 
    className="button" 
    aria-haspopup="true" 
    aria-controls="dropdown-menu"
    onClick={()=>setActive(!active)}
    >
      <span>+{countrycode}</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div 
  className="dropdown-menu"
  id="dropdown-menu" 
  role="menu">
    <div className="dropdown-content">
     {children}
    </div>
  </div>
</div>
  )
}
export default Dropdown
