// eh o arquivo que se importa na tela, para chamar uma action para alterar o state
// pode ser chamado por outros reducers tambem, ou saga.

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }, // o que nao eh o type, vem dentro de payload
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

// sera utilizada para a falha tanto do SignIn quanto do SignUp
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
