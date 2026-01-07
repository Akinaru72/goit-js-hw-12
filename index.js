import{S as E,a as S,i as q}from"./assets/vendor-4dYZuk4Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),f=document.querySelector(".load-more"),M=new E(".gallery a",{captionDelay:250,captionsData:"alt"}),p=r=>{const e=r.map(o=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
              <img
                class="gallery-image"
                src="${o.webformatURL}"
                alt="${o.tags}"
              />
              <ul class="gallery-atributes">
                <li>Likes <span class="gallery-values">${o.likes}</span></li>
                <li>Views <span class="gallery-values">${o.views}</span></li>
                <li>Comments <span class="gallery-values">${o.comments}</span></li>
                <li>Downloads <span class="gallery-values">${o.downloads}</span></li>
              </ul>
            </a>
        </li>
      `).join(" ");m.insertAdjacentHTML("beforeend",e),M.refresh()},y=()=>{m.innerHTML=""},g=()=>{h.classList.remove("hidden")},L=()=>{h.classList.add("hidden")},b=()=>{f.classList.remove("hidden")},i=()=>{f.classList.add("hidden")},B="https://pixabay.com/api/",P="48131456-02178b54d24f02562d64ec2d5",v=(r,e)=>S.get(B,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}}),c=document.querySelector(".form"),$=document.querySelector(".load-more"),d=r=>{q.error({backgroundColor:"#ef4040",message:r,position:"topRight",close:!0,timeout:2e3})};let a=1,l="";const w=15,O=async r=>{try{if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!l){d("Field is empty, input again");return}y(),a=1,i(),g();const{data:e}=await v(l,a);if(e.hits.length===0){d("Sorry, there are no images matching <br>your search query. Please try again!"),y(),c.reset();return}p(e.hits),e.totalHits>w&&b(),c.reset()}catch(e){console.log(e)}finally{L()}},R=async()=>{try{a+=1,i(),g();const{data:r}=await v(l,a);p(r.hits),a*w>=r.totalHits?(i(),d("We're sorry, but you've reached the end of search results.")):b();const e=document.querySelector(".gallery"),{height:o}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch(r){console.log(r)}finally{L()}};c.addEventListener("submit",O);$.addEventListener("click",R);
//# sourceMappingURL=index.js.map
