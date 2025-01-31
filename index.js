import{a as d,i as n,S as u}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function p(i){return i.map(({largeImageURL:t,webformatURL:a,tags:s,likes:e,views:r,comments:c,downloads:l})=>`<li class="gallery-item">
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
                  <p class="card-count">${c}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-download"></i> Downloads</p>
                  <p class="card-count">${l}</p>
                </div>
              </div>
            </article>
          </li>`).join("")}const f="https://pixabay.com/api/",m="48226781-c314bf294542f2e13595e23de",g=15;async function h(i,t=1){try{const s=(await d.get(f,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:t}})).data;if(s.hits.length===0)return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),{hits:[],totalHits:0};const e=p(s.hits);return o.gallery.insertAdjacentHTML("beforeend",e),new u(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh(),s}catch(a){throw console.error("Error fetching images:",a),n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),a}}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchButton:document.querySelector(".button")};o.searchButton.addEventListener("click",y);function y(i){i.preventDefault();const t=o.form.elements.state.value.trim();if(o.gallery.innerHTML="",!t){n.error({message:"Please enter your request",position:"topRight"});return}o.loader.classList.remove("is-hidden"),h(t).then(a=>{}).catch(a=>{o.loader.classList.add("is-hidden"),n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(a)}).finally(()=>{o.loader.classList.add("is-hidden")}),o.form.reset()}
//# sourceMappingURL=index.js.map
