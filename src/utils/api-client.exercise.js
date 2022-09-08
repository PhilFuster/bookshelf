async function client(endpoint, customConfig = {}) {
  const fetchConfig = {
    method: 'GET',
    ...customConfig
  }
  try {
    const response = await window
      .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, fetchConfig)
    const data = await response.json()
    if (response.ok) {
      return data
    }
    return Promise.reject(data)
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching data..')
  }
}

export {client}
