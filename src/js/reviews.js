import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

import axios from 'axios';

export async function loadReviews() {
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

export function launchSwiper() {  
  const swiper = new Swiper('.swiper', {    
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    mousewheel: {
      enabled: true,
    },
    slidesPerView: 2,
    spaceBetween: 32,
  });
}
