
import Input from './components/Input'
import Message from "./components/Message"
import 'bulma/css/bulma.min.css'
import {useRecoilState} from 'recoil'
import { countryCodeState } from "./atom/countryCode"
import { phoneNumberState } from "./atom/phoneNumber"
import data from './data/countryList.json'
import { searchState } from "./atom/searchState"
function App() {
 const [countrycode]=useRecoilState(countryCodeState)
 const [phoneNumber]=useRecoilState(phoneNumberState)
 const [list]=useRecoilState(searchState)
  return (
    <div className="container px-2">
    {list?.map(e=>(<p>{e.code}</p>))}
      <h1 className='is-size-5'>Send message without ever saving a new number...</h1>
     <p>{countrycode}{phoneNumber}</p>
     <Input type={'text'} placeholder={'Enter phone number here'} />
     <Message/> 
    </div>
  )
}

export default App
