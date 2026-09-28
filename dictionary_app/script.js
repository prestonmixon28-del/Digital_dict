fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
  .then(response => {
    if (!response.ok) {
      throw new Error('The API request failed');
    }

    return response.json();
  })
  .then(data => {
    if (data.entries.length === 0) {
        console.log('word not found');
    } else {
        console.log('word:', data[0].word);
        console.log('definintion', data[0].meanings[0].definitions[0].definition);
        
    }
  })
  .catch(error => {
    console.error('error', error.message);
  });