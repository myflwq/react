import axios from 'axios';

axios.get('https://api.github.com/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
