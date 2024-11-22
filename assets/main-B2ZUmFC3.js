import{a as n,S as l,N as c,P as u,K as p,M as d}from"./vendor-CTgxc8tz.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(){await n.get("https://portfolio-js.b.goit.study/api/reviews").then(r=>{w(r.data)}).catch(r=>console.log(r))}function w(r){const i=document.querySelector(".swiper-wrapper");console.log(r);let s=r.map(o=>`
    <li class="swiper-slide">
        <p class="review-text">
          ${o.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${o.avatar_url}" alt="Autor: ${o.author}">
          <p class="review-author">${o.author}</p>
        </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",s)}function m(){new l(".swiper",{modules:[c,u,p,d],cssMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0},slidesPerView:2,spaceBetween:32})}f();m();
//# sourceMappingURL=main-B2ZUmFC3.js.map
