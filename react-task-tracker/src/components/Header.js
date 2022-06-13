import React from 'react'
import Button from './Button'


const Header = ({title}) => {
  
  const whenClick = () =>{
      console.log('Click!')
  }

  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <Button text = 'Add' color = 'green' whenClick = {whenClick}/>
        
    </header>
  )
}

export default Header