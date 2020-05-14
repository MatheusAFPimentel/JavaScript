import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home'
import UserCrud from '../components/users/UserCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home}/> {/*Referenciando para quando o usuário for para o link / é = Home o exact é pra dizer que é EXATAMENTE a /*/}
        <Route exact path='/users' component={UserCrud}/> {/* Referenciando para quando o usuário for para o link /user*/}
        <Redirect from='*' to='/'/>
    </Switch>