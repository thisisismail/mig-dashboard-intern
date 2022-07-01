const FetchLogin = async (email, password) => {
  return await fetch("https://mitramas-test.herokuapp.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  });
};

export default FetchLogin;
