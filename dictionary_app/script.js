fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
  .then(response => {
    if (!response.ok) {
      throw new Error('The API request failed');
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });