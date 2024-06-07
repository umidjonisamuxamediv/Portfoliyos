import React from 'react'
import Navbar from '../Navbar/Navbar'
import Fotter from '../Fotter/Fotter'

const BaysicLayout = ({children}) => {
  return (
    <div>
    <Navbar/>
    {children}
    <Fotter/>
    </div>
    
  )
}

export default BaysicLayout
