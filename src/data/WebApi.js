const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPost = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`).then((res) => res.json())
}
