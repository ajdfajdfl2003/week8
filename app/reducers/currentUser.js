import Types from '../types';

const initialState = {
  account: null,
  password: null,
  name: null,
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case Types.REGISTRATION:
      return {
        ...state,
        ...action.payload,
      };
    case Types.RESET_CURRENT_USER:
      return initialState;
  }
  return state;
}