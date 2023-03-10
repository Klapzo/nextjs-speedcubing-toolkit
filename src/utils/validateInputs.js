
export const validateEmail = (input) => {
  if (input.length === 0) { return 'email must not be blank' }
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!emailFormat.test(input)) { return 'email is invalid' }

  return ''
}

export const validatePassword = (input) => {
  if (input.length < 8) { return 'password must be at least 8 characters long' }
}
