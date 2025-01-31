import{a as d,i as n,S as p}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(o){return o.map(({largeImageURL:t,webformatURL:a,tags:s,likes:e,views:r,comments:i,downloads:l})=>`<li class="gallery-item">
            <article class="card">
              <a class="card-link" href="${t}" target="_blank" rel="noopener noreferrer">
                <img class="card-image" src="${a}" alt="${s}" />
              </a>
              <div class="card-container">
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-heart"></i> Likes</p>
                  <p class="card-count">${e}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-eye"></i> Views</p>
                  <p class="card-count">${r}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-comment"></i> Comments</p>
                  <p class="card-count">${i}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-download"></i> Downloads</p>
                  <p class="card-count">${l}</p>
                </div>
              </div>
            </article>
          </li>`).join("")}const f="https://pixabay.com/api/",m="48226781-c314bf294542f2e13595e23de",g=15;async function h(o,t=1){try{const s=(await d.get(f,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:t}})).data;if(s.hits.length===0)return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),{hits:[],totalHits:0};const e=u(s.hits);return c.gallery.insertAdjacentHTML("beforeend",e),new p(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh(),s}catch(a){throw console.error("Error fetching images:",a),n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),a}}const c={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),searchButton:document.querySelector(".button")};c.searchButton.addEventListener("click",y);function y(o){o.preventDefault();const t=c.form.elements.state.value.trim();if(c.gallery.innerHTML="",!t){n.error({message:"Please enter your request",position:"topRight"});return}h(t).then(a=>{}).catch(a=>{n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(a)}),c.form.reset()}
//# sourceMappingURL=index.js.map
