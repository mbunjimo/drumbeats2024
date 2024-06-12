import { Image } from '@mantine/core'
import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="border-t">
    <div className="flex-center wrapper flex-between flex flex-col gap-4   text-center sm:flex-row">
      <a href='/'>
        <Image 
          src={logo} 
          width={128}
          h={80}
        />
      </a>

      <p>2024 Drumbeats. All Rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
