import 'bulma/css/bulma.min.css'
import {useRecoilState} from 'recoil'
import { countryCodeState } from "../atom/countryCode"
import { dropdownState } from "../atom/dropdown"
import { searchState } from "../atom/searchState"
import {useState} from 'react'
interface Props {
 children:React.ReactNode
}
const Dropdown:React.FC <Props>= ({children})=>{
  const [active,setActive]=useRecoilState(dropdownState)
  const [countrycode]=useRecoilState(countryCodeState)
  const [search,setSearch]=useRecoilState(searchState)
  const [available,setAvailable]=useState({})

  return (
   <div 
   className={`dropdown ${active?'is-active':''}`}
   >
  <div className="dropdown-trigger">
    <button 
    className="button" 
    aria-haspopup="true" 
    aria-controls="dropdown-menu"
    aria-expanded={active}
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
    <div 
    className="dropdown-content">
      <div 
      className="field dropdown-item">
        <div 
        className="control has-icons-left">
          <input 
          type="text" 
          placeholder="Find country" 
          className="input is-transparent"
          onChange={(e)=>
            setSearch(search.filter(el=>el.code===e.target.value||el.name===e.target.value))
          }
          />
          <span className="icon is-left">
          </span>
        </div>
      </div>
      <hr className="dropdown-divider"/>
     {children}
    </div>
  </div>
</div>
  )
}
export default Dropdown
