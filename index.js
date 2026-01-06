import{S as w,a as E,i as S}from"./assets/vendor-4dYZuk4Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const y=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new w(".gallery a",{captionDelay:250,captionsData:"alt"}),f=r=>{const e=r.map(o=>`
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
      `).join(" ");y.insertAdjacentHTML("beforeend",e),q.refresh()},u=()=>{y.innerHTML=""},p=()=>{m.classList.remove("hidden")},g=()=>{m.classList.add("hidden")},M=()=>{h.classList.remove("hidden")},L=()=>{h.classList.add("hidden")},B="https://pixabay.com/api/",P="48131456-02178b54d24f02562d64ec2d5",b=(r,e)=>E.get(B,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}}),i=document.querySelector(".form"),$=document.querySelector(".load-more"),c=r=>{S.error({backgroundColor:"#ef4040",message:r,position:"topRight",close:!0,timeout:2e3})};let a=1,l="";const v=15,O=async r=>{try{if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!l){c("Field is empty, input again");return}u(),a=1,L(),p();const{data:e}=await b(l,a);if(e.hits.length===0){c("Sorry, there are no images matching <br>your search query. Please try again!"),u(),i.reset();return}f(e.hits),e.totalHits>v&&M(),i.reset()}catch(e){console.log(e)}finally{g()}},R=async()=>{try{a+=1,p();const{data:r}=await b(l,a);f(r.hits),a*v>=r.totalHits&&(L(),c("We're sorry, but you've reached the end of search results."));const e=document.querySelector(".gallery"),{height:o}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch(r){console.log(r)}finally{g()}};i.addEventListener("submit",O);$.addEventListener("click",R);
//# sourceMappingURL=index.js.map
