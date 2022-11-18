import users from "constants/users";

export function isValidAccount(auth) {
  return (
    users.findIndex((user) => user.username === auth.username) !== -1 &&
    users.findIndex((user) => user.email === auth.email) !== -1
  );
}
