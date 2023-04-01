
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Worlddata from './Worlddata'



function App() {
  return (
    <div className='app_wrapper'>
      
      <Navbar />
      <Worlddata/>
      <div className='body_app'>
        <Sidebar/>
        
      </div>
      <Footer/>
      </div>
  )
}

export default App
