import axios from 'axios';

export async function requestReviews() {
  await axios
    .get('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => console.log(response))
    .catch(error => console.log(error));
}


