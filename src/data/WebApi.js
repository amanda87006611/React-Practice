const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPost = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`).then((res) => res.json())
}

export const logIn = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json())
}

export const getMe = () => {
  const token = localStorage.getItem('token')
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorized: `Bearer ${token}`,
    },
  }).then((res) => res.json())
}
