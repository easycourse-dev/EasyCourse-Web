

const initialState = {
  username: 'testing1',
  email: 'abc@123.com'
}

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN_START':
      return action.payload;

    default:
      return state;
  };

  return {
    username: 'testing1',
    email: 'abc@123.com'
  };
}
