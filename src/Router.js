import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainGrid from './components/MainGrid'

const Router = () => (
    <Switch>
        <Route path = "/" exact component = { MainGrid } />
    </Switch>
)

export default Router