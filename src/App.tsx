import reactLogo from './assets/react.svg'
import Input from './components/Input'
import Message from "./components/Message"
import 'bulma/css/bulma.min.css'
import {useRecoilState} from 'recoil'
import { countryCodeState } from "./atom/countryCode"

function App() {
 const [countrycode,setCountryCode]=useRecoilState(countryCodeState)
  return (
    <div className="container px-2">
    
      <h1 className='is-size-5'>Send message without ever saving a new number...</h1>
     <img src={reactLogo} 
     className='image'/>
     <p>{countrycode}</p>
      <Input type={'text'} placeholder={'Enter phone number here'} />
      <Message/>
    </div>
  )
}

export default App
