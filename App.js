import React from 'react'
import ReactNavigation from './Navigation'

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Internal React error']);



export default function App() {
  return (
    <ReactNavigation/>
  )
}