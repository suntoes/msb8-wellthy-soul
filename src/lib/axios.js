import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://ran-mobile-api.onrender.com/api',
  headers: {
    'Content-type': 'application/json'
  }
})

export async function sendMail(data) {
  try {
    const res = await apiClient.post('/email', data, {
      timeout: 9000,
      headers: {
        'x-access-token': 'token-value'
      }
    })

    return res
  } catch (err) {
    return false
  }
}
