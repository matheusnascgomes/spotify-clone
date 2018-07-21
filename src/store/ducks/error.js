export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

const INITIAL_STATE = {
  message: null,
  visible: false,
};

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, message: action.payload.message, visible: true };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  setErrorMessage: message => ({
    type: Types.SET,
    payload: { message },
  }),

  hideMessage: () => ({ type: Types.HIDE }),
};
