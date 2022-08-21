import Input from './components/Input'
import Message from "./components/Message"
import 'bulma/css/bulma.min.css'
import {useEffect} from 'react'

function App() {
  useEffect(()=>document.title="direct whatsapp",[document.title])
  return (
    <div className="container px-2">
      <h1 className='is-size-5 mb-2'>Send message without ever saving a new number...</h1>
     <Input type={'text'} placeholder={'Enter phone number here'} />
     <Message/> 
    </div>
  )
}

export default App
