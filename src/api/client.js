export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-TYpe': 'application/json' }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers, 
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const responce = await window.fetch(endpoint, config)
    data = await responce.json()
    if (responce.ok) {
      return data
    }
    throw new Error(responce.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
  }
  client.get = function (endpoint, customConfig = {}) {
    return client(endpoint, {...customConfig, method: 'GET' })
  }
  client.post = function (endpoint, body, customConfig = {}) {
    return client(endpoint, {...customConfig, body })
  }
