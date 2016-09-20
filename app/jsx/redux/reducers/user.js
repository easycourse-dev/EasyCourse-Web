export default function userReducer(state, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.payload;
  };
  
  return {
    username: 'testing1',
    email: 'abc@123.com'
  };
}
