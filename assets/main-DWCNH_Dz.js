import{a as n,S as l,N as c,P as u,K as p,M as d}from"./vendor-CTgxc8tz.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function f(){await n.get("https://portfolio-js.b.goit.study/api/reviews").then(t=>{w(t.data)}).catch(t=>console.log(t))}function w(t){const i=document.querySelector(".swiper-wrapper");console.log(t);let s=t.map(o=>`
    <li class="swiper-slide">
        <p class="review-text">
          ${o.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${o.avatar_url}" alt="Autor: ${o.author}">
          <p class="review-author">${o.author}</p>
        </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",s)}function m(){new l(".swiper",{modules:[c,u,p,d],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}})}f();m();
//# sourceMappingURL=main-DWCNH_Dz.js.map