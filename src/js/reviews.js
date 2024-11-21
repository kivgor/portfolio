import axios from 'axios';

export async function requestReviews() {
  await axios
    .get('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      createGallery(response.data);      
    })
    .catch(error => console.log(error));    
}

function createGallery(data) {
  const gallery = document.querySelector('.swiper-wrapper');
  console.log(data);
  let markup = data
    .map(
      slide => `
    <li class="swiper-slide">
        <p class="review-text">
          ${slide.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${slide.avatar_url}" alt="Autor: ${slide.author}">
          <p class="review-author">${slide.author}</p>
        </div>
      </li>`
    )
    .join('');  
  gallery.insertAdjacentHTML('beforeend', markup);  
}

