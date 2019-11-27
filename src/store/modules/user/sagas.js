import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data; // eslint-disable-line

    const profile = Object.assign( // eslint-disable-line
      // serve para unir dois objetos
      { name, email, avatar_id }, // eslint-disable-line
      // se no restante das informacoes eu tiver oldPassword preenchido
      // quer dizer que o usuario preencheu a senha atual e quer preencher o restante
      // se eu tiver algo em oldPassword, entao carrego o restante
      rest.oldPassword ? rest : {} // eslint-disable-line
    ); // eslint-disable-line

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
