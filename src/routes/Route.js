import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth'; // importado Layout Pre configurado
import DefaultLayout from '~/pages/_layouts/default'; // importado Layout Pre configurado

import { store } from '~/store/';

export default function RouteWrapper({
  component: Component, // a funcao vai receber um parametro component que eh renomeado para Component
  isPrivate = false, // demarca se eh uma rota privada ou nao
  ...rest
}) {
  // const signed = false;
  const { signed } = store.getState().auth; // denomina se o usuario da aplicacao esta logado ou nao

  // se o usuario nao esta logado e eh uma area privada, entao direciona para rota /
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // se usuario ja esta logado e rota nao eh privada, direciona para o dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout; // define se o Estilo vai ser logado ou nao

  // se passou por tudo isso e o usuario esta logado acessando uma rota privada
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false, // crava que o valor default de isPrivate eh false
};
