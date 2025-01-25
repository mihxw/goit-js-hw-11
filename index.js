import{a as d,i as n,S as f}from"./assets/vendor-BDaiwwc1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(o){return o.map(({largeImageURL:a,webformatURL:t,tags:s,likes:e,views:r,comments:c,downloads:l})=>`<li class="gallery-item">
            <article class="card">
              <a class="card-link" href="${a}" target="_blank" rel="noopener noreferrer">
                <img class="card-image" src="${t}" alt="${s}" />
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
          </li>`).join("")}const u="https://pixabay.com/api/",m="48226781-c314bf294542f2e13595e23de",g=15;async function y(o,a=1){try{const s=(await d.get(u,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:a}})).data;if(s.hits.length===0)return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),{hits:[],totalHits:0};const e=p(s.hits);return i.gallery.insertAdjacentHTML("beforeend",e),new f(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh(),s}catch(t){throw console.error("Error fetching images:",t),n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),t}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",h);function h(o){o.preventDefault();const t=o.currentTarget.elements.state.value.trim();if(i.gallery.innerHTML="",!t){n.error({message:"Please enter your request",position:"topRight"});return}i.loader.classList.remove("is-hidden"),y(t).catch(s=>{i.loader.style.display="none",n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(s)}).finally(()=>{i.loader.classList.add("is-hidden")}),i.form.reset()}
//# sourceMappingURL=index.js.map
