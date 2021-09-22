import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { ContactContainer } from '../container/ContactContainer'

export const Routes = () => {
    return (
        <Switch>
{/*             <Route path='/about'>
                <HomeContainer />
            </Route> */}
{/*             <Route path='/about'>
                <AboutContainer />
            </Route> */}
            <Route path='/contact'>
                <ContactContainer />
            </Route>
        </Switch>
    )
}
