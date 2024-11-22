import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../css/reviews.css';

import axios from 'axios';

export async function loadReviews() {
  await axios
    .get('https://portfolio-js.b.goit.study/api/reviews1')
    .then(response => {
      createGallery(response.data);
    })
    .catch(error => {
      // console.log(error);
      iziToastMes('Reviews not found');
      const gallery = document.querySelector('.swiper-wrapper'); 
      gallery.insertAdjacentHTML(
        'beforeend',
        '<li class="not-found"><p class="not-found-text">Not Found</p></li>'
      );
    });
}

function createGallery(data) {
  const gallery = document.querySelector('.swiper-wrapper');  
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    mousewheel: {
      enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      1280: { slidesPerView: 2 },
    },
  });
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function iziToastMes(message, color = 'red') {
  iziToast.show({
    icon: 'icon-person',
    message: message,
    color: color,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    transitionIn: 'bounceInDown', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX
    transitionOut: 'flipOutX', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
    closeOnClick: true,
    displayMode: 'replace', // once, replace
    timeout: 3000,
  });
}