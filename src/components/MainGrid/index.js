import React from 'react'

import GithubActivity from './GithubActivity'
import CurrentlyLearning from './CurrentlyLearning'
import Calendar from './Calendar'
import AboutMe from './AboutMe'
import FeaturedProject from './FeaturedProject'

import classes from './MainGrid.module.css'

const MainGrid = () =>  (
    <div className = { classes.Grid }>
        <GithubActivity />
        <CurrentlyLearning />
        <Calendar />
        <AboutMe />
        <FeaturedProject />
    </div>
)

export default MainGrid