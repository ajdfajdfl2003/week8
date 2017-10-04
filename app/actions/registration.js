import Types from '../types';

export function setCurrentUser(data) {
  return {
    type: Types.REGISTRATION,
    payload: data
  }
}