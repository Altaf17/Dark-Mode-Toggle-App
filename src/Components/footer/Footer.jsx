import React from 'react'
import './Footer.css'

const Footer = (props) => {
  const { theme } = props;
  return (
    <footer className='--flex-center' data-theme={theme}>
      <p>Copyright &copy; 2023</p>
    </footer>
  )
}

export default Footer