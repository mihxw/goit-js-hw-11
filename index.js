import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(a){return a.map(({largeImageURL:r,webformatURL:s,tags:o,likes:e,views:t,comments:c,downloads:l})=>`<li class="gallery-item">
            <article class="card">
              <a class="card-link" href="${r}" target="_blank" rel="noopener noreferrer">
                <img class="card-image" src="${s}" alt="${o}" />
              </a>
              <div class="card-container">
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-heart"></i> Likes</p>
                  <p class="card-count">${e}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-eye"></i> Views</p>
                  <p class="card-count">${t}</p>
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
          </li>`).join("")}const u="https://pixabay.com/api/",p="48226781-c314bf294542f2e13595e23de";function m(a){return fetch(`${u}?key=${p}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=f(r.hits);i.gallery.insertAdjacentHTML("beforeend",s),new d(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(r=>{throw console.error("Error fetching images:",r),r})}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",h);function h(a){a.preventDefault();const s=a.currentTarget.elements.state.value.trim();if(i.gallery.innerHTML="",!s){n.error({message:"Please enter your request",position:"topRight"});return}i.loader.classList.remove("is-hidden"),m(s).catch(o=>{i.loader.style.display="none",n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{i.loader.classList.add("is-hidden")}),i.form.reset()}
//# sourceMappingURL=index.js.map
