(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{lc:()=>A,PY:()=>y,x6:()=>x,RX:()=>l});var t=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled","disabled"))};function n(e){e.classList.add("popup_opened"),document.addEventListener("keydown",A)}function o(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",A)}var r={baseUrl:"https://nomoreparties.co/v1/plus-cohort-5",headers:{authorization:"42558f7a-d6c8-4f0b-8fbe-7da82591e326","Content-Type":"application/json"}};function a(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}function c(e){var t=document.querySelector("#place-card").content.querySelector(".elements__element").cloneNode(!0),o=t.querySelector(".elements__ico"),c=t.querySelector(".elements__likes-count");t.querySelector(".elements__image").style.backgroundImage="url(".concat(e.link,")"),t.querySelector(".elements__title").textContent=e.name,c.textContent=e.likes.length,t._id=e._id,e.owner.name!=l&&(t.querySelector(".elements__del-ico").style.display="none"),e.likes.forEach((function(e){e.name===l&&o.classList.add("elements__ico_active")})),o.addEventListener("click",(function(e){var n;o.classList.contains("elements__ico_active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(a)}(t._id).then((function(e){o.classList.remove("elements__ico_active"),u(e.likes.length,c)})).catch((function(e){console.log(e)})):(n=t._id,fetch("".concat(r.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:r.headers}).then(a)).then((function(e){o.classList.add("elements__ico_active"),u(e.likes.length,c)})).catch((function(e){console.log(e)}))})),t.querySelector(".elements__del-ico").addEventListener("click",(function(e){var n;(n=t._id,fetch("".concat(r.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:r.headers}).then(a)).then((function(t){e.target.closest(".elements__element").remove()})).catch((function(e){console.log(e)}))})),t.querySelector(".elements__image").addEventListener("click",(function(t){n(y);var o=y.querySelector(".popup__image");o.src=e.link,o.alt=e.name,y.querySelector(".popup__caption").textContent=e.name})),x.prepend(t)}function u(e,t){t.textContent=e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l="",s=document.querySelector(".profile__edit-button"),d=document.querySelector(".popup_type_update-avatar"),p=d.querySelector(".popup__container"),_=(d.querySelector(".popup__save-button"),d.querySelector(".popup__text_type_avatar-link")),f=document.querySelector(".popup_type_add-card"),m=f.querySelector(".popup__container"),v=(f.querySelector(".popup__save-button"),document.querySelector(".popup_type_edit-profile")),y=(v.querySelector(".popup__save-button"),document.querySelector(".popup_type_img")),h=[f,v,y,d],b=f.querySelector(".popup__text_type_card-name"),S=f.querySelector(".popup__text_type_card-link"),q=document.querySelector(".popup__profile-name"),g=document.querySelector(".popup__profile-description");s.addEventListener("click",(function(){n(v),q.value=L.textContent,g.value=E.textContent}));var L=document.querySelector(".profile__name"),E=document.querySelector(".profile__description"),k=document.querySelector(".profile__avatar");document.querySelector(".profile__avatar-overlay").addEventListener("click",(function(){n(d)})),d.addEventListener("submit",(function(e){var t;e.preventDefault(),U("Сохранение...",e.submitter),(t=_.value,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then(a)).then((function(t){k.style.backgroundImage="url(".concat(t.avatar,")"),o(d),p.reset(),e.submitter.setAttribute("disabled","disabled"),e.submitter.classList.add("popup__save-button_disabled")})).catch((function(e){console.log(e)})).finally((function(){U("Сохранить",e.submitter)}))})),v.addEventListener("submit",(function(e){var t;e.preventDefault(),U("Сохранение...",e.submitter),(t={name:q.value,about:g.value},fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(a)).then((function(e){L.textContent=q.value,E.textContent=g.value,o(v)})).catch((function(e){console.log(e)})).finally((function(){U("Сохранить",e.submitter)}))}));var C,x=document.querySelector(".elements");function A(e){"Escape"===e.key&&o(document.querySelector(".popup_opened"))}function U(e,t){t.value=e}document.querySelector(".profile__add-button").addEventListener("click",(function(){n(f)})),f.addEventListener("submit",(function(e){var t;e.preventDefault(),U("Сохранение...",e.submitter),(t={name:b.value,link:S.value},fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:t.name,link:t.link})}).then(a)).then((function(e){c(e),m.reset(),evt.submitter.setAttribute("disabled","disabled"),evt.submitter.classList.add("popup__save-button_disabled")})).catch((function(e){console.log(e)})).finally((function(){U("Сохранить",e.submitter),o(f)}))})),C={formSelector:".popup__container",inputSelector:".popup__text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__text_type_error",errorClass:"popup__error_active"},Array.from(document.querySelectorAll(C.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,n){var o=Array.from(e.querySelectorAll(n.inputSelector)),r=e.querySelector(n.submitButtonSelector);t(o,r,n),o.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".popup__error_type_".concat(t.id));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,o){var r=e.querySelector(".popup__error_type_".concat(t.id));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,a,n),t(o,r,n)}))}))}(e,C)})),h.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&o(e),t.target.classList.contains("popup__close-button")&&o(e)}))})),Promise.all([fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then(a),fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(a)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw r}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],a=o[1];!function(e){l=e.name,L.textContent=l,E.textContent=e.about,k.style.backgroundImage="url(".concat(e.avatar,")")}(r),a.forEach((function(e){c(e)}))})).catch((function(e){console.log(e)}))})();