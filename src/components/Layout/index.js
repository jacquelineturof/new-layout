import React from 'react'

import NavBar from '../UI/NavBar'
import SideMenu from '../UI/SideMenu'

import classes from './Layout.module.css'

const Layout = ({ children }) => (
    <div className = { classes.Layout }>
        <SideMenu />
        <div>
            <NavBar />
            { children }
        </div>
    </div>
)

export default Layout