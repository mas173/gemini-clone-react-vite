import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './components/sidebar/Sidebar'
import Heading from './components/sidebar/main/Heading'
import "./App.css"
import Content from './components/sidebar/main/Content'
import GeminiStoreData from './components/sidebar/store/Store'

const App = () => {
  return (
    <GeminiStoreData>
    <div className='appflex'>
    <Sidebar></Sidebar>
    <div className='mainBox'>
      <Heading></Heading>
    <Content></Content></div>
    </div>
    </GeminiStoreData>
  
  )
}

export default App;
