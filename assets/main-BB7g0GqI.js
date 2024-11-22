import{a,S as l,N as c,P as u,K as p,M as d,i as f}from"./vendor-HfHpcGSk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function w(){await a.get("https://portfolio-js.b.goit.study/api/reviews1").then(o=>{m(o.data)}).catch(o=>{g("Reviews not found"),document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",'<li class="not-found"><p class="not-found-text">Not Found</p></li>')})}function m(o){const r=document.querySelector(".swiper-wrapper");let s=o.map(i=>`
    <li class="swiper-slide">
        <p class="review-text">
          ${i.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${i.avatar_url}" alt="Autor: ${i.author}">
          <p class="review-author">${i.author}</p>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",s)}function y(){new l(".swiper",{modules:[c,u,p,d],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}})}function g(o,r="red"){f.show({icon:"icon-person",message:o,color:r,position:"topRight",transitionIn:"bounceInDown",transitionOut:"flipOutX",closeOnClick:!0,displayMode:"replace",timeout:3e3})}w();y();
//# sourceMappingURL=main-BB7g0GqI.js.map
