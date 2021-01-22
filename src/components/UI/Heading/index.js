import React from 'react'

import classes from './Heading.module.css'

/*
    size 1 - 6
*/
const Heading = ({ size, children }) => {
    let heading = <h3 className = { classes.Heading }>{ children }</h3>
    return heading
}

export default Heading