import React from 'react'
import {ReactComponent as LogoIcon} from '../../images/logo.svg'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { COMPANY, FEATURES } from './constants'
import {Button} from '../button/index'

export const Header = () => {
  return (
    <header className='flex items-center'>
     <LogoIcon/>
     <nav className='flex space-x-6 ml-8 '>
      <NavItem text='Feature'>
        <NavMenu items={FEATURES}></NavMenu>
      </NavItem>
       <NavItem text='Company'><NavMenu items={COMPANY}></NavMenu></NavItem >
        <NavItem text='Carrers'/>
         <NavItem text='About'/>
     </nav>
     <div className="ml-auto flex space-x-5">
      <Button>Loggin</Button>
      <Button hasBorder={true}>Register</Button>
      </div>
     
    </header>
  )
}

