!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire550c;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire550c=a),a.register("jzQFI",(function(t,n){var r,i,o,s;r=t.exports,i="arrayFavorite",o=function(){return v},Object.defineProperty(r,i,{get:o,set:s,enumerable:!0,configurable:!0});var c,d,l=a("bpxeT"),u=a("2TvXO"),f=a("4Nugj"),g=document.querySelector(".gallery-for-fav"),v=(document.querySelector(".saveButton"),document.querySelector(".deleteButtonn"),document.querySelector(".to-delete"),[]);function p(){localStorage.setItem("favorites",JSON.stringify(v))}null!==(d=localStorage.getItem("favorites"))&&(v=JSON.parse(d),N());document.querySelector(".for-event");var m=document.querySelector(".gallery");function k(){v.push(c),p()}function h(){if(v.includes(c)){var e=v.indexOf(c);v.splice(e,1),p()}}m.addEventListener("click",(function(e){("BUTTON"===e.target.nodeName&&"SVG"===e.target.nodeName||e.target.closest(".saveButton"))&&(c=e.target.closest(".saveButton").dataset.id,k()),("BUTTON"===e.target.nodeName&&"SVG"===e.target.nodeName||e.target.closest(".deleteButtonn"))&&(c=e.target.closest(".deleteButtonn").dataset.id,h(),B(),function(e){e.target.classList.toggle("is-hidden")}()),"BUTTON"===e.target.nodeName&&e.target.closest(".learn-more-btn")&&(c=e.target.closest(".learn-more-btn").dataset.id,function(e){var t=localStorage.getItem("favorites");JSON.parse(t).includes(c)?(L.classList.add("is-hidden"),y.classList.remove("is-hidden")):(L.classList.remove("is-hidden"),y.classList.add("is-hidden"))}())})),m.addEventListener("click",(function(e){var t=e.target,n=t.getAttribute("data-id");if(n){var r=document.querySelector('.saveButton[data-id="'.concat(n,'"]')),a=document.querySelector('.deleteButtonn[data-id="'.concat(n,'"]'));t.classList.contains("saveButton")?(r.classList.toggle("is-hidden"),a.classList.remove("is-hidden")):t.classList.contains("deleteButtonn")&&(a.classList.toggle("is-hidden"),r.classList.remove("is-hidden"))}})),document.querySelector(".cocktail-modal").addEventListener("click",(function(e){("BUTTON"===e.target.nodeName&&"SVG"===e.target.nodeName||e.target.closest(".add-to-fav-btn"))&&(c=e.target.closest(".add-to-fav-btn").dataset.id,k()),("BUTTON"===e.target.nodeName&&"SVG"===e.target.nodeName||e.target.closest(".remove-from-fav-btn"))&&(c=e.target.closest(".remove-from-fav-btn").dataset.id,h(),B(),b.classList.toggle("is-hidden"))}));var b=document.querySelector(".backdrop-cocktail"),L=document.querySelector(".add-to-fav-btn"),y=document.querySelector(".remove-from-fav-btn");document.querySelector(".remove-from-fav-btn");function x(e){L.classList.toggle("is-hidden"),y.classList.toggle("is-hidden")}function C(e){return w.apply(this,arguments)}function w(){return(w=e(l)(e(u).mark((function t(n){var r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drinkify-backend.p.goit.global/api/v1/cocktails/lookup/?ids=".concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Network response was not ok");case 5:return e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(){return S.apply(this,arguments)}function S(){return(S=e(l)(e(u).mark((function t(){var n,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(v);case 3:n=e.sent,f.refs.containerNotFoundFavCocktails.classList.add("is-hidden"),n.forEach((function(e){T(e)})),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),null===(r=f.refs.containerNotFoundFavCocktails)||void 0===r||r.classList.remove("is-hidden"),console.error("Error:",e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function T(e){var t=e.drinkThumb,n=e.drink,r=e.instructions,a=e._id,i='<li class="to-delete"><div class="cocktail-card-main" id="cocktail-card-item">\n        <img class="cocktail-card-img" src="'.concat(t,'" alt="').concat(n,'" width="" height="" loading="lazy"/>\n        <h3 class="card-cocktail-name">').concat(n,'</h3>\n        <p class="card-cocktail-desc">').concat(r,'</p>\n        <div class="buttons-container">\n        <button type="button" class="learn-more-btn" data-id="').concat(a,'">learn more</button>\n        <button type="button" class="delete-btn card-cocktail-delete-icon-use deleteButtonn " data-id="').concat(a,'">\n    <svg class="card-cocktail-delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">\n<path d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n      </button>\n        </div>\n      </div></li>');g.insertAdjacentHTML("afterbegin",i)}function B(){g.innerHTML="",N()}L.addEventListener("click",x),y.addEventListener("click",x)})),a.register("keUzR",(function(t,n){var r,i=a("bpxeT"),o=a("2TvXO"),s=a("6JpON"),c=a("4Nugj"),d=a("diKlK"),l=a("dCfNN"),u=a("gnsaF");function f(){return(f=e(i)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.Loading.standard("Loading...",{fontFamily:"Poppins",messageFontSize:"24px"}),e.prev=1,e.next=4,(0,d.getCocktail)(r);case 4:v(e.sent[0]),c.refs.backdropCocktailEl.classList.remove("is-hidden"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),s.Notify.failure("Oops, something went wrong!",{clickToClose:!0}),console.error(e.t0);case 13:return e.prev=13,s.Loading.remove(),e.finish(13);case 16:case"end":return e.stop()}}),t,null,[[1,9,13,16]])})))).apply(this,arguments)}function g(){c.refs.image.src="#",c.refs.header.textContent="#",c.refs.ingredList.innerHTML="",c.refs.instr.textContent="",c.refs.toFavoriteBtn.dataset.id="",c.refs.removeFavoriteBtn.dataset.id=""}function v(e){var t=e.drink,n=e.drinkThumb,r=e.instructions,a=e.ingredients,i=e._id,o=a.map((function(e){return'\n    <li class="ingredients-list-item">\n    <a class="ingredients-link" href="#cocktail-modal">'.concat(e.title,"</a>\n    </li>")})).join("");c.refs.image.src=n,c.refs.header.textContent=t,c.refs.ingredList.innerHTML=o,c.refs.instr.textContent=r,c.refs.toFavoriteBtn.dataset.id=i,c.refs.removeFavoriteBtn.dataset.id=i}a("jzQFI"),c.refs.gallery.addEventListener("click",e(l)((function(e){r=e.target.dataset.id,e.target.dataset.id&&e.target.classList.contains("learn-more-btn")&&(!function(e){f.apply(this,arguments)}(),(0,u.disableBodyScroll)(c.refs.backdropCocktailEl))}),1e3)),c.refs.backdropCocktailEl.addEventListener("click",(function(t){if(t.target!==t.currentTarget&&t.target.closest(".cocktail-modal-x-btn")!==c.refs.closeCocktailModalBtn)return;c.refs.backdropCocktailEl.classList.add("is-hidden"),e(l)(g,100),(0,u.enableBodyScroll)(c.refs.backdropCocktailEl)}))})),a.register("6alNL",(function(t,n){var r=a("bpxeT"),i=a("2TvXO"),o=a("1WSnx"),s=a("6JpON"),c=a("4Nugj"),d=a("diKlK"),l=a("3Cltn"),u=a("3k74g");function f(){return(f=e(r)(e(i).mark((function t(n){var r,a,o,l,f;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.textContent,!n.target.classList.contains("ingredients-link")){e.next=19;break}return e.prev=2,e.next=5,(0,d.getIngredient)(r);case 5:a=e.sent,o=a.find((function(e){return e.title.toLowerCase()===r.toLowerCase()})),(0,u.default)(o),c.refs.backdropIngred.classList.remove("is-hidden"),l=document.querySelector(".add-to-fav-ing-btn"),f=document.querySelector(".remove-from-fav-ing-btn"),l.addEventListener("click",(function(){v(l,f,l.dataset.id)})),f.addEventListener("click",(function(){p(l,f,f.dataset.id)})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),s.Notify.failure("Oops, something went wrong!",{clickToClose:!0}),console.error(e.t0);case 19:case"end":return e.stop()}}),t,null,[[2,15]])})))).apply(this,arguments)}function g(){c.refs.ingreModalInner.innerHTML=""}c.refs.ingredList.addEventListener("click",(function(e){return f.apply(this,arguments)})),c.refs.backdropIngred.addEventListener("click",(function(e){if(e.target!==e.currentTarget&&e.target.closest(".ingred-modal-x-btn")!==c.refs.closeModalBtn)return;(0,o.throttle)(g,100),c.refs.backdropIngred.classList.add("is-hidden")}));var v=function(e,t,n){(0,l.addToLS)("ingredients",n),t.classList.remove("is-hidden"),e.classList.add("is-hidden")},p=function(e,t,n){(0,l.removeFromLS)("ingredients",n),e.classList.remove("is-hidden"),t.classList.add("is-hidden")}}))}();
//# sourceMappingURL=index.75a345ca.js.map
