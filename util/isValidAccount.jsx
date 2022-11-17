import users from "constants/users"

export function isValidAccount(auth) {
  const validUsername = (users.findIndex((user) => user.username === auth.username)+1)
  const validEmail = (users.findIndex((user) => user.email === auth.email))+1
  console.log(validUsername, validEmail)
  return validUsername && validEmail
}