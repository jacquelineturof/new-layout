import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconContext } from "react-icons"
import { 
    RiLayoutMasonryFill, 
    RiWechatFill, 
    RiFileCodeFill, 
    RiBubbleChartLine,
    RiLogoutCircleLine 
} from "react-icons/ri"

import classes from './SideMenu.module.css'

const SideMenu = () => (
    <IconContext.Provider value = {{ className: classes.Icon }}>
        <ul className = { classes.Container }>
            <li>
                <NavLink to = "/">
                    <RiLayoutMasonryFill />
                </NavLink>
            </li>
            <li>
                <NavLink to = "/">
                    <RiFileCodeFill/>
                </NavLink>
            </li>
            <li>
                <NavLink to = "/">
                    <RiWechatFill />
                </NavLink>
            </li>
            <li>
                <NavLink to = "/">
                    <RiBubbleChartLine />
                </NavLink>
            </li>
            <li>
                <NavLink to = "/">
                    <RiLogoutCircleLine/>
                </NavLink>
            </li>
        </ul>
    </IconContext.Provider>
)

export default SideMenu