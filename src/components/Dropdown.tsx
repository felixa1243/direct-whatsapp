import 'bulma/css/bulma.min.css'
import {useRecoilState} from 'recoil'
import { countryCodeState } from "../atom/countryCode"
import { dropdownState } from "../atom/dropdown"
import { loadMore } from "../atom/loadMore"
interface Props {
 children:React.ReactNode
}
const Dropdown:React.FC <Props>= ({children})=>{
  const [active,setActive]=useRecoilState(dropdownState)
  const [countrycode]=useRecoilState(countryCodeState)
  const [load,setLoad]=useRecoilState(loadMore)
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
    onClick={()=>{
    setActive(!active)
    if(!active){
      setLoad(10)
    }
    }}
    
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
          disabled
          />
          <span className="icon is-left">
          </span>
        </div>
      </div>
      <hr className="dropdown-divider"/>
     {children}
     <hr className="dropdown-divider"/>
     <a 
     href="" 
     className="mx-2"
     onClick={(e)=>{
     e.preventDefault()
     setLoad(load+10)
     }
     }>Load more...</a>
    
    </div>
  </div>
</div>
  )
}
export default Dropdown
