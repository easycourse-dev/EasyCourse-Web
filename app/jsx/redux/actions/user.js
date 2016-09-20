export const signup = (user) => {
  console.log(user);
}

export const isLoggedIn = () => {
  // Action creator that needs to return an oction, an object with a type property
  return {
    type: 'LOGGED_IN',
    payload: {
      username: 'testing',
      email: 'abc@123.com'
    }
  };
}
