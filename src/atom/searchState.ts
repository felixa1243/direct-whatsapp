import {atom} from 'recoil'
import data from '../data/countryList.json'

export const searchState=atom({
  key:'searchState',
  default:data
})
