import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn'; // Rotas de Autenticacao
import SignUp from '../pages/SignUp'; // Rotas de Autenticacao

import Profile from '../pages/Profile'; // Rotas em que sao necessarias estar logado
import Dashboard from '../pages/Dashboard'; // Rotas em que sao necessarias estar logado

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
