import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Login } from "./Login";
import { Profile } from "./pages/Profile";
import { ProfileEdit } from "./pages/ProfileEdit";
import { Payment } from "./pages/Payment";
import { Register } from "./pages/Register";

export const Content = () => {
  return (
    <Switch>
      <Route exact path='/login' component={ Login } />
      <Route exact path='/register' component={ Register}/>
      <Route exact path='/payment/:price' component={ Payment}/>
      <Route exact path='/profile/edit' component={ ProfileEdit}/>
      <Route exact path='/profile' component={ Profile}/>
      <Route exact path='/cart' component={ Cart }/>
      <Route exact path='/' component={ Store }/>
    </Switch>
  )
}

// rafc