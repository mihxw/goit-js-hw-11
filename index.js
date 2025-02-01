import{a as d,i as c,S as f}from"./assets/vendor-BDaiwwc1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",u="48226781-c314bf294542f2e13595e23de",m=15;async function g(o,a=1){try{const t=(await d.get(p,{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:a}})).data;return t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t}catch(s){throw console.error("Error fetching images:",s),c.error({message:"Error fetching images. Please try again later.",position:"topRight"}),s}}function h(o){return o.map(({largeImageURL:a,webformatURL:s,tags:t,likes:e,views:r,comments:n,downloads:l})=>`<li class="gallery-item">
          <article class="card">
            <a class="card-link" href="${a}" target="_blank" rel="noopener noreferrer">
              <img class="card-image" src="${s}" alt="${t}" />
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
                <p class="card-count">${n}</p>
              </div>
              <div class="card-item">
                <p class="card-title"><i class="fas fa-download"></i> Downloads</p>
                <p class="card-count">${l}</p>
              </div>
            </div>
          </article>
        </li>`).join("")}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderContainer:document.querySelector(".loader-container")};i.form.addEventListener("submit",y);function y(o){o.preventDefault();const s=o.currentTarget.elements.state.value.trim();if(i.gallery.innerHTML="",!s){c.error({message:"Please enter your request",position:"topRight"});return}i.loaderContainer.classList.remove("is-hidden"),g(s).then(t=>{if(t.hits.length===0){c.error({message:"No images found. Try another search!",position:"topRight"});return}const e=h(t.hits);i.gallery.insertAdjacentHTML("beforeend",e),new f(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(t=>{c.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{i.loaderContainer.classList.add("is-hidden")}),i.form.reset()}
//# sourceMappingURL=index.js.map
