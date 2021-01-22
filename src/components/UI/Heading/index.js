import React from 'react'

import classes from './Heading.module.css'

/*
    size 1 - 6
*/
const Heading = ({ size, children, isBold, isLight }) => {
    const cssClasses = [ classes.Heading ]

    if (isBold) cssClasses.push(classes.Bold)
    if (isLight) cssClasses.push(classes.Light)
    
    let heading = <h3 className = { cssClasses.join(' ') }>{ children }</h3>
    return heading
}

export default Heading